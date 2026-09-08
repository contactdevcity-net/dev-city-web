import { Quote, Star, CheckCircle } from "lucide-react";
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
          title="Trusted by engineering leaders worldwide"
          description="Read what CTOs, VP of Engineering, and founders say about scaling software with DevCity."
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={(index % 2) * 90} className="h-full">
              <figure className="card-hero-glass card-hero-glass-hover group relative flex h-full flex-col justify-between overflow-hidden p-8">
                <div className="hover-beam-line" />

                {/* Decorative ghost quote */}
                <Quote
                  className="pointer-events-none absolute -right-2 -top-2 size-36 text-primary/[0.04] transition-opacity group-hover:text-primary/[0.08]"
                  aria-hidden="true"
                />

                <div>
                  {/* Top rating stars & verified badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <CheckCircle className="size-3 text-emerald-600" />
                      Verified Partner
                    </span>
                  </div>

                  <blockquote className="relative z-10 mt-6 text-base leading-relaxed text-slate-800 font-semibold">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="relative z-10 mt-8 flex items-center gap-3 border-t border-border/70 pt-5">
                  {/* Avatar initials with blue/purple gradient */}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-md shadow-primary/20">
                    {testimonial.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-extrabold text-ink">{testimonial.author}</p>
                    <p className="text-xs font-medium text-muted">
                      {testimonial.role}, <span className="font-semibold text-primary">{testimonial.company}</span>
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
