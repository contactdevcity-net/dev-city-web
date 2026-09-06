import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please provide a bit more detail (at least 20 characters).")
    .max(4000, "Message is too long."),
  website: z.string().max(200).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const budgetOptions = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Not sure yet",
];

export const serviceOptions = [
  "Web App Development",
  "Mobile App Development",
  "Custom Software Development",
  "SaaS Product Development",
  "UI/UX Design",
  "Backend & API Development",
  "Cloud & DevOps",
  "AI & Automation",
  "Maintenance & Support",
  "Something else",
];
