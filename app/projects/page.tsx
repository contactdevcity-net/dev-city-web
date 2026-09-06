import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore case studies from DevCity's work across logistics, real estate, fintech, healthcare, and manufacturing.",
  path: "/projects",
});

export default function ProjectsPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 sm:py-28">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Our Work
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Products we&apos;ve designed, built, and scaled
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            A selection of case studies across logistics, real estate, fintech,
            healthcare, and manufacturing.
          </p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={(index % 3) * 80}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
