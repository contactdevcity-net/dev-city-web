import { ArrowRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Have an Idea? Let's Build It.",
  description = "Tell us about your project and we'll follow up within one business day with next steps, estimate, and technical roadmap.",
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section-light py-24 sm:py-32 relative overflow-hidden">
      <Container>
        {/* Bento Hero-style CTA Card */}
        <div className="hero-cta-card">
          <div className="hero-cta-card-inner px-8 py-16 text-center sm:px-16 sm:py-20">
            {/* Glowing blobs inside CTA */}
            <div
              className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-1/4 bottom-0 h-full w-1/2 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(124,58,237,0.16) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            {/* Dot grid overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Live Status Pill Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                  Engineering Capacity Available
                </span>
              </div>

              <h2 className="hero-gradient-text mx-auto max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={primaryHref}
                  className="hero-btn-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-ink shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  See Our Work
                </a>
              </div>

              {/* Guarantee points */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-muted">
                <div className="flex items-center gap-1.5">
                  <Clock className="size-4 text-primary" />
                  <span>24-Hour Response Time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>No Obligation Architecture Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
