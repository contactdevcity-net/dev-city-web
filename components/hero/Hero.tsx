import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { AnimatedCounter } from "@/components/hero/AnimatedCounter";
import { FloatingBadges } from "@/components/hero/FloatingBadges";

export function Hero() {
  return (
    <section className="hero-section relative min-h-[100svh] overflow-hidden">
      {/* Animated background layers */}
      <HeroBackground />
      <FloatingBadges />

      <Container className="relative flex flex-col items-center pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        {/* Top badge */}
        <div className="hero-stagger-1 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-semibold tracking-wide text-muted uppercase">
            Available for new projects
          </span>
        </div>

        {/* Hero content grid */}
        <div className="mt-10 grid w-full items-center gap-10 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left: Text content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="hero-stagger-2 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              We Build Software{" "}
              <span className="hero-gradient-text">
                That Moves Business Forward
              </span>
            </h1>

            <p className="hero-stagger-3 mt-6 text-base leading-relaxed text-muted sm:text-lg lg:text-xl lg:leading-relaxed">
              DevCity partners with ambitious companies to design, engineer, and
              scale{" "}
              <span className="font-semibold text-ink">web</span>,{" "}
              <span className="font-semibold text-ink">mobile</span>, and{" "}
              <span className="font-semibold text-ink">AI-powered</span>{" "}
              software — from first prototype to production platform.
            </p>

            {/* CTA buttons */}
            <div className="hero-stagger-4 mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <Button href="/contact" size="lg" className="hero-btn-primary group relative overflow-hidden !border-0 text-white">
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Button>
              <Button href="/projects" variant="secondary" size="lg" className="group gap-2">
                <Play className="size-4 text-primary transition-transform group-hover:scale-110" aria-hidden="true" />
                View Our Work
              </Button>
            </div>

            {/* Trust signals */}
            <div className="hero-stagger-5 mt-10 flex items-center justify-center gap-3 text-sm text-muted lg:justify-start">
              <div className="flex -space-x-2">
                {[
                  "bg-primary",
                  "bg-accent",
                  "bg-primary-dark",
                  "bg-blue-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white ${bg}`}
                  >
                    {["JM", "AR", "KD", "SL"][i]}
                  </div>
                ))}
              </div>
              <span>
                Trusted by <span className="font-semibold text-ink">60+</span> engineering partners
              </span>
            </div>
          </div>

          {/* Right: Animated gradient mesh visual */}
          <div className="hero-stagger-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stagger-6 mt-16 w-full sm:mt-20">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-white/80 p-6 shadow-xl shadow-primary/5 backdrop-blur-md sm:p-8">
            {/* Decorative gradient border */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, #2563eb, transparent)",
              }}
            />

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              <AnimatedCounter end={120} suffix="+" label="Products shipped" delay={0} />
              <AnimatedCounter end={60} suffix="+" label="Engineering partners" delay={200} />
              <AnimatedCounter end={9} suffix=" yrs" label="Avg team tenure" delay={400} />
              <AnimatedCounter end={99} suffix="%" label="Client satisfaction" delay={600} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-stagger-6 mt-12 flex flex-col items-center gap-2">
          <a
            href="#trusted-by"
            className="group flex flex-col items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <span>Explore what we build</span>
            <ArrowRight className="size-4 rotate-90 transition-transform group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
