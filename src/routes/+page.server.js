// import client from "../lib/sanityClient.js";
// import { superValidate, message } from "sveltekit-superforms/server";
// import { consultRequestSchema } from "$lib/schemas.js";
// import {
//   clearFields,
//   createContactInBrevo,
//   makeApiRequest,
//   extractNames,
//   formatDate,
// } from "../lib/utils.js";

// const receiverEmail = import.meta.env.VITE_SENDER_EMAIL;
// const emailApiUrl = "https://api.brevo.com/v3/smtp/email";

// export async function load({ params }) {
//   const data = await client.fetch(`*[_type == "testimonials"]`);
//   const case_studies = await client.fetch(`*[_type == "case_studies"]`);
//   let blogs = await client.fetch(
//     `*[_type == "blogs" && doc_type == "blog"] | order(_createdAt desc) [0...3]`
//   );
//   blogs = await Promise.all(
//     blogs.map((post) => {
//       post.date = formatDate(new Date(post._createdAt));
//       return post;
//     })
//   );

//   const form = await superValidate(consultRequestSchema);
//   if (data) {
//     return {
//       testimonials: data,
//       case_studies,
//       blogs,
//       form,
//     };
//   }
//   return {
//     status: 500,
//     body: new Error("Internal Server Error"),
//   };
// }

// export const actions = {
//   consultRequest: async ({ request }) => {
//     const submittedData = await request.formData();
//     const form = await superValidate(submittedData, consultRequestSchema);

//     let actionResponse = {
//       status: "failed",
//       content: "",
//     };

//     if (!form.valid) {
//       return message(form, actionResponse);
//     }

//     try {
//       const { senderName, senderEmail, senderDescription, senderCompanyName } =
//         form.data;

//       const body = `${senderName} from ${senderCompanyName} is looking for consultation. Here's the message: "${senderDescription}"`;

//       const { response, result } = await makeApiRequest(emailApiUrl, {
//         sender: { name: senderName, email: senderEmail },
//         subject: "Need consultation from experts",
//         to: [{ email: receiverEmail }],
//         textContent: body,
//       });

//       console.log("response ", result, response.ok);
//       const { firstName, lastName } = extractNames(senderName);

//       const contactDetails = {
//         attributes: {
//           FIRSTNAME: firstName,
//           ...(lastName && { LASTNAME: lastName }),
//         },
//         updateEnabled: true,
//         email: senderEmail,
//         listIds: [26],
//       };

//       if (!response.ok) {
//         if (response.status === 401) {
//           return message(form, {
//             ...actionResponse,
//             content: "Bad Request",
//           });
//         }
//         return message(form, {
//           ...actionResponse,
//           content: `HTTP error! status: ${response.status}`,
//         });
//       }

//       clearFields(form.data);

//       try {
//         const createContact = await createContactInBrevo(contactDetails);
//         console.log(createContact);
//       } catch (createContactError) {
//         console.error(createContactError);
//       }

//       try {
//         const replyBack = await makeApiRequest(emailApiUrl, {
//           to: [{ email: senderEmail }],
//           templateID: 24,
//           params: {
//             FIRSTNAME: firstName,
//             ...(lastName && { LASTNAME: lastName }),
//             EMAIL: senderEmail,
//           },
//         });
//       } catch (replyBackError) {
//         console.error(replyBackError);
//       }

//       return message(form, {
//         ...actionResponse,
//         status: "success",
//         content: "Consultation request sent!",
//       });
//     } catch (err) {
//       return message(form, { ...actionResponse, content: err.message });
//     }
//   },
// };
