import { sha256 } from 'js-sha256';
import pkg from 'pg';
import sendEmail from '../utils/email.js'; // Ensure you have this file for sending emails
import { registrationDone  } from '../utils/registrationComplete.js';
import {  pendingPayment } from '../utils/paymentPending.js';

const { Pool } = pkg;

// PostgreSQL connection configuration
const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:ieZAv95SntYJ@ep-lively-shape-a5ts91cg.us-east-2.aws.neon.tech/neondb?sslmode=require',
});

export const POST = async ({ request }) => {
    try {
        // Step 1: Read the request body 
        const body = await request.json();
        const callbackData = body;

        console.log("Step 2: Received callback data:", callbackData);

        // Step 3: Decode the base64 encoded response
        let decodedData;
        try {
            decodedData = Buffer.from(callbackData.response, 'base64').toString('utf8');
            console.log("Step 4: Decoded base64 response:", decodedData);
        } catch (err) {
            console.log("Step 4: Error decoding base64 response:", err);
            return new Response("Invalid base64 response", { status: 400 });
        }

        // Step 5: Parse the decoded JSON
        let decodedResponse;
        try {
            decodedResponse = JSON.parse(decodedData);
            console.log("Step 5: Decoded response:", decodedResponse);
        } catch (err) {
            console.log("Step 5: Error parsing decoded response:", err);
            return new Response("Invalid decoded response", { status: 400 });
        }

        // Step 6: Calculate checksum
        const checksumInput = callbackData.response + "96434309-7796-489d-8924-ab56988a6076" //'//20974b1d-ae1c-42f5-9685-22d6c8da9dc7' //'9f37e36f-b58f-4e34-9a28-cb7fdd686d0' // Prod key 
        const calculatedChecksum = sha256(checksumInput);
        console.log("Step 6: Calculated checksum:", calculatedChecksum);

        // Step 7: Validate the X-VERIFY header
        let xVerify = request.headers.get('X-VERIFY');
        console.log("Step 7: X-VERIFY header:", xVerify);

        if (xVerify.includes('###')) {
            xVerify = xVerify.split('###')[0];
            console.log("Step 7: Trimmed X-VERIFY header:", xVerify);
        }

        if (calculatedChecksum !== xVerify) {
            console.log("Step 7: Invalid checksum");
            return new Response("Invalid checksum", { status: 400 });
        }

        console.log("Step 7: Checksum validation passed");

        // Step 8: Handle Payment Success/Failure
        if (decodedResponse.Code === 'PAYMENT_SUCCESS') {
            console.log("Step 8: Payment success");
        } else {
            console.log("Step 8: Payment failed");
        }

        const merchantTransactionId = decodedResponse?.data?.merchantTransactionId;

        // Step 9: Update Payment Status in PostgreSQL
        const client = await pool.connect();

        try {
            // Check if the event exists
            const { rows } = await client.query(
                `SELECT * FROM "Student" WHERE id = $1`,
                [merchantTransactionId]
            );

            if (rows.length === 0) {
                return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
            }

            const student = rows[0]; // Extract student details
            const studentEmail = student.email;

            // Update the payment status
            let paymentStatus = 'Pending';
            switch (decodedResponse.data.state) {
                case 'COMPLETED':
                    paymentStatus = 'COMPLETED';
                    break;
                case 'FAILED':
                    paymentStatus = 'Failed';
                    break;
            }

            if (paymentStatus === 'Failed') {

                try {
                    await sendEmail(
                        studentEmail,    
                        'Thank you for you interest in us!',
                        pendingPayment,
                        `Dear ${student.name},\n\nThank you for you interest in our course!`
                    );
                    console.log("Confirmation email sent successfully!");
                } catch (emailError) {
                    console.error("Error sending confirmation email:", emailError);
                }


                return new Response(
                    JSON.stringify({ message: "Payment failed!" }),
                    { status: 400 }
                );
            }

            await client.query(
                `UPDATE "Student" SET "paymentStatus" = $1 WHERE id = $2`,
                [paymentStatus, merchantTransactionId]
            );

            console.log("Step 9: Payment status updated in database");


            try {
                await sendEmail(
                    studentEmail,    
                    'Enrollment Complete!!',
                    registrationDone,
                    `Dear ${student.name},\n\nThank you for enrolling in our course. Your payment has been successfully received, and your enrollment is now confirmed.\n\nWe look forward to seeing you in the course!`
                );
                console.log("Confirmation email sent successfully!");
            } catch (emailError) {
                console.error("Error sending confirmation email:", emailError);
            }

            // Respond to the callback request
            return new Response(
                JSON.stringify({ message: "Payment Successful" }),
                {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    },
                }
            );
        } catch (err) {
            console.log("Database error:", err);
            return new Response("Internal server error", {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            });
        } finally {
            client.release();
        }
    } catch (err) {
        console.log("Error:", err);
        return new Response("Internal server error", { 
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
};

// Handle OPTIONS preflight requests
export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
