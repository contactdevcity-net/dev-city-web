import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { valueProps } from "@/data/values";

export function WhyDevCity() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Why DevCity"
          title="A team that engineers like it's their own product"
          description="We combine senior engineering talent, modern technology, and transparent process to deliver software that holds up in production."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={(index % 4) * 70}>
                <div className="flex h-full flex-col bg-white p-7">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
