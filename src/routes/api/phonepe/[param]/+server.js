import { checkStatus } from '../../utils/phonepe-init.js';
import pkg from 'pg';
const { Pool } = pkg;

// PostgreSQL connection configuration
const pool = new Pool({
    connectionString: 'postgres://default:V5kO8cAFriym@ep-tight-surf-a4yjbe8r.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});
export async function GET({ params }) {
    const { param: txID } = params; // Extract the transaction ID from the URL
    console.log('Transaction ID:', txID);
  
    try {
      // Call the checkStatus function with the extracted parameter
      let status = await checkStatus(txID);
      const client = await pool.connect();
      const { rows } = await client.query(
        `SELECT * FROM "student" WHERE id = $1`,
        [txID]
    );

    if (rows.length === 0) {
        return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }



    const student = rows[0]; // Extract student details
    const dbstatus = student.paymentstatus;

    if (dbstatus !=='PENDING'){
        status.data.state = dbstatus
    }

    client.release();




      return new Response(JSON.stringify(status), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific ones
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });


    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch transaction status", details: error.message }),
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
  }
  
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