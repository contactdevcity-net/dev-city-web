import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { valueProps } from "@/data/values";
import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";

export function WhyDevCity() {
  const [seniorTalent, productionReady, agileDelivery, scalableArch] = valueProps;

  return (
    <section className="section-light section-divider-light py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Why DevCity"
          title="Engineered with precision, built for scale"
          description="We combine senior engineering talent, modern technology, and transparent process to deliver software that thrives under production workloads."
        />

        {/* Modern Bento Grid Layout */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Card 1: Featured Large Card (Spans 2 columns on lg screens) */}
          <AnimatedSection delay={0} className="lg:col-span-2">
            <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-8 sm:p-10">
              <div className="hover-beam-line" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="hero-icon-wrap">
                    <Award className="size-6" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Top 1% Engineering Talent
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">
                  {seniorTalent.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted max-w-xl">
                  {seniorTalent.description}
                </p>

                {/* Feature highlights pill list */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Zero junior handover",
                    "Direct Slack & GitHub access",
                    "9+ yrs avg team tenure",
                    "Dedicated tech lead per squad",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 text-primary shrink-0" aria-hidden="true" />
                      <span className="text-sm font-semibold text-ink/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom stats visual banner */}
              <div className="mt-8 flex items-center justify-between rounded-xl bg-slate-50 border border-border/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                    99%
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">Partner Satisfaction</p>
                    <p className="text-[11px] text-muted">Across 120+ shipped software products</p>
                  </div>
                </div>
                <span className="hidden text-xs font-bold text-primary sm:inline-block">
                  Learn how we hire &rarr;
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Bento Card 2: Production Readiness */}
          <AnimatedSection delay={100}>
            <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-8">
              <div className="hover-beam-line" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="hero-icon-wrap">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                    Production Ready
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-ink">{productionReady.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{productionReady.description}</p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs text-muted font-medium">
                <span>Automated Testing</span>
                <span className="font-bold text-primary">100% CI/CD</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Bento Card 3: Agile Delivery */}
          <AnimatedSection delay={150}>
            <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-8">
              <div className="hover-beam-line" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="hero-icon-wrap">
                    <Zap className="size-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-purple-50 border border-purple-200 px-2.5 py-0.5 text-[11px] font-bold text-purple-700">
                    Weekly Demos
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-ink">{agileDelivery.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{agileDelivery.description}</p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs text-muted font-medium">
                <span>Sprint Cycle</span>
                <span className="font-bold text-accent">2-Week Iterations</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Bento Card 4: Scalable Architecture (Spans 2 columns on lg) */}
          <AnimatedSection delay={200} className="lg:col-span-2">
            <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-8">
              <div className="hover-beam-line" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="hero-icon-wrap">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700">
                    Future Proof
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-ink">{scalableArch.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{scalableArch.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {["Clean Architecture", "Microservices & Serverless", "Automated Observability"].map((tag) => (
                  <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
