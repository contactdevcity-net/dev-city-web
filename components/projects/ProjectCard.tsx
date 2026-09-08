import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card-hero-glass card-hero-glass-hover flex h-full flex-col overflow-hidden relative"
    >
      <div className="hover-beam-line" />

      {/* Modern Browser / App Window Frame */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400/80 font-semibold flex items-center gap-1">
          <Sparkles className="size-2.5 text-primary-light" />
          DevCity Platform
        </span>
      </div>

      {/* Cover image container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <Image
          src={project.image}
          alt={`${project.name} case study cover`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />

        {/* Gradient shadow overlay */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(to top, rgba(15,23,42,0.6), transparent)" }}
        />

        {/* Industry badge overlaid on image */}
        <span className="absolute bottom-3 left-4 inline-flex items-center rounded-full bg-white/90 border border-primary/20 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md shadow-xs">
          {project.industry}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-6">
        <div>
          <h3 className="text-lg font-extrabold text-ink transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>

        <div>
          {/* Tech tags */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all duration-200">
              View Case Study
              <ArrowRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
            <span className="text-xs font-mono font-medium text-slate-400">Case Study</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
