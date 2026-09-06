import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Engineering, product, and design insights from the DevCity team — on architecture, performance, AI, and building great software.",
  path: "/blog",
});

export default function BlogPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 sm:py-28">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Blog
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Engineering & product insights
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Notes from the DevCity team on architecture, performance, design
            systems, and building software that lasts.
          </p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post, index) => (
              <AnimatedSection key={post.slug} delay={(index % 3) * 80}>
                <BlogCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
