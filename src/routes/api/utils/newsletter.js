export const newsletteremail = `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>academy newsletter</title>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Rubik', sans-serif;
            padding: 0;
            margin: 0;
            background-color: #ffffff;
        }

        table {
            width: 100%;
            max-width: 640px;
            margin: 0 auto;
            padding-right: .5rem;
            border-spacing: 0;
        }

        td {
            padding: 0;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        h1, p {
            margin: 0;
        }

        .header {
            height: auto;
            width: 100%;
            border-radius: 8px 8px 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header h1, .header p {
            font-size: 20px;
            color: #fff;
            font-weight: 400;
            margin: 0;
        }

        .content {
            font-size: 13px;
            color: #333333;
            padding: 20px;
        }

        .newsletter-text {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }

        .newsletter-text-heading {
            font-weight: 600;
            font-size: 18px;
        }

        .newsletter-text-sub {
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }

        @media screen and (max-width: 450px) {
            .header h1, .header p {
                font-size: 18px;
            }

            .content {
                padding: 12px;
                font-size: 12px;
            }

            .content p {
                font-size: 14px;
            }

            .social-icons a {
                margin-right: 10px;
            }

            .footer p {
                font-size: 10px;
            }

            .newsletter-text {
                font-size: 12px !important;
            }

            .newsletter-text-heading {
                font-size: 16px !important;
            }

            .newsletter-text-sub {
                font-size: 16px !important;
            }
        }

        @media screen and (max-width: 400px) {
            .newsletter-text-heading {
                font-size: 14px !important;
            }
        }

        .social-icons {
            margin-top: 20px;
            text-align: center;
        }

        .social-icons a {
            margin-right: 6px;
        }

        .footer {
            text-align: left;
            padding: 20px;
        }

        .footer p {
            font-size: 12px;
            color: #767676;
        }

    </style>
</head>

<body>

    <table align="center" style="padding: 30px;">
        <tr>
            <td style="padding: 20px; text-align: center;">
                <img src="https://academy.timechainlabs.io/academy/templates/tcl.png" alt="TCL Logo">
            </td>
        </tr>
        <tr>
            <td class="header">
                <img src="https://academy.timechainlabs.io/academy/templates/newsletter-header.png" alt="header">
            </td>
        </tr>
        <tr>
            <td class="content">
                <p class="newsletter-text-heading" style="font-size: 24px; margin-top: 10px;">Hi Champ</p>
                <p class="newsletter-text-sub" style="font-size: 20px; margin-top: 20px;">Thank you for subscribing to our newsletter! 🎉</p>
                <p class="newsletter-text-sub" style="font-size: 20px; margin-top: 20px; line-height: 27px;">We’re thrilled to have you join our community. Here’s what you can look forward to in your inbox:</p>
            </td>
        </tr>
        <tr>
            <td class="content" style="gap:10px; display: flex; justify-content: start; align-items: start; flex-direction: column;">
                <p class="newsletter-text" style="display: flex; justify-content: start; align-items: center; gap:10px; font-size: 18px;">
                    <img src="https://academy.timechainlabs.io/academy/templates/newsletter1.png" alt="newsletter"> 
                    Curated insights to keep you updated on latest trends.
                </p>
                <p class="newsletter-text" style="display: flex; justify-content: start; align-items: center; margin-top: 10px; gap:10px; font-size: 18px;">
                    <img src="https://academy.timechainlabs.io/academy/templates/newsletter2.png" alt="newsletter"> 
                    Practical tips to help you grow and succeed.
                </p>
                <p class="newsletter-text" style="display: flex; justify-content: start; align-items: center; margin-top: 10px; gap:10px; font-size: 18px;">
                    <img src="https://academy.timechainlabs.io/academy/templates/newsletter3.png" alt="newsletter"> 
                    Exciting updates about our journey, events, and offerings.
                </p>
            </td>
        </tr>
        <tr>
            <td class="content">
                <p class="newsletter-text-sub" style="font-size: 20px; line-height: 25px;">Our goal is to bring you value with every email and keep you inspired along the way.</p>
                <p class="newsletter-text-sub" style="font-size: 20px; margin-top:20px; line-height: 25px;">In the meantime, feel free to check out <a href="https://academy.timechainlabs.io/blog/the-future-of-technology-and-careers:-why-blockchain-is-the-answer-">article</a> for more insights.</p>     
                <p class="newsletter-text-sub" style="font-size: 20px; margin-top:20px; line-height: 25px;">Let’s make this journey together!</p>
            </td>
        </tr>
        <tr>
            <td class="content">
                <p class="newsletter-text-sub" style="font-size: 20px; line-height: 25px;">Cheers, <br> Blockchain Mastery Team</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; border-top: 1px solid #ddd;">
                <p class="newsletter-text-sub">Follow us on social media</p>
                <p class="social-icons">
                    <a href="https://x.com/timechainlabs"><img src="https://timechainlabs.io/email-template/x-logo.png" alt="X" style="width: 20px; margin-right: 6px;"></a>
                    <a href="https://www.linkedin.com/company/timechainlabs"><img src="https://timechainlabs.io/email-template/linkedin-logo.png" alt="LinkedIn" style="width: 20px; margin-right: 6px;"></a>
                    <a href="https://www.instagram.com/timechainlabs/"><img src="https://timechainlabs.io/email-template/instagram-logo.png" alt="Instagram" style="width: 20px;"></a>
                </p>
                <p class="footer" style="text-align: center;">© Timechain Academy | 2024</p>
            </td>
        </tr>
    </table>

</body>

</html>


`;