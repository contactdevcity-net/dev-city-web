import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="section-light-alt section-divider-light py-24 sm:py-32">
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
        {processSteps.length > 4 && (
          <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3" start={5}>
            {processSteps.slice(4).map((step, index) => (
              <AnimatedSection key={step.number} as="li" delay={index * 70}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}

function StepCard({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col overflow-hidden p-7">
      {/* Decorative top gradient accent line on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Large ghost number in the background */}
      <div
        className="pointer-events-none absolute right-3 top-2 select-none text-7xl font-black text-slate-200/60 transition-colors duration-500 group-hover:text-primary/10"
        aria-hidden="true"
      >
        {step.number}
      </div>

      {/* Numbered badge */}
      <div className="step-badge-hero mb-5">{step.number}</div>

      <h3 className="relative text-lg font-bold text-ink">{step.title}</h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
    </div>
  );
}
