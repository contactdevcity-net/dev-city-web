import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title="A proven process, from first idea to long-term scale"
          description="Every engagement follows the same disciplined process — refined across 120+ shipped products."
        />
        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.slice(0, 4).map((step, index) => (
            <AnimatedSection key={step.number} as="li" delay={index * 70}>
              <StepCard step={step} />
            </AnimatedSection>
          ))}
        </ol>
        <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3" start={5}>
          {processSteps.slice(4).map((step, index) => (
            <AnimatedSection key={step.number} as="li" delay={index * 70}>
              <StepCard step={step} />
            </AnimatedSection>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function StepCard({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <div className="h-full rounded-2xl border border-border p-6">
      <span className="text-sm font-bold text-primary">{step.number}</span>
      <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
    </div>
  );
}
