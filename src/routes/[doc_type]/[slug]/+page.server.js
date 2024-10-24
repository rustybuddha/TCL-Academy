import client from "$lib/sanityClient.js";
import {
  calculateMinsRead,
  formatDate,
  generateHTMLFromBlocks,
  clearFields,
  makeApiRequest,
} from "$lib/utils.js";

const senderEmail = import.meta.env.VITE_SENDER_EMAIL;
const emailApiUrl = "https://api.brevo.com/v3/smtp/email";
const createContactApiUrl = "https://api.brevo.com/v3/contacts/";

import { superValidate, message } from "sveltekit-superforms/server";
import { subscribeNewletterSchema } from "$lib/schemas.js";
import { createContactInBrevo } from "$lib/utils.js";

async function updateImpressions(id) {
  try {
    const query = `*[_type == "blogs" && _id == $id][0]`;
    const params = { id };

    const document = await client.fetch(query, params);

    if (document) {
      const newImpressions = (document.impressions || 0) + 1;

      await client.patch(id).set({ impressions: newImpressions }).commit();
    }
  } catch (error) {
    console.error("Error updating impressions:", error);
  }
}

export async function load({ params }) {
  try {
    if (params.slug) {
      const blog = await client.fetch(
        `*[_type == "blogs" && slug.current == $slug && doc_type == $doc_type][0]`,
        {
          slug: params?.slug,
          doc_type: params?.doc_type,
        }
      );

      if (blog) {
        blog.formattedDate = formatDate(new Date(blog?._createdAt));
        blog.minsRead = calculateMinsRead(blog?.content);
        blog.content = generateHTMLFromBlocks(blog?.content);
        updateImpressions(blog?._id);

        let recommended = [];

        if (blog?.recommended) {
          recommended = await Promise.all(
            blog?.recommended?.map(async (rec) => {
              const id = rec?._ref;
              const recommended = await client.fetch(
                `*[_type == "blogs" && _id == "${id}"][0]`,
                {
                  _id: id,
                }
              );
              recommended.minsRead = calculateMinsRead(recommended?.content);
              return recommended;
            })
          );
        }
        const form = await superValidate(subscribeNewletterSchema);
        return {
          blog,
          recommended,
          form,
        };
      }
    }

    return {
      status: 404,
      body: "Blog not found",
    };
  } catch (error) {
    return {
      status: 500,
      body: new Error("Internal Server Error"),
    };
  }
}

export const actions = {
  subscribeNewletter: async ({ request, fetch }) => {
    const submittedData = await request.formData();
    const form = await superValidate(submittedData, subscribeNewletterSchema);

    let actionResponse = {
      status: "failed",
      content: "",
    };

    if (!form.valid) {
      return message(form, actionResponse);
    }

    const subscriber = form.data.emailID;

    try {
      const { response, result } = await makeApiRequest(emailApiUrl, {
        to: [{ email: subscriber }],
        templateID: 30,
        params: {
          EMAIL: subscriber,
        },
      });

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

      const contactDetails = {
        updateEnabled: true,
        email: subscriber,
        listIds: [21],
      };

      try {
        const createContact = await createContactInBrevo(contactDetails);
        console.log(createContact);
      } catch (createContactError) {
        console.error(createContactError);
      }

      try {
        const replyBack = await makeApiRequest(emailApiUrl, {
          sender: { name: subscriber, email: subscriber },
          subject: "New Subscriber to Timechain Chronicles",
          to: [{ email: senderEmail }],
          textContent: `${subscriber} subscribed to Timechain labs newsletter`,
        });
        console.log(replyBack);
      } catch (replyBackError) {
        console.error(replyBackError);
      }

      return message(form, {
        ...actionResponse,
        status: "success",
        content: "Success! You've joined our newsletter.",
      });
    } catch (err) {
      return message(form, { ...actionResponse, content: err.message });
    }
  },
};