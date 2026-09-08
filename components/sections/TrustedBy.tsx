import { trustedTechnologies } from "@/data/technologies";

export function TrustedBy() {
  const items = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <section id="trusted-by" className="section-light-alt section-divider-light py-12">
      {/* Fade masks at edges matching background */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40"
        style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40"
        style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }}
      />

      <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-muted/70">
        Engineered with the technology that powers modern software
      </p>

      <div className="overflow-hidden">
        <div className="marquee-track gap-x-12 px-6">
          {items.map((tech, i) => (
            <span
              key={`${tech.name}-${i}`}
              className="shrink-0 text-sm font-semibold text-muted/70 transition-colors duration-200 hover:text-primary cursor-default"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
