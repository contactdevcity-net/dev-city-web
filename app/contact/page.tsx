import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contact DevCity",
  description:
    "Tell us about your project. Reach out to DevCity to start a web, mobile, or software engineering engagement.",
  path: "/contact",
});

const contactDetails = [
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Office", value: `${COMPANY.addressLocality}, ${COMPANY.addressRegion}` },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Get In Touch
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Let&apos;s talk about your project
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Whether you have a detailed spec or just an early idea, tell us what
                you&apos;re trying to build. We&apos;ll follow up within one business
                day with next steps.
              </p>

              <ul className="mt-10 space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                        {label}
                      </span>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-ink hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-ink">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
