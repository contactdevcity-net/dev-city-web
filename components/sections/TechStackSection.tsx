import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { groupTechnologiesByCategory } from "@/data/technologies";
import { Layers } from "lucide-react";

export function TechStackSection() {
  const groups = groupTechnologiesByCategory();

  return (
    <section className="section-light section-divider-light py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Our Tech Stack"
          title="Modern engineering, chosen deliberately"
          description="We standardize on a proven set of modern technologies across every layer of the stack, ensuring high performance, developer velocity, and maintainability."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <AnimatedSection key={group.category} delay={(index % 3) * 80}>
              <div className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-7">
                <div className="hover-beam-line" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="hero-icon-wrap">
                      <Layers className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                      {group.items.length} Technologies
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-ink">{group.category}</h3>
                  <p className="mt-1 text-xs text-muted">Production-proven frameworks & infrastructure</p>

                  {/* Interactive technology pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-slate-50/80 px-3 py-1.5 text-xs font-semibold text-ink transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-border/60 pt-4 flex items-center justify-between text-xs font-medium text-muted">
                  <span>Enterprise standard</span>
                  <span className="text-primary font-bold">100% Type-Safe</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
