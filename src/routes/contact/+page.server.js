import { contactFormSchema } from "$lib/schemas.js";
import {
  clearFields,
  createContactInBrevo,
  makeApiRequest,
} from "../../lib/utils.js";
import { superValidate, message } from "sveltekit-superforms/server";

const receiverEmail = import.meta.env.VITE_SENDER_EMAIL;
const emailApiUrl = "https://api.brevo.com/v3/smtp/email";

export async function load({ params }) {
  const form = await superValidate(contactFormSchema);
  return {
    form,
  };
}

export const actions = {
  contactFormSubmit: async ({ request, fetch }) => {
    const submittedData = await request.formData();
    
    let services;
    let budgetRange;
    let startDate;
    try {
      services = JSON.parse(submittedData.get("services"));
      budgetRange = JSON.parse(submittedData.get("budgetRange")).value;
      startDate = JSON.parse(submittedData.get("startDate")).value;
    } catch (error) {
      services = [];
      budgetRange = "50K-100K";
      startDate = "Immediately";
    }
    submittedData.delete("services");
    submittedData.delete("startDate");
    submittedData.delete("budgetRange");
    const formObject = Object.fromEntries(submittedData.entries());
    const structuredFormData = {
      ...formObject,
      services: services.map(({ value }) => value),
      budgetRange: budgetRange,
      startDate: startDate,
    };
    const form = await superValidate(structuredFormData, contactFormSchema);
    let actionResponse = {
      status: "failed",
      content: "",
    };

    if (!form.valid) {
      return message(form, actionResponse);
    }

    try {
      const {
        firstName,
        lastName,
        email,
        countryCode,
        phoneNumber,
        services,
        startDate,
        budgetRange,
        projectDetails,
      } = form.data;

      let body = `New Contact Form Submission\n\n`;
      body += `Name: ${firstName} ${lastName}\n`;
      body += `Email: ${email}\n`;
      body += `Phone Number: ${countryCode} ${phoneNumber}\n`;

      if (services.length > 0) {
        body += `Services Interested In: ${services.join(", ")}\n`;
      }

      body += `Project Start Date: ${startDate}\n`;
      body += `Budget Range: ${budgetRange}\n`;
      body += `Project Details:\n${projectDetails}\n`;

      const { response, result } = await makeApiRequest(emailApiUrl, {
        sender: { name: `${firstName} ${lastName}`, email: email },
        subject: "Product/Service Inquiry from Contact Form",
        to: [{ email: receiverEmail }],
        textContent: body,
      });

      const contactDetails = {
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          WHATSAPP: `${countryCode}${phoneNumber}`,
          SMS: `${countryCode}${phoneNumber}`,
        },
        updateEnabled: true,
        email: email,
        listIds: [26],
      };

      console.log("response ", result, response.ok);

      if (!response.ok) {
        if (response.status === 401) {
          return message(form, {
            ...actionResponse,
            content: "Bad Request",
          });
        }
        return message(form, {
          ...actionResponse,
          content: `HTTP error! status: ${response.status}`,
        });
      }
      clearFields(form.data);

      try {
        const createContact = await createContactInBrevo(contactDetails);
        console.log(createContact);
      } catch (createContactError) {
        console.error(createContactError);
      }
      try {
        const replyBack = await makeApiRequest(emailApiUrl, {
          to: [{ email: email }],
          templateID: 24,
          params: {
            FIRSTNAME: firstName,
            ...(lastName && { LASTNAME: lastName }),
            EMAIL: email,
          },
        });
      } catch (replyBackError) {
        console.error(replyBackError);
      }

      return message(form, {
        ...actionResponse,
        status: "success",
        content: "Contact form submitted!",
      });
    } catch (err) {
      return message(form, { ...actionResponse, content: err.message });
    }
  },
};
