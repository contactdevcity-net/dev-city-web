import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Client Results"
          title="Trusted by teams building serious software"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={(index % 2) * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-bg p-8">
                <Quote className="size-8 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-semibold text-ink">{testimonial.author}</span>
                  <span className="text-muted"> — {testimonial.role}, {testimonial.company}</span>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
