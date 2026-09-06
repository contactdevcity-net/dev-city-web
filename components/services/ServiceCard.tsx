import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const href = service.hasPage ? `/services/${service.slug}` : `/services#${service.slug}`;

  return (
    <div
      id={service.slug}
      className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  );
}
