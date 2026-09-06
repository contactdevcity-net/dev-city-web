"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, serviceOptions, budgetOptions } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields and try again.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-10 text-center">
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out. A member of our team will follow up within one
          business day.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-border bg-white p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${formId}-name`} name="name" label="Full name" error={fieldErrors.name} required>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses(!!fieldErrors.name)}
          />
        </Field>
        <Field id={`${formId}-email`} name="email" label="Work email" error={fieldErrors.email} required>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses(!!fieldErrors.email)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${formId}-company`} name="company" label="Company (optional)">
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses(false)}
          />
        </Field>
        <Field id={`${formId}-service`} name="service" label="Service interested in">
          <select id={`${formId}-service`} name="service" className={inputClasses(false)} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={`${formId}-budget`} name="budget" label="Estimated budget (optional)">
        <select id={`${formId}-budget`} name="budget" className={inputClasses(false)} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id={`${formId}-message`} name="message" label="Tell us about your project" error={fieldErrors.message} required>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          minLength={20}
          className={inputClasses(!!fieldErrors.message)}
        />
      </Field>

      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-bg px-4 py-2.5 text-sm text-ink transition-colors placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary",
    hasError ? "border-red-400" : "border-border"
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}
