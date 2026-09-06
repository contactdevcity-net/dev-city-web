import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjectBySlug, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, projectSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project Not Found", noIndex: true, path: `/projects/${slug}` });

  return buildMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.industry === project.industry)
    .slice(0, 3);
  const fallbackRelated = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const related = relatedProjects.length > 0 ? relatedProjects : fallbackRelated;

  const jsonLd = [
    projectSchema(project),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.name, path: `/projects/${project.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-16 sm:pt-20">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{project.industry}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Building2 className="size-3.5" aria-hidden="true" />
              {project.client}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar className="size-3.5" aria-hidden="true" />
              {project.year}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src={project.image}
              alt={`${project.name} case study cover`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold text-ink">The Challenge</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-ink">The Solution</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{project.solution}</p>
              </div>
              <div className="space-y-4">
                {project.description.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-white p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Results</h3>
                <dl className="mt-5 space-y-4">
                  {project.results.map((result) => (
                    <div key={result.label} className="flex items-baseline justify-between gap-4">
                      <dt className="text-sm text-muted">{result.label}</dt>
                      <dd className="text-lg font-bold text-ink">{result.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-border bg-white p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Technology</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Services</h3>
                <ul className="mt-4 space-y-2">
                  {project.serviceSlugs.map((serviceSlug) => {
                    const service = getServiceBySlug(serviceSlug);
                    if (!service) return null;
                    return (
                      <li key={serviceSlug}>
                        <Link
                          href={service.hasPage ? `/services/${service.slug}` : `/services#${service.slug}`}
                          className="text-sm font-medium text-ink hover:text-primary"
                        >
                          {service.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-white py-20 sm:py-28">
          <Container>
            <h2 className="text-2xl font-semibold text-ink">More projects</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
