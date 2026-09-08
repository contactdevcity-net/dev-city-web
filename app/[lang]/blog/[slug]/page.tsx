import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Article Not Found", noIndex: true, path: `/blog/${slug}` });

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const moreArticles = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = [
    articleSchema(post),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-16 sm:pt-20">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar className="size-3.5" aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-8">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
              {post.author.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">{post.author.name}</span>
              <span className="block text-xs text-muted">{post.author.role}</span>
            </span>
          </div>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </div>

          <div className="prose-content mt-12 space-y-6">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-ink">
                    {block.content}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-base leading-relaxed text-muted">
                  {block.content}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
                #{tag}
              </span>
            ))}
          </div>
        </Container>
      </article>

      {moreArticles.length > 0 && (
        <section className="mt-20 border-t border-border bg-white py-20 sm:py-28">
          <Container>
            <h2 className="text-2xl font-semibold text-ink">More articles</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreArticles.map((article) => (
                <BlogCard key={article.slug} post={article} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
