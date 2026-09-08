import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-light-alt section-divider-light py-24 sm:py-32">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Client Results"
          title="Trusted by teams building serious software"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={(index % 2) * 90} className="h-full">
              <figure className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col overflow-hidden p-8">
                {/* Decorative top gradient border line on hover */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
                  }}
                  aria-hidden="true"
                />

                {/* Decorative huge ghost quote mark */}
                <Quote
                  className="pointer-events-none absolute -right-2 -top-2 size-36 text-primary/[0.04] transition-opacity group-hover:text-primary/[0.08]"
                  aria-hidden="true"
                />

                <Quote className="relative z-10 size-7 text-primary" aria-hidden="true" />

                <blockquote className="relative z-10 mt-5 flex-1 text-base leading-relaxed text-slate-800 font-medium">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="relative z-10 mt-7 flex items-center gap-3 border-t border-border/70 pt-5">
                  {/* Avatar initials */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white shadow-xs">
                    {testimonial.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{testimonial.author}</p>
                    <p className="text-xs font-medium text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
