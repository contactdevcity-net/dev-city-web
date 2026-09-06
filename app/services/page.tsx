import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore DevCity's software engineering services: web, mobile, custom software, SaaS, UI/UX design, cloud & DevOps, and AI & automation.",
  path: "/services",
});

export default function ServicesPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl text-center mx-auto">
          <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Services
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Full-stack engineering, design, and strategy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Every discipline your product needs, delivered by one accountable
            team — from first prototype through long-term scale.
          </p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} delay={(index % 3) * 80}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
