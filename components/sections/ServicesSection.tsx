import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="section-light section-divider-light py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="End-to-end software engineering under one roof"
          description="From product strategy to launch and long-term support, DevCity's teams cover every discipline your product needs."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
