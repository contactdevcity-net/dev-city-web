import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Read the terms of service governing your use of the DevCity website.",
  path: "/terms",
});

const lastUpdated = "January 15, 2026";

export default function TermsPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

          <div className="prose-content mt-10 space-y-8 text-base leading-relaxed text-muted">
            <section>
              <h2 className="text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing or using devcity.us (the &quot;Site&quot;), you agree
                to be bound by these Terms of Service. If you do not agree, please
                do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">2. Use of the Site</h2>
              <p className="mt-3">
                You agree to use the Site only for lawful purposes and in a way
                that does not infringe the rights of, or restrict or inhibit the
                use of, this Site by any third party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">3. Intellectual Property</h2>
              <p className="mt-3">
                All content on this Site, including text, graphics, logos, and
                code, is the property of {COMPANY.legalName} or its licensors and
                is protected by applicable intellectual property laws. You may not
                reproduce, distribute, or create derivative works without our
                prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">4. No Professional Advice</h2>
              <p className="mt-3">
                Content on this Site, including blog articles, is provided for
                general informational purposes only and does not constitute
                professional or technical advice specific to your circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">5. Third-Party Links</h2>
              <p className="mt-3">
                This Site may contain links to third-party websites. We are not
                responsible for the content or practices of any linked sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">6. Limitation of Liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {COMPANY.legalName} shall
                not be liable for any indirect, incidental, or consequential
                damages arising from your use of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">7. Service Engagements</h2>
              <p className="mt-3">
                These Terms govern use of the Site only. Any software development
                or consulting engagement with DevCity is governed by a separate,
                signed services agreement between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">8. Changes to These Terms</h2>
              <p className="mt-3">
                We may revise these Terms at any time. Continued use of the Site
                after changes are posted constitutes acceptance of the revised
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">9. Contact Us</h2>
              <p className="mt-3">
                Questions about these Terms can be directed to{" "}
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
