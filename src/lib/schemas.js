import { z } from "zod";

export const consultRequestSchema = z.object({
  senderName: z
    .string({ message: "Name is required." })
    .min(1, { message: "Name is required" }),
  senderEmail: z
    .string({ message: "email is required" })
    .email({ message: "Email must be valid." }),
  senderCompanyName: z
    .string({ message: "company's name is required" })
    .min(1, { message: "Company's name is required" }),
  senderDescription: z
    .string({ message: "Description is required." })
    .min(1, { message: "Description is required" }),
});

export const joinCommunitySchema = z.object({
  senderName: z
    .string({ message: "Name is required." })
    .min(1, { message: "Name is required" }),
  senderEmail: z
    .string({ message: "email is required" })
    .email({ message: "Email must be valid." }),
  senderDescription: z
    .string({ message: "Description is required." })
    .min(1, { message: "Description is required" }),
});

export const resourceRequestSchema = z.object({
  ebookId: z.string(),
  senderName: z
    .string({ message: "Name is required." })
    .min(1, { message: "Name is required" }),
  senderEmail: z
    .string({ message: "email is required" })
    .email({ message: "Email must be valid." }),
});

export const contactFormSchema = z.object({
  firstName: z
    .string({ message: "First name is required." })
    .min(1, { message: "First name is required" }),
  lastName: z
    .string({ message: "Last name is required." })
    .min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Email must be valid." }),

  countryCode: z.string(),
  phoneNumber: z
    .union([
      z.string().refine((value) => /^\d{10}$/.test(value), {
        message: "Phone number must be a 10-digit number.",
      }),
      z.number(),
    ])
    .refine(
      (value) => typeof value === "number" || /^\d{10}$/.test(value),
      "Phone number must be a 10-digit number."
    ),

  services: z.array(z.string()),
  startDate: z.string(),
  budgetRange: z.string(),
  projectDetails: z
    .string({ message: "Project details are required" })
    .min(1, { message: "Project details are  required" }),
});

export const subscribeNewletterSchema = z.object({
  emailID: z
    .string({ message: "Email is required." })
    .email({ message: "Email must be valid." }),
});
