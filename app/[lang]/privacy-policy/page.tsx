import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read DevCity's privacy policy to understand how we collect, use, and protect your data.",
  path: "/privacy-policy",
});

const lastUpdated = "January 15, 2026";

export default function PrivacyPolicyPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

          <div className="prose-content mt-10 space-y-8 text-base leading-relaxed text-muted">
            <section>
              <h2 className="text-xl font-semibold text-ink">1. Introduction</h2>
              <p className="mt-3">
                {COMPANY.legalName} (&quot;DevCity&quot;, &quot;we&quot;, &quot;us&quot;) respects your
                privacy. This policy explains what information we collect through
                devcity.us, how we use it, and the choices you have.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">2. Information We Collect</h2>
              <p className="mt-3">We collect information you provide directly, such as when you:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Submit our contact form (name, email, company, project details)</li>
                <li>Apply for an open role (resume and application materials)</li>
                <li>Subscribe to our newsletter or blog updates</li>
              </ul>
              <p className="mt-3">
                We also automatically collect limited technical information — such
                as pages visited, browser type, and referring URLs — through
                privacy-respecting analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">3. How We Use Information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to inquiries and provide requested services</li>
                <li>Evaluate job applications</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">4. Sharing of Information</h2>
              <p className="mt-3">
                We do not sell your personal information. We may share information
                with service providers who help us operate our website (e.g.
                hosting, email delivery, analytics), each bound by confidentiality
                obligations, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">5. Data Retention</h2>
              <p className="mt-3">
                We retain personal information only as long as necessary for the
                purposes described in this policy, unless a longer retention
                period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">6. Your Rights</h2>
              <p className="mt-3">
                Depending on your jurisdiction, you may have the right to access,
                correct, or delete your personal information. To exercise these
                rights, contact us at{" "}
                <a href={`mailto:${COMPANY.email}`} className="font-medium text-primary">
                  {COMPANY.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">7. Cookies</h2>
              <p className="mt-3">
                Our site may use cookies and similar technologies to support
                analytics. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">8. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this policy from time to time. Material changes will
                be reflected by updating the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">9. Contact Us</h2>
              <p className="mt-3">
                Questions about this policy can be directed to{" "}
                <a href={`mailto:${COMPANY.email}`} className="font-medium text-primary">
                  {COMPANY.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
