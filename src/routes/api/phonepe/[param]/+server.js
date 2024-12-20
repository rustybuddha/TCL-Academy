import { checkStatus } from '../../utils/phonepe-init.js';


export async function GET({ params }) {
    const { param: txID } = params; // Extract the transaction ID from the URL
    console.log('Transaction ID:', txID);
  
    try {
      // Call the checkStatus function with the extracted parameter
      const status = await checkStatus(txID);
      return new Response(JSON.stringify(status), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch transaction status", details: error.message }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
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