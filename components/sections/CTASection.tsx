import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Have an Idea? Let's Build It.",
  description = "Tell us about your project and we'll follow up within one business day with next steps.",
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff26 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={primaryHref} variant="secondary" size="lg" showArrow>
                {primaryLabel}
              </Button>
              <Button href="/projects" variant="ghost" size="lg" className="text-white hover:text-white/70">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
