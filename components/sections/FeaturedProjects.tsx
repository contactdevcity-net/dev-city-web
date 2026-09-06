import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Case Studies"
            title="Products we've shipped for our partners"
            description="A selection of platforms DevCity has designed, built, and scaled across industries."
          />
          <Button href="/projects" variant="secondary" className="shrink-0">
            View All Projects
          </Button>
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
