import { COMPANY } from "./constants";
import type { ContactFormValues } from "./contact-schema";

/**
 * Sends the contact form notification email via Resend when RESEND_API_KEY
 * is configured. Falls back to a server log so local/dev environments keep
 * working without credentials. Swap in your provider of choice for production.
 */
export async function sendContactNotification(data: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set — logging submission instead of sending email.", {
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
    });
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "DevCity Website <noreply@devcity.us>",
      to: COMPANY.email,
      reply_to: data.email,
      subject: `New project inquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company || "—"}`,
        `Service: ${data.service || "—"}`,
        `Budget: ${data.budget || "—"}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider responded with ${response.status}`);
  }
}
