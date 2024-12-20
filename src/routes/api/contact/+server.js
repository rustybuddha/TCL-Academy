import sendEmail from '../utils/email.js';

export const POST = async ({ request }) => {
    try {
        const formData = await request.json();

        const { fullName, email, phone, message, countryCode } = formData;

  
        try {
            await sendEmail(
                "support@timechainlabs.io",
                `Timechain Academy - Query from ${email}`,
                message,
                message
            );

            await sendEmail(
                email,
                `Greetings from Timechain Academy`,
                "We have received your query. Someone from our team will get back to you shortly.",
                "We have received your query. Someone from our team will get back to you shortly."
            );

            console.log("Confirmation and Support emails sent successfully!");
     

        } catch (emailError) {
            console.error("Error sending email:", emailError);
            toast.error("There was an error sending your message. Please try again later.");
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
            JSON.stringify({ message: "Contact form submitted successfully" }),
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
        console.error('Error handling contact form submission:', error);

        return new Response(
            JSON.stringify({ message: "Error processing contact form", error: error.message }),
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
