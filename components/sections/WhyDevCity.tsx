import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { valueProps } from "@/data/values";

export function WhyDevCity() {
  return (
    <section className="section-light section-divider-light py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Why DevCity"
          title="A team that engineers like it's their own product"
          description="We combine senior engineering talent, modern technology, and transparent process to deliver software that holds up in production."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={(index % 4) * 70} className="h-full">
                <div className="card-hero-glass card-hero-glass-hover group flex h-full flex-col p-7 relative overflow-hidden">
                  {/* Hover top border gradient line */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="hero-icon-wrap mb-5">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
