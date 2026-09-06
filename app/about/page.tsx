import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhyDevCity } from "@/components/sections/WhyDevCity";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { leadershipTeam, companyStats } from "@/data/team";
import { COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About DevCity",
  description:
    "DevCity is a software engineering company founded in 2016. Learn about our mission, values, and the team behind 120+ shipped digital products.",
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            About DevCity
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            We build software the way we&apos;d want it built for us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Since {COMPANY.foundedYear}, DevCity has partnered with founders and
            enterprise teams to design, engineer, and scale digital products —
            grounded in senior engineering, honest communication, and software that
            holds up in production.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-16">
        <Container>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</dd>
                <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <SectionHeader eyebrow="Our Story" title="From a two-person shop to a full engineering partner" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  DevCity started with a simple frustration: too many software
                  vendors optimized for billable hours instead of shipped outcomes.
                  We set out to build a studio that engineers treat like a craft and
                  clients treat like a long-term partner.
                </p>
                <p>
                  Today, our team works across web, mobile, SaaS, and AI-powered
                  products for companies ranging from pre-seed startups to
                  established enterprises modernizing legacy systems.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <SectionHeader eyebrow="Our Mission" title="Software that earns its place in your stack" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  We believe good software is judged in production, six months
                  after launch — not in a demo. That belief shapes every technical
                  decision we make: scalable architecture, honest scoping, and
                  code we&apos;d be comfortable maintaining ourselves.
                </p>
                <p>
                  We measure success the same way our clients do: retention,
                  reliability, and whether the system still fits the business a
                  year later.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <WhyDevCity />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Leadership"
            title="The team steering DevCity"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {leadershipTeam.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 80}>
                <div className="flex flex-col items-center text-center">
                  <span className="flex size-20 items-center justify-center rounded-full bg-primary-light text-lg font-bold text-primary">
                    {member.initials}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{member.name}</h3>
                  <p className="mt-1 text-xs text-muted">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to work with us?"
        description="Tell us about your project, or explore open roles on our careers page."
      />
    </>
  );
}
