# DevCity

Production-ready marketing website for DevCity, a software engineering company. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values as needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)..

## Scripts

| Command         | Description                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the development server        |
| `npm run build` | Production build                    |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |

## Project structure

```
app/                  Routes (App Router). Pages stay thin — layout only, no business logic.
  services/[slug]/    7 static service detail routes, each rendering ServiceDetailTemplate
  projects/[slug]/    Dynamic project case-study routes (generateStaticParams)
  blog/[slug]/        Dynamic blog post routes (generateStaticParams)
  api/contact/        Contact form submission endpoint (validation + rate limit + email)
  sitemap.ts          Auto-generated sitemap.xml
  robots.ts           Auto-generated robots.txt
components/
  ui/                 Button, Container, SectionHeader, Badge, SocialIcons
  layout/              Navbar, MobileMenu, Footer, Logo
  hero/, sections/     Homepage + shared section blocks (Process, TechStack, CTA, etc.)
  services/, projects/, blog/   Card + detail-template components per content type
  forms/               ContactForm (client component)
data/                  Structured content: services, projects, blog posts, nav, team, careers, etc.
lib/                   seo.ts (metadata builder), structured-data.ts (JSON-LD), constants,
                       contact-schema.ts (zod), rate-limit.ts, mailer.ts, utils.ts
types/                 Shared TypeScript interfaces
```

Content lives in `data/*.ts` as typed arrays — add a new service, project, or blog post by adding
an entry there; no UI code changes required. Blog post bodies use a small block schema
(`{ type: "paragraph" | "heading" | "list" }`) rather than raw HTML/MDX, kept intentionally simple.

## Contact form

`POST /api/contact` validates input with `zod`, rejects honeypot submissions silently, and applies
a per-IP sliding-window rate limit (5 requests / 10 minutes, in-memory — swap for a shared store
like Redis before running multiple server instances).

Email delivery is pluggable via `lib/mailer.ts`:

- With `RESEND_API_KEY` set, submissions are emailed through [Resend](https://resend.com).
- Without it, submissions are validated and logged server-side — useful for local development
  without needing real credentials.

## Assets

`public/projects/*.svg`, `public/blog/*.svg`, and `public/og-image.png` are generated placeholder
graphics so the site renders complete out of the box. Replace them with real photography/illustration
before launch — the Image components (`next/image`) and dimensions are already wired up, so dropping
in real files of the same name is enough.

## SEO

- Per-page metadata (title/description/canonical/OG/Twitter) via `lib/seo.ts#buildMetadata`.
- JSON-LD: Organization + WebSite (root layout), BreadcrumbList (every page), Service (service
  pages), Article (blog posts), CreativeWork (project case studies) — see `lib/structured-data.ts`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` from the same
  `data/*.ts` content used to render the pages, so they can't drift out of sync.

## Environment variables

See `.env.example`. `NEXT_PUBLIC_SITE_URL` should be set to the production domain before deploying —
it drives canonical URLs, sitemap entries, and JSON-LD `url` fields.

## Notes on the design system

- Brand font is **Plus Jakarta Sans** (Google Fonts) — the brief specified "Valley Sans," which is a
  commercial foundry font not available on Google Fonts, so this was swapped for the closest
  open-source match. Swap the `next/font/google` import in `app/layout.tsx` if a licensed copy of
  Valley Sans is added to the project later.
- Brand tokens (`--color-primary: #4646AB`, `--color-bg: #F5F5F3`, plus supporting ink/muted/border
  tones) are defined once in `app/globals.css` and consumed as Tailwind utilities (`bg-primary`,
  `text-muted`, etc.) via Tailwind v4's CSS-based `@theme`.
