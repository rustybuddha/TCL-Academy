import client from "$lib/sanityClient.js";
import { superValidate, message } from "sveltekit-superforms/server";
import { joinCommunitySchema, resourceRequestSchema } from "$lib/schemas.js";
import {
  clearFields,
  extractNames,
  createContactInBrevo,
  makeApiRequest,
} from "$lib/utils.js";

const emailApiUrl = "https://api.brevo.com/v3/smtp/email";

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "resources"]`);
  const form = await superValidate(joinCommunitySchema);
  if (data) {
    return {
      resources: data,
      form,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}

export const actions = {
  joinCommunity: async ({ request, fetch }) => {
    const submittedData = await request.formData();
    const form = await superValidate(submittedData, joinCommunitySchema);

    let actionResponse = {
      status: "failed",
      content: "",
    };

    if (!form.valid) {
      return message(form, actionResponse);
    }

    try {
      const apiKey = import.meta.env.VITE_API_KEY_BREVO;
      const receiverEmail = import.meta.env.VITE_SENDER_EMAIL;
      const { senderName, senderEmail, senderDescription } = form.data;

      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: {
            name: senderName,
            email: senderEmail,
          },
          subject: "Need Community involvement",
          to: [{ email: receiverEmail }],
          textContent: senderDescription,
        }),
      };

      const response = await fetch(
        "https://api.brevo.com/v3/smtp/email",
        options
      );
      const result = await response.json();
      console.log("response ", result, response.ok);

      if (!response.ok) {
        console.log("IN RESPONSE NOT OK BLOCK : ", result, response.ok);
        if (response?.status === 401) {
          return message(form, {
            ...actionResponse,
            content: "Bad Request",
          });
        }
        return message(form, {
          ...actionResponse,
          content: `HTTP error! status: ${response?.status}`,
        });
      }

      clearFields(form.data);
      const { firstName, lastName } = extractNames(senderName);

      const contactDetails = {
        attributes: {
          FIRSTNAME: firstName,
          ...(lastName && { LASTNAME: lastName }),
        },
        updateEnabled: true,
        email: senderEmail,
        listIds: [24],
      };
      try {
        const createContact = await createContactInBrevo(contactDetails);
        console.log(createContact);
      } catch (createContactError) {
        console.error(createContactError);
      }

      try {
        const replyBack = await await makeApiRequest(emailApiUrl, {
          to: [{ email: senderEmail }],
          templateID: 27,
          params: {
            EMAIL: senderEmail,
            FIRSTNAME: firstName,
            ...(lastName && { LASTNAME: lastName }),
          },
        });
        console.log(replyBack);
      } catch (replyBackError) {
        console.error(replyBackError);
      }

      return message(form, {
        ...actionResponse,
        status: "success",
        content: "We're happy to have you in our community!",
      });
    } catch (err) {
      return message(form, { ...actionResponse, content: err.message });
    }
  },

  resourceRequest: async ({ request, fetch }) => {
    const submittedData = await request.formData();
    const form = await superValidate(submittedData, resourceRequestSchema);
    let id = form.data.ebookId;
    console.log("Resource ID:", id);
    const query = `*[_type == "resources" && id == id][0]`;
    const resource = await client.fetch(query, id);
    const { file_url, cover_url, title, description, tag, category } = resource;

    let actionResponse = {
      status: "failed",
      content: "",
    };

    if (!form.valid) {
      return message(form, actionResponse);
    }

    try {
      const apiKey = import.meta.env.VITE_API_KEY_BREVO;
      const senderEmail = import.meta.env.VITE_SENDER_EMAIL;
      const senderName = "Time Chain Labs";
      const receiverName = form.data.senderName;
      const receiverEmail = form.data.senderEmail;
      const { firstName, lastName } = extractNames(receiverName);

      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },

        body: JSON.stringify({
          to: [{ email: receiverEmail }],
          templateID: 29,
          params: {
            EMAIL: receiverEmail,
            FIRSTNAME: firstName,
            ...(lastName && { LASTNAME: lastName }),
            URL: file_url,
            CATEGORY: category,
            TITLE: title,
            DESCRIPTION: description,
            TAG: tag,
            COVER: cover_url,
          },
        }),
      };

      const response = await fetch(
        "https://api.brevo.com/v3/smtp/email",
        options
      );
      const result = await response.json();
      console.log("response ", result, response.ok);

      if (!response.ok) {
        console.log("IN RESPONSE NOT OK BLOCK : ", result, response.ok);
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

      const contactDetails = {
        attributes: {
          FIRSTNAME: firstName,
          ...(lastName && { LASTNAME: lastName }),
        },
        updateEnabled: true,
        email: receiverEmail,
        listIds: [27],
      };
      try {
        const replyBack = await makeApiRequest(emailApiUrl, {
          sender: { email: receiverEmail, name: receiverName },
          to: [{ email: senderEmail, name: senderName }],
          textContent: `${receiverName} (${receiverEmail}) is requesting a resource of category: ${category} titled "${title}" with the following description: "${description}" and tag: "${tag}".`,
          subject: "New Resource request",
        });
      } catch (replyBackError) {
        console.error(replyBackError);
      }

      return message(form, {
        ...actionResponse,
        status: "success",
        content: "E-Book downloadable link has been sent your email!",
      });
    } catch (err) {
      return message(form, { ...actionResponse, content: err.message });
    }
  },
};
