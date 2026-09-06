import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-tech-stack-for-your-saas",
    title: "Choosing the Right Tech Stack for Your SaaS in 2026",
    excerpt:
      "The tech stack you choose in month one shapes your engineering velocity for years. Here's the framework we use with clients before writing a line of code.",
    category: "Engineering",
    tags: ["SaaS", "Architecture", "Strategy"],
    author: { name: "Maya Chen", role: "Head of Engineering" },
    date: "2026-02-12",
    readingTime: "7 min read",
    image: "/blog/tech-stack-saas.svg",
    content: [
      { type: "paragraph", content: "Every SaaS founder eventually asks the same question: what tech stack should we build on? The honest answer is that there's no universally right stack — only the right stack for your specific constraints." },
      { type: "heading", content: "Start with your constraints, not your preferences" },
      { type: "paragraph", content: "Before recommending any technology, we look at three things: your team's existing expertise, your expected scale in 18 months, and your integration requirements. A stack that's perfect for a team of five engineers can be the wrong choice for a team scaling to fifty." },
      { type: "heading", content: "Our default recommendation, and why" },
      { type: "paragraph", content: "For most early-stage SaaS products, we default to Next.js on the frontend, Node.js or a typed backend framework for the API layer, and PostgreSQL for the primary datastore. This combination gives you strong developer velocity, a huge hiring pool, and a data model that won't fight you as your product gets more relational." },
      { type: "list", items: [
        "Next.js for a unified frontend and API layer with strong SEO defaults",
        "PostgreSQL as a default datastore — flexible enough for most product shapes",
        "AWS for infrastructure, with infrastructure-as-code from day one",
        "TypeScript everywhere, non-negotiable for team velocity past two engineers",
      ] },
      { type: "heading", content: "When to deviate from the default" },
      { type: "paragraph", content: "If your product is fundamentally document-shaped rather than relational, MongoDB may be a better fit than forcing a relational model. If you're building something with heavy real-time requirements, your infrastructure choices shift significantly. The point isn't to follow a template — it's to have a clear, defensible reason for every technology choice you make." },
    ],
  },
  {
    slug: "why-most-mvp-timelines-are-wrong",
    title: "Why Most MVP Timelines Are Wrong (And How to Fix Yours)",
    excerpt:
      "Founders consistently underestimate MVP timelines by 40-60%. Here's what actually drives the timeline, and how to scope realistically.",
    category: "Product Strategy",
    tags: ["MVP", "Startups", "Product"],
    author: { name: "James Okafor", role: "Head of Product" },
    date: "2026-01-22",
    readingTime: "6 min read",
    image: "/blog/mvp-timelines.svg",
    content: [
      { type: "paragraph", content: "\"We need this in 6 weeks\" is one of the most common opening lines in a discovery call. It's rarely wrong because the team is lazy — it's wrong because the estimate was made before the scope was actually understood." },
      { type: "heading", content: "The three things that actually drive timeline" },
      { type: "list", items: [
        "Integration complexity — third-party APIs are almost always the long pole",
        "Authentication and permissions model — often underestimated by 2-3x",
        "Data migration, if you're replacing an existing system",
      ] },
      { type: "paragraph", content: "Feature count matters far less than most founders assume. A ten-screen app with no external integrations can ship faster than a three-screen app that needs to sync with a legacy ERP system." },
      { type: "heading", content: "How we scope realistically" },
      { type: "paragraph", content: "We start every MVP engagement with a two-week technical discovery phase, not because we like planning for its own sake, but because it's the only reliable way to surface integration risk before it becomes a launch blocker." },
    ],
  },
  {
    slug: "core-web-vitals-that-actually-matter",
    title: "The Core Web Vitals That Actually Move Your Conversion Rate",
    excerpt:
      "Not all performance metrics are created equal. Here's which Core Web Vitals we prioritize for client work, and the engineering tactics that move them.",
    category: "Performance",
    tags: ["Performance", "SEO", "Web Development"],
    author: { name: "Priya Rao", role: "Senior Frontend Engineer" },
    date: "2025-12-08",
    readingTime: "5 min read",
    image: "/blog/core-web-vitals.svg",
    content: [
      { type: "paragraph", content: "Google's Core Web Vitals get treated as a monolithic SEO checkbox, but in practice, the metrics that move rankings and the metrics that move conversion rate aren't always the same thing." },
      { type: "heading", content: "LCP: the metric with the clearest business case" },
      { type: "paragraph", content: "Largest Contentful Paint has the most direct, well-documented relationship to bounce rate. Every 100ms improvement compounds — we've seen conversion lifts of 5-10% from LCP work alone on client projects." },
      { type: "heading", content: "INP is the one teams underinvest in" },
      { type: "paragraph", content: "Interaction to Next Paint replaced First Input Delay as a Core Web Vital, and it's the metric most teams neglect because it's harder to test in a lab environment. It matters most on interaction-heavy pages: dashboards, filters, checkout flows." },
      { type: "list", items: [
        "Minimize client-side JavaScript on initial load",
        "Use server components by default, opt into client components deliberately",
        "Defer non-critical scripts and third-party embeds",
        "Preload critical fonts and hero images",
      ] },
    ],
  },
  {
    slug: "ai-features-worth-building-in-2026",
    title: "The AI Features Actually Worth Building in 2026",
    excerpt:
      "Not every product needs an AI feature. Here's our framework for deciding where AI creates real leverage versus where it's just noise.",
    category: "AI & Automation",
    tags: ["AI", "Product Strategy"],
    author: { name: "Maya Chen", role: "Head of Engineering" },
    date: "2025-11-14",
    readingTime: "8 min read",
    image: "/blog/ai-features-2026.svg",
    content: [
      { type: "paragraph", content: "We get asked to \"add AI\" to a product roughly once a week. The teams that succeed with it aren't the ones chasing a trend — they're the ones who can point to a specific, measurable workflow that automation removes." },
      { type: "heading", content: "The filter we apply before recommending any AI feature" },
      { type: "paragraph", content: "Before scoping any AI feature, we ask: does this remove manual, repetitive work, and can we measure the time or cost it saves? If the answer to either is unclear, it's usually not the right first AI investment." },
      { type: "heading", content: "Where AI is delivering real ROI right now" },
      { type: "list", items: [
        "Document and data extraction from unstructured sources",
        "Internal support and knowledge-base automation",
        "Retrieval-augmented search over large internal datasets",
        "Workflow triage and routing based on content classification",
      ] },
      { type: "paragraph", content: "Every one of these has a clear before-and-after metric: hours saved, tickets deflected, or search time reduced. That clarity is what separates a useful AI feature from a demo." },
    ],
  },
  {
    slug: "design-systems-that-scale-with-your-team",
    title: "Building Design Systems That Scale With Your Team, Not Against It",
    excerpt:
      "A design system that slows your team down isn't doing its job. Here's how we structure design systems for teams that are still growing fast.",
    category: "Design",
    tags: ["Design Systems", "UI/UX"],
    author: { name: "Sofia Delgado", role: "Head of Design" },
    date: "2025-10-02",
    readingTime: "6 min read",
    image: "/blog/design-systems.svg",
    content: [
      { type: "paragraph", content: "Design systems are supposed to speed teams up. Too often, they end up as a rigid rulebook that slows down the exact iteration speed they were meant to protect." },
      { type: "heading", content: "Start smaller than you think" },
      { type: "paragraph", content: "We recommend starting with a constrained token set — color, spacing, and type scale — and a handful of core components, rather than trying to document every possible UI pattern before the product has found its shape." },
      { type: "heading", content: "Componentize based on real reuse, not theoretical reuse" },
      { type: "paragraph", content: "The biggest mistake we see is building a component for a pattern that's only used once. We wait until a pattern shows up three times before formalizing it into the design system — that's usually the signal it's actually a system-level component, not a one-off." },
    ],
  },
  {
    slug: "signs-its-time-to-modernize-legacy-software",
    title: "5 Signs It's Time to Modernize Your Legacy Software",
    excerpt:
      "Legacy modernization is a big investment. Here are the concrete signals we look for before recommending a rebuild versus incremental improvement.",
    category: "Engineering",
    tags: ["Legacy Systems", "Architecture"],
    author: { name: "James Okafor", role: "Head of Product" },
    date: "2025-09-18",
    readingTime: "5 min read",
    image: "/blog/legacy-modernization.svg",
    content: [
      { type: "paragraph", content: "\"Should we rebuild or should we patch?\" is one of the highest-stakes decisions a growing company makes. Get it wrong in either direction and you either burn months on an unnecessary rebuild, or spend years fighting a system that can't support your roadmap." },
      { type: "heading", content: "The signals worth taking seriously" },
      { type: "list", items: [
        "Every new feature requires touching code in unrelated parts of the system",
        "Your team spends more time firefighting than shipping",
        "Onboarding a new engineer takes months instead of weeks",
        "The system can't be tested without a full manual QA pass",
        "Infrastructure costs are rising faster than usage",
      ] },
      { type: "paragraph", content: "If three or more of these are true, it's usually time for a serious modernization conversation — though that doesn't always mean a full rebuild. Often, a phased strangler-fig migration delivers the same outcome with far less risk." },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
