import { toHTML } from "@portabletext/to-html";

export function parseText(text) {
  return text.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export const clearFields = (obj) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      obj[key] = "";
    }
  }
};

export function calculateMinsRead(blocks) {
  const wordsPerMinute = 200;

  // Validate input
  if (!Array.isArray(blocks)) {
    console.error("Invalid input: blocks must be an array");
    return 0; // Return a default value
  }

  const totalWords = blocks.reduce((acc, block) => {
    if (block.children && Array.isArray(block.children)) {
      const blockText = block.children.map((child) => child.text).join(" ");
      const words = blockText.split(/\s+/).filter((word) => word !== "").length;
      acc += words;
    }
    return acc;
  }, 0);

  const readingTimeInMinutes = totalWords / wordsPerMinute;
  const roundedReadingTime = Math.ceil(readingTimeInMinutes);

  return roundedReadingTime;
}


export function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function generateHTMLFromBlocks(contentArray) {
  let htmlContent = toHTML(contentArray);
  return htmlContent;
}

const apiKey = import.meta.env.VITE_API_KEY_BREVO;

export async function makeApiRequest(url, data, method = "POST") {
  const options = {
    method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return { response, result };
}

export const initializeCalendlyPopup = () => {
  const calendlyUrl = "https://calendly.com/timechainlabs";

  Calendly.initPopupWidget({
    url: calendlyUrl,
  });
};

export const createContactInBrevo = async (data) => {
  return await makeApiRequest("https://api.brevo.com/v3/contacts", data);
};

export const extractNames = (fullName) => {
  const names = fullName.split(" ");
  const firstName = names[0];
  const lastName = names.length > 1 ? names.slice(1).join(" ") : undefined;

  return { firstName, lastName };
};
