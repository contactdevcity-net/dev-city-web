import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge>{post.category}</Badge>
        <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read Article
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
