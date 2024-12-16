import pkg from 'pg';
const { Client } = pkg;
import { v4 as uuidv4 } from 'uuid';
import { sendPhonePeRequest } from '../utils/phonepe-init.js';
import { registrationDone } from '../utils/registrationComplete.js';
import sendEmail from '../utils/email.js';
import axios from "axios";

const dbUri = "postgresql://neondb_owner:ieZAv95SntYJ@ep-lively-shape-a5ts91cg.us-east-2.aws.neon.tech/neondb?sslmode=require";


export const GET = async () => {
    const client = new Client({
        connectionString: dbUri,
    });

    try {
        // Connect to the database
        await client.connect();

        // Example query to retrieve a list of tables
        const res = await client.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public';
        `);

        // Close the database connection
        await client.end();

        // Return the table names in the response
        return new Response(
            JSON.stringify({ message: "Database details fetched successfully", tables: res.rows }),
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
        console.error('Error fetching database details:', error);

        // Return error response if something goes wrong
        return new Response(
            JSON.stringify({ message: "Error fetching database details", error: error.message }),
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
    }
};

// Reusable function to generate PhonePe URL
const generatePhonePeUrl = async (userId) => {
    const redirectURL = `https://academy.timechainlabs.io/registerdone`;
    const callbackURL = "https://academy.timechainlabs.io/api/phonepe";



    try {
        const paymentURL = await sendPhonePeRequest(
            redirectURL,
            callbackURL,
            "PGTESTPAYUAT86", // MerchantUserID (replace with dynamic if needed)
            userId,           // MerchantTransactionID
            8999,           // Payment amount in INR
            false             // Set to true for production
        );
        return paymentURL;
    } catch (error) {
        console.error('Error generating PhonePe URL:', error);
        throw new Error('Failed to generate payment URL');
    }
};

export const POST = async ({ request }) => {
    const client = new Client({
        connectionString: dbUri,
    });

    try {
        // Parse the incoming JSON data from the request body
        const formData = await request.json();
        console.log(formData);

        // Destructure the form data
        const { fullName, email, phone, linkedIn, mailingAddress, referedBy, organization, profession, countryCode } = formData;

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
            const { paymentStatus, updatedAt, id: userId } = existingUser;
            const lastUpdatedTime = new Date(updatedAt);
            const currentTime = new Date();
            const timeDifference = (currentTime - lastUpdatedTime) / 1000 / 60; // Time difference in minutes

            //   
            if ((paymentStatus === 'FAILED' || paymentStatus === 'PENDING') && timeDifference > 5) {
                // Generate new PhonePe URL if last updated > 5 minutes
                const paymentURL = await generatePhonePeUrl(userId);
                return new Response(
                    JSON.stringify({ message: "Payment URL generated.", id: userId, URL: paymentURL }),
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
                        status: 400,
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

        // If no existing entry, insert new record
        const userId = uuidv4();
        const updatedAt = new Date();
        const query = `
            INSERT INTO "Student" (id, "fullName", email, phone, "linkedIn", "mailingAddress", "referedBy", "paymentStatus", "updatedAt", "countryCode", organization, profession)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING id;
        `;
        const values = [
            userId,
            fullName,
            email,
            phone,
            linkedIn,
            mailingAddress || null, // Handle optional field
            referedBy || null,       // Handle optional field
            'PENDING',               // Default to 'PENDING'
            updatedAt,
            countryCode,
            organization,
            profession,
        ];

        const res = await client.query(query, values);

        // Generate the PhonePe URL
        const paymentURL = await generatePhonePeUrl(userId);

        // Close database connection
        await client.end();


        return new Response(
            JSON.stringify({ message: "Student data saved successfully", id: res.rows[0].id, URL: paymentURL }),
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