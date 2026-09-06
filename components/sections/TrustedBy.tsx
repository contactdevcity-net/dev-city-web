import { Container } from "@/components/ui/Container";
import { trustedTechnologies } from "@/data/technologies";

export function TrustedBy() {
  return (
    <section id="trusted-by" className="border-y border-border bg-white py-14">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wide text-muted">
          Engineered with the technology that powers modern software
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {trustedTechnologies.map((tech) => (
            <span
              key={tech.name}
              className="text-base font-semibold text-ink/50 transition-colors hover:text-primary sm:text-lg"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
