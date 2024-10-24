import client from "$lib/sanityClient.js";
import {
  calculateMinsRead,
  formatDate,
  clearFields,
  makeApiRequest,
} from "$lib/utils.js";
// import {blogsList} from '$lib/store.js'
// blogsList.set(blogs);
const senderEmail = import.meta.env.VITE_SENDER_EMAIL;
const emailApiUrl = "https://api.brevo.com/v3/smtp/email";
import { superValidate, message } from "sveltekit-superforms/server";
import { subscribeNewletterSchema } from "$lib/schemas.js";
import { createContactInBrevo } from "$lib/utils.js";

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "blogs" && doc_type == "blog"]`);
  if (data) {
    const blogsWithMinsRead = data.map((blog) => {
      blog.minsRead = calculateMinsRead(blog?.content);
      return blog;
    });

    const featured = await client.fetch(
      `*[_type == "blogs" && featured == true && doc_type == "blog"]`
    );
    featured[0].minsRead = calculateMinsRead(featured[0]?.content);
    featured[0].formattedDate = formatDate(new Date(featured[0]?._createdAt));

    const popularBlogs = await client.fetch(
      `*[_type == "blogs" && doc_type == "blog"] | order(impressions desc) [0...4]`
    );
    // blogsList.set(blogsWithMinsRead);
    return {
      featuredBlog: featured[0],
      blogs: blogsWithMinsRead || [],
      popularBlogs: popularBlogs || [],
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
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
