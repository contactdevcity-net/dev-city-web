import { Briefcase, MapPin, Clock, GraduationCap, Globe2, Coffee, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { jobOpenings } from "@/data/careers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join DevCity. Explore open roles in engineering, design, and delivery at a remote-friendly software engineering company.",
  path: "/careers",
});

const perks = [
  { title: "Remote-first", description: "Work from anywhere across the US and EU time zones.", icon: Globe2 },
  { title: "Growth budget", description: "Annual learning stipend for courses, conferences, and certifications.", icon: GraduationCap },
  { title: "Flexible time off", description: "Unlimited PTO policy, with a minimum encouraged.", icon: Coffee },
  { title: "Real ownership", description: "Work directly with clients — no layers between you and the impact of your work.", icon: TrendingUp },
];

export default function CareersPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
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
            Careers
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Build your best work at DevCity
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            We&apos;re a remote-friendly team of engineers, designers, and
            strategists building real software for real businesses. No busywork,
            no bureaucracy — just craft.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <AnimatedSection key={perk.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border p-6">
                    <Icon className="size-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-semibold text-ink">{perk.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{perk.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="Open Roles" title="Current openings" />
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white">
            {jobOpenings.map((job) => (
              <div
                key={job.slug}
                className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-ink">{job.title}</h3>
                  <p className="mt-1 text-sm text-muted">{job.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="size-3.5" aria-hidden="true" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button
                  href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(
                    `Application: ${job.title}`
                  )}`}
                  variant="secondary"
                  className="shrink-0"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            Don&apos;t see the right role?{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold text-primary">
              Reach out anyway
            </a>{" "}
            — we&apos;re always open to meeting strong engineers and designers.
          </p>
        </Container>
      </section>
    </>
  );
}
