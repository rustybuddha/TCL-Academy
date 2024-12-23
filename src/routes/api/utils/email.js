import nodemailer from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';
import dotenv from 'dotenv'
dotenv.config();


/**
 * Sends an email using AWS SES via Nodemailer.
 * @param {string} email - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} [bodyHtml] - The HTML content of the email (optional).
 * @param {string} [bodyText] - The plain text content of the email (optional).
 * @returns {Promise<{statusCode: number, message: string}>} - Status and message.
 * @throws {Error} - Throws an error if email sending fails.
 */
export default async function sendEmail(email, subject, bodyHtml = '', bodyText = '') {
	if (!email || !subject || (!bodyHtml && !bodyText)) {
		throw new Error('Invalid input: Email, subject, and at least one of bodyHtml or bodyText are required.');
	}

// 	const AWS_ACCESS_KEY_ID = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
// 	const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SES_SECRET_KEY;
// 	console.log(AWS_ACCESS_KEY_ID)
// 	console.log(AWS_SECRET_ACCESS_KEY)
// 	const AWS_ACCESS_KEY_ID2 = process.env.VITE_AWS_ACCESS_KEY_ID;
// const AWS_SECRET_ACCESS_KEY2 = process.env.VITE_AWS_SES_SECRET_KEY;
// console.log(AWS_ACCESS_KEY_ID2)
// 	console.log(AWS_SECRET_ACCESS_KEY2)

// 	if (AWS_ACCESS_KEY_ID===undefined){
// 		A
// 	}


	const ses = new aws.SES({
		apiVersion: "2.1692.0",
		region: "ap-south-1",
		...{
			credentials: {
				accessKeyId: "AKIA3ERHYQPQPUEE4DIJ",
				secretAccessKey: "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"
			}
		}
	});

	// Create Nodemailer SES transporter
	const transporter = nodemailer.createTransport({
		SES: { ses, aws }
	});

	// Construct email payload
	const mailOptions = {
		from: {
			name: 'Rebecca from Timechain Academy',
			address: 'academy@timechainlabs.io'
		},
		to: email,
		subject: subject,
		...(bodyHtml ? { html: bodyHtml } : {})
	};

	try {
		// Send email
		await transporter.sendMail(mailOptions);
		console.log('E-mail sent successfully!');
		return {
			statusCode: 200,
			message: 'E-mail sent successfully.'
		};
	} catch (error) {
		console.error('Error sending email:', error);
		throw new Error(`Error sending email: ${error.message || error}`);
	}
}
