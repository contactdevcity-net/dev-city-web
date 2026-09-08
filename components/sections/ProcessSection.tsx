import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { processSteps } from "@/data/process";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="section-light-alt section-divider-light py-24 sm:py-32">
      {/* Background tech grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader
          eyebrow="How We Work"
          title="A proven process, from first idea to long-term scale"
          description="Every engagement follows the same disciplined process — refined across 120+ shipped products."
        />

        {/* Primary 4-step pipeline */}
        <div className="relative mt-14">
          {/* Animated Connecting Line between steps on Desktop */}
          <div
            className="pointer-events-none absolute top-1/2 left-0 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-primary/10 via-primary/30 to-accent/10 lg:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step, index) => (
              <AnimatedSection key={step.number} as="li" delay={index * 80}>
                <StepCard step={step} isFirstRow />
              </AnimatedSection>
            ))}
          </ol>
        </div>

        {/* Secondary steps */}
        {processSteps.length > 4 && (
          <div className="mt-8">
            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3" start={5}>
              {processSteps.slice(4).map((step, index) => (
                <AnimatedSection key={step.number} as="li" delay={index * 80}>
                  <StepCard step={step} />
                </AnimatedSection>
              ))}
            </ol>
          </div>
        )}
      </Container>
    </section>
  );
}

function StepCard({ step }: { step: (typeof processSteps)[number]; isFirstRow?: boolean }) {
  return (
    <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-7">
      <div className="hover-beam-line" />

      {/* Large background ghost step index */}
      <div
        className="pointer-events-none absolute right-3 top-2 select-none text-7xl font-black text-slate-200/50 transition-colors duration-500 group-hover:text-primary/15"
        aria-hidden="true"
      >
        {step.number}
      </div>

      <div>
        {/* Step indicator header */}
        <div className="flex items-center justify-between">
          <div className="step-badge-hero">
            {step.number}
          </div>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary/80">
            Phase 0{step.number}
          </span>
        </div>

        <h3 className="relative mt-6 text-xl font-extrabold text-ink">{step.title}</h3>
        <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
      </div>

      {/* Step footer callout */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
        <CheckCircle2 className="size-3.5 shrink-0" aria-hidden="true" />
        <span>Structured Deliverables</span>
      </div>
    </div>
  );
}
