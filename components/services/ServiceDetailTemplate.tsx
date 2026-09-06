import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";

export function ServiceDetailTemplate({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const relatedProjects = projects.filter((project) =>
    service.relatedProjectSlugs.includes(project.slug)
  );

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl"
        />
        <Container className="max-w-3xl">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {service.heroDescription}
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeader title="What's included" />
              <p className="mt-4 text-base leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-bg p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Technology we use
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {service.process.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeader
              eyebrow="Our Approach"
              title={`How we deliver ${service.name.toLowerCase()}`}
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6">
                    <span className="text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="border-y border-border bg-white py-20 sm:py-28">
          <Container>
            <SectionHeader eyebrow="Related Work" title="See it in action" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {service.faqs.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container className="max-w-3xl">
            <SectionHeader eyebrow="FAQ" title="Common questions" />
            <div className="mt-10 divide-y divide-border border-y border-border">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-ink">
                    {faq.question}
                    <span className="ml-4 shrink-0 text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to start your ${service.name.toLowerCase()} project?`}
      />
    </>
  );
}
