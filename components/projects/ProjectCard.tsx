import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card-hero-glass card-hero-glass-hover flex h-full flex-col overflow-hidden relative"
    >
      {/* Decorative top gradient accent line on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Cover image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[calc(1.25rem-1px)] bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.name} case study cover`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
        {/* Subtle bottom gradient overlay for text overlay */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(to top, rgba(15,23,42,0.4), transparent)" }}
        />
        {/* Industry badge overlaid on image */}
        <span className="absolute bottom-3 left-4 inline-flex items-center rounded-full bg-white/90 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md shadow-xs">
          {project.industry}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-primary">
          {project.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

        {/* Tech tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200">
          <span>View Case Study</span>
          <ArrowRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
