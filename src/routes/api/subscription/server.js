import sendEmail from '../utils/email.js';

export const POST = async ({ request }) => {
    try {
        const formData = await request.json();

        const { fullName, email, } = formData;

        const name = fullName.split(" ")[0]
  
        try {
            await sendEmail(
                email,
                `Greetings from Timechain Academy`,
                `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>academy blog newsletter</title>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet">
</head>

<body style="     font-family: 'Rubik', sans-serif;
padding: .5rem;
background-color: #ffffff;">

    <table align="center" width="640px" style="padding-right: .5rem;">
        <tr>
            <td align="center" style="padding: 20px;">
                <img src="https://academy.timechainlabs.io/academy/templates/tcl.svg" alt="TCL Logo">
            </td>
        </tr>
        <tr>
           
            <td style="background: url('https://academy.timechainlabs.io/academy/templates/header.svg') no-repeat center/contain; text-align: center; padding: 40px; border-radius: 8px 8px 0 0; height: 80px; width: 50%;">
                <p style="font-size: 36px; color: #fff; font-weight: 400; margin: 0;">Stay inspired, informed,</p>
                <h1 style="font-size: 36px; font-weight: 400; color: #fff; margin: 10px 0;">and ahead of the curve</h1>
            </td>
            

        </tr>
        <tr>
            <td style="font-size: 16px; color: #333333;">
                <p style="font-size: 26px; font-weight: 600;">Hi ${name}</p>
                <p style="margin-top: 20px; font-size: 21px; font-weight: 400; display: flex; align-items: center;">Thank you for subscribing to our newsletter! 🎉</p>
                <p style="margin-top: 20px; font-size: 21px; font-weight: 400; display: flex; align-items: center;">We’re thrilled to have you join our community. Here’s what you can look forward to in your inbox:</p>
            </td>
        </tr>
        <tr>
            <td style="font-size: 16px; color: #333333;">
                <p style="margin-top: 20px; font-size: 20px;  font-weight: 400; display: flex; align-items: center; gap:10px;"> <img src="https://academy.timechainlabs.io/academy/templates/newsletter1.svg" alt="newsletter"> <span>Curated insights to keep you updated on latest trends.</span> </p>
                <p style="margin-top: 20px; font-size: 20px;  font-weight: 400; display: flex; align-items: center; gap:10px;"> <img src="https://academy.timechainlabs.io/academy/templates/newsletter2.svg" alt="newsletter"> <span>Practical tips to help you grow and succeed.</span> </p>
                <p style="margin-top: 20px; font-size: 20px;  font-weight: 400; display: flex; align-items: center; gap:10px;"> <img src="https://academy.timechainlabs.io/academy/templates/newsletter3.svg" alt="newsletter"> <span>Exciting updates about our journey, events, and offerings.</span> </p>       </td>
        </tr>
        <tr>
            <td style="font-size: 16px; color: #333333;">
                <p style="font-size: 20px; font-weight: 400; line-height: 26px;">Our goal is to bring you value with every email and keep you inspired along the way.</p>
                <p style="margin-top: 20px; font-size: 20px; font-weight: 400; line-height: 26px;">In the meantime, feel free to check out [link to a resource, blog, or social media page] for more insights.</p>     
                <p style="font-size: 20px; font-weight: 400; line-height: 26px;">Let’s make this journey together!</p>
            </td>
        </tr>
        <tr>
            <td style="font-size: 16px; color: #333333;">
                <p style="margin-top: 20px; font-size: 20px; font-weight: 400; line-height: 26px;">Cheers, <br> Blockchain Mastery Team</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; border-top: 1px solid #ddd;">
                <p style="font-weight: 300; font-size: 16px;">Follow us on social media</p>
                <p style="margin-top: 25px;">
                    <a href="https://x.com/timechainlabs"><img src="https://academy.timechainlabs.io/academy/templates/X.svg" alt="X" style="width: 24px; margin-right: 10px;"></a>
                    <a href="https://www.linkedin.com/company/timechainlabs"><img src="https://academy.timechainlabs.io/academy/templates/linkedIn.svg" alt="LinkedIn" style="width: 24px; margin-right: 10px;"></a>
                    <a href="https://www.instagram.com/timechainlabs/"><img src="https://academy.timechainlabs.io/academy/templates/instagram.svg" alt="Instagram" style="width: 24px;"></a>
                </p>
                <p style="margin-top: 25px; color: #767676; font-size: 12px;">© Timechain Academy | 2024</p>
            </td>
        </tr>
    </table>
</body>

</html>
`,
                "Thank you for subscribing to our Blogs!"
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
            JSON.stringify({ message: "Blog Subscription  email sent successfully!" }),
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
        console.error('Error handling subscription blog submission:', error);

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
