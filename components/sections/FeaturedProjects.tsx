import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="section-light-alt section-divider-light py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Case Studies"
            title="Products we've shipped for our partners"
            description="A selection of platforms DevCity has designed, built, and scaled across industries."
          />
          <a
            href="/projects"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <span>View All Projects</span>
            <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <AnimatedSection key={project.slug} delay={(index % 3) * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
