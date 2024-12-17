import pkg from 'pg';
const { Client } = pkg;
import { v4 as uuidv4 } from 'uuid';
import { createDeal } from '../utils/freshsales.js';

const dbUri = "postgresql://neondb_owner:ieZAv95SntYJ@ep-lively-shape-a5ts91cg.us-east-2.aws.neon.tech/neondb?sslmode=require";


export const POST = async ({ request }) => {
    const client = new Client({
        connectionString: dbUri,
    });

    try {
        // Parse the incoming JSON data from the request body
        const formData = await request.json();
        console.log(formData);

        // Destructure the form data
        const { fullName, email, phone, message, countryCode } = formData;

        await client.connect(); // Establish database connection

        // Check for existing entry with the same email
        const checkQuery = `
            SELECT * 
            FROM "Student" 
            WHERE email = $1;
        `;
        const checkRes = await client.query(checkQuery, [email]);

        if (checkRes.rows.length > 0) {
            const existingUser = checkRes.rows[0];
            const { paymentStatus } = existingUser;
            

            //   
            if ((paymentStatus === 'FAILED' || paymentStatus === 'PENDING')) {
                
                return new Response(
                    JSON.stringify({ message: "Thank you for your interest! OUr team will contact you soon." }),
                    {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific ones
                            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                        },
                    }
                );
            } else {
                let responceMsg = "Course is already bought by this email."
                if (paymentStatus !== 'COMPLETED') {
                    responceMsg = "Please wait a few minutes as your previous payment is either still processing or has failed. Kindly try again in 5 minutes."
                }
                // Return error if course is already bought
                return new Response(
                    JSON.stringify({ message: responceMsg }),
                    {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific ones
                            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                        },
                    }
                );
            }
        }

        const { contact_id, deal_id }  = await createDeal(fullName, email, phone, "", "", countryCode.countryname,"", "", message)
        


        // If no existing entry, insert new record
        const userId = uuidv4();
        const updatedAt = new Date();
        const query = `
            INSERT INTO "Student" (id, "fullName", email, phone, "linkedIn", "mailingAddress", "referedBy", "paymentStatus", "updatedAt", "countryCode", organization, profession, deal_id, contact_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING id;
        `;
        const values = [
            userId,
            fullName,
            email,
            phone,
            "",
            "", // Handle optional field
            message || null,       // Handle optional field
            'INTEREST',               // Default to 'PENDING'
            updatedAt,
            countryCode,
            "",
            "",
            deal_id,
            contact_id,
        ];

        const res = await client.query(query, values)

        // Close database connection
        await client.end();


        return new Response(
            JSON.stringify({ message: "Student data saved successfully", id: res.rows[0].id }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific ones
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            }
        );
    } catch (error) {
        console.error('Error saving data:', error);

        return new Response(
            JSON.stringify({ message: "Error saving student data", error: error.message }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific ones
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            }
        );
    } finally {
        await client.end(); // Ensure database connection is closed
    }
};


// Handle OPTIONS preflight requests
export async function OPTIONS() {
    return new Response(null, {
        status: 204, // No content
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}