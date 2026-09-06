import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} case study cover`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge>{project.industry}</Badge>
        <h3 className="mt-4 text-lg font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
          {project.techStack.slice(0, 3).map((tech, index, arr) => (
            <span key={tech} className="text-xs font-medium text-primary">
              {tech}
              {index < arr.length - 1 && <span className="ml-2 text-border">&middot;</span>}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View Case Study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
