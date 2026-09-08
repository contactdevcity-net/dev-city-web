import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { groupTechnologiesByCategory } from "@/data/technologies";

export function TechStackSection() {
  const groups = groupTechnologiesByCategory();

  return (
    <section className="section-light section-divider-light py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Our Stack"
          title="Modern engineering, chosen deliberately"
          description="We standardize on a proven set of technologies across every layer of the stack, so your product stays maintainable long after launch."
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {groups.map((group, index) => (
            <AnimatedSection key={group.category} delay={(index % 5) * 60}>
              <div className="card-hero-glass card-hero-glass-hover group h-full p-6 relative overflow-hidden">
                {/* Decorative top border gradient line on hover */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
                  }}
                  aria-hidden="true"
                />

                <p className="tech-category-hero">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="text-sm font-medium text-slate-700 transition-colors group-hover:text-ink">
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
