import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const href = service.hasPage
    ? `/services/${service.slug}`
    : `/services#${service.slug}`;

  return (
    <div
      id={service.slug}
      className="group card-hero-glass card-hero-glass-hover flex h-full scroll-mt-24 flex-col p-7 relative overflow-hidden"
    >
      {/* Decorative top gradient accent line on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div className="hero-icon-wrap mb-5">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-primary">
        {service.name}
      </h3>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>

      <Link
        href={href}
        className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200"
        aria-label={`Learn more about ${service.name}`}
      >
        <span>Learn More</span>
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
