import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { groupTechnologiesByCategory } from "@/data/technologies";

export function TechStackSection() {
  const groups = groupTechnologiesByCategory();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Our Stack"
          title="Modern engineering, chosen deliberately"
          description="We standardize on a proven set of technologies across every layer of the stack, so your product stays maintainable long after launch."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((group, index) => (
            <AnimatedSection key={group.category} delay={(index % 5) * 70}>
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="text-sm text-ink">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
