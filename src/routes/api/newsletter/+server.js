import sendEmail from '../utils/email.js';
import {newsletteremail} from '../utils/newsletter.js';

export const POST = async ({ request }) => {
    try {
        const formData = await request.json();
        const { email } = formData;

        try {
            await sendEmail(
                "support@timechainlabs.io",
                `Timechain Academy Blog - newsletter subscribed by ${email}`,
                `Successfully subscribed ${email}`
            );

            await sendEmail(
                email,
                `Successfully Subscribed`,
                `${newsletteremail}`
            );

            console.log("newsletter and Support emails sent successfully!");

        } catch (emailError) {
            console.error("Error sending email:", emailError);
            return new Response(
                JSON.stringify({ message: "Error sending email", error: emailError.message }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    },
                }
            );
        }

        return new Response(
            JSON.stringify({ message: "newsletter form submitted successfully" }),
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

    } catch (error) {
        console.error('Error handling newsletter form submission:', error);

        return new Response(
            JSON.stringify({ message: "Error processing newsletter form", error: error.message }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            }
        );
    }
};

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
