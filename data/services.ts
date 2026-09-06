import {
  Globe,
  Smartphone,
  Code2,
  Rocket,
  Palette,
  Server,
  Cloud,
  Sparkles,
  LifeBuoy,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    hasPage: true,
    name: "Web App Development",
    icon: Globe,
    shortDescription:
      "Fast, scalable web applications built on modern frameworks and engineered for growth.",
    heroDescription:
      "We design and build custom web applications that are fast, accessible, and built to scale — from marketing sites to complex, data-heavy platforms.",
    description:
      "DevCity builds custom web applications using modern frameworks like Next.js and React, engineered from day one for performance, accessibility, and long-term maintainability. Whether you need a high-converting marketing site or a complex, data-driven platform, our engineering team designs an architecture that scales with your business instead of holding it back.",
    features: [
      "Custom web application architecture",
      "Server-side rendering & static generation",
      "Progressive Web App capabilities",
      "Headless CMS integration",
      "Third-party API integrations",
      "Performance & Core Web Vitals optimization",
    ],
    process: [
      { title: "Technical discovery", description: "We map requirements, integrations, and constraints before writing a line of code." },
      { title: "Architecture design", description: "We choose the rendering strategy, data layer, and hosting model that fits your scale." },
      { title: "Iterative development", description: "We ship in short, reviewable increments with continuous QA and stakeholder demos." },
      { title: "Launch & optimization", description: "We monitor real-world performance and tune Core Web Vitals post-launch." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    faqs: [
      { question: "Do you build on top of an existing codebase?", answer: "Yes. We regularly take over and modernize existing web applications, including full migrations to Next.js and React." },
      { question: "Can you integrate with our existing CMS or backend?", answer: "Absolutely — we routinely integrate headless CMS platforms, ERPs, CRMs, and internal APIs into new frontends." },
      { question: "How do you approach performance?", answer: "Every build is measured against Core Web Vitals targets from the first sprint, not bolted on at the end." },
    ],
    relatedProjectSlugs: ["northwind-logistics-platform", "atlas-realestate-marketplace"],
  },
  {
    slug: "mobile-development",
    hasPage: true,
    name: "Mobile App Development",
    icon: Smartphone,
    shortDescription:
      "Native and cross-platform mobile apps that feel fast, polished, and built for scale.",
    heroDescription:
      "From iOS and Android native apps to cross-platform builds, we design and ship mobile products that users actually enjoy using.",
    description:
      "Our mobile team ships production-grade iOS and Android applications using native and cross-platform technologies, chosen based on your product's performance requirements, timeline, and team. We handle everything from architecture and offline data sync to App Store and Play Store release management.",
    features: [
      "iOS & Android native development",
      "Cross-platform delivery with React Native",
      "Offline-first data synchronization",
      "Push notifications & deep linking",
      "In-app purchases & subscriptions",
      "App Store / Play Store release management",
    ],
    process: [
      { title: "Product & platform strategy", description: "We decide native vs. cross-platform based on performance needs and budget." },
      { title: "UX for mobile", description: "We design interaction patterns native to iOS and Android conventions." },
      { title: "Build & device QA", description: "We test across real device matrices, not just simulators." },
      { title: "Store release & monitoring", description: "We manage submissions, crash monitoring, and update cadence." },
    ],
    techStack: ["React Native", "Swift", "Kotlin", "Firebase", "Node.js", "AWS"],
    faqs: [
      { question: "Should we build native or cross-platform?", answer: "It depends on your performance needs and budget — we'll give you a clear recommendation during technical discovery, not a default answer." },
      { question: "Do you handle App Store submission?", answer: "Yes, we manage the entire release process including store listings, review compliance, and versioning." },
      { question: "Can you add features to our existing app?", answer: "Yes, we regularly take over existing mobile codebases for new feature development and modernization." },
    ],
    relatedProjectSlugs: ["fintrack-personal-finance-app", "harborline-fleet-tracking"],
  },
  {
    slug: "custom-software",
    hasPage: true,
    name: "Custom Software Development",
    icon: Code2,
    shortDescription:
      "Bespoke software systems engineered around your exact operational workflow.",
    heroDescription:
      "When off-the-shelf tools stop fitting how your business actually works, we design and build custom software around your real workflow.",
    description:
      "Some businesses outgrow off-the-shelf software fast. DevCity builds bespoke internal tools, automation platforms, and business-critical systems tailored to your exact operational workflow — replacing spreadsheets, brittle scripts, and disconnected tools with a single, reliable system your team can depend on.",
    features: [
      "Internal tools & admin platforms",
      "Workflow automation systems",
      "Legacy system modernization",
      "Third-party & ERP integrations",
      "Role-based access control",
      "Custom reporting & analytics",
    ],
    process: [
      { title: "Workflow mapping", description: "We shadow your current process to understand where it actually breaks down." },
      { title: "System design", description: "We design a data model and architecture that matches how your team really works." },
      { title: "Phased delivery", description: "We roll features out in phases so your team can adopt the system gradually." },
      { title: "Training & handover", description: "We document the system and train your team for long-term ownership." },
    ],
    techStack: ["Node.js", "Java", "Spring Boot", "PostgreSQL", "MongoDB", "Docker"],
    faqs: [
      { question: "What if our workflow changes over time?", answer: "We design systems with modular architecture specifically so new workflows can be added without a rebuild." },
      { question: "Can you replace our spreadsheets and manual processes?", answer: "This is one of our most common engagements — replacing fragile spreadsheet-based operations with reliable software." },
      { question: "Do you provide ongoing support after launch?", answer: "Yes, through our Maintenance & Support service, with SLAs tailored to how critical the system is to your operations." },
    ],
    relatedProjectSlugs: ["brightpath-logistics-erp", "northwind-logistics-platform"],
  },
  {
    slug: "saas-development",
    hasPage: true,
    name: "SaaS Product Development",
    icon: Rocket,
    shortDescription:
      "End-to-end SaaS product builds — from MVP to a multi-tenant platform ready to scale.",
    heroDescription:
      "We help founders and product teams design, build, and scale SaaS products — from a validated MVP to a multi-tenant platform ready for growth.",
    description:
      "DevCity partners with founders and product teams to build SaaS platforms end-to-end: multi-tenant architecture, subscription billing, usage-based metering, and the operational tooling needed to run a real software business. We've helped early-stage teams ship an MVP in weeks and helped scaling teams re-architect for their next stage of growth.",
    features: [
      "Multi-tenant architecture",
      "Subscription billing & metering",
      "Role-based permissions & teams",
      "Usage analytics & admin dashboards",
      "API-first product design",
      "Scalable infrastructure from day one",
    ],
    process: [
      { title: "MVP scoping", description: "We ruthlessly prioritize the feature set that proves your core value proposition." },
      { title: "Architecture for scale", description: "We design multi-tenancy and billing so they don't need to be rebuilt later." },
      { title: "Build & iterate", description: "We ship in weekly cycles aligned to your product roadmap and user feedback." },
      { title: "Scale & harden", description: "We optimize infrastructure and reliability as your user base grows." },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Node.js"],
    faqs: [
      { question: "Can you help us go from idea to MVP quickly?", answer: "Yes — most MVP engagements move from kickoff to a launchable product in 8-12 weeks." },
      { question: "Do you handle billing and subscriptions?", answer: "Yes, we implement subscription billing, metering, and plan management using proven billing infrastructure." },
      { question: "What if we already have a SaaS product that needs to scale?", answer: "We regularly re-architect existing SaaS platforms for multi-tenancy, performance, and reliability at scale." },
    ],
    relatedProjectSlugs: ["fintrack-personal-finance-app", "atlas-realestate-marketplace"],
  },
  {
    slug: "ui-ux-design",
    hasPage: true,
    name: "UI/UX Design",
    icon: Palette,
    shortDescription:
      "User-centered product design that turns complex workflows into intuitive interfaces.",
    heroDescription:
      "Great software feels obvious to use. Our design team researches, prototypes, and tests interfaces that turn complex workflows into intuitive products.",
    description:
      "Design at DevCity starts with research, not visuals. We map user journeys, prototype flows, and test with real users before a single pixel is finalized — then deliver production-ready design systems that our engineering team (or yours) can build from without ambiguity.",
    features: [
      "User research & journey mapping",
      "Wireframing & interactive prototyping",
      "Design systems & component libraries",
      "Usability testing",
      "Accessibility-first design",
      "Design-to-development handoff",
    ],
    process: [
      { title: "Research", description: "We interview users and stakeholders to understand real needs, not assumptions." },
      { title: "Wireframes & flows", description: "We map information architecture and core flows before visual design begins." },
      { title: "Visual design system", description: "We build a reusable component library, not a one-off set of screens." },
      { title: "Usability testing", description: "We test prototypes with real users and refine before development starts." },
    ],
    techStack: ["Figma", "React", "TypeScript", "Storybook"],
    faqs: [
      { question: "Do you design without also building the product?", answer: "Yes, we offer design-only engagements with full developer handoff, as well as combined design-and-build projects." },
      { question: "Can you redesign our existing product?", answer: "Yes — redesign engagements typically start with a UX audit before we propose changes." },
      { question: "Do you follow accessibility standards?", answer: "All our design work targets WCAG 2.1 AA compliance as a baseline, not an afterthought." },
    ],
    relatedProjectSlugs: ["atlas-realestate-marketplace", "fintrack-personal-finance-app"],
  },
  {
    slug: "backend-api-development",
    hasPage: false,
    name: "Backend & API Development",
    icon: Server,
    shortDescription:
      "Reliable, well-documented APIs and backend systems built to handle real production load.",
    heroDescription:
      "Reliable, well-documented APIs and backend systems built to handle real production load.",
    description:
      "We design and build backend systems and APIs — REST and GraphQL — engineered for reliability, security, and clear documentation, so your product and integration partners can build on a stable foundation.",
    features: [
      "REST & GraphQL API design",
      "Authentication & authorization",
      "Database architecture & optimization",
      "Microservices & event-driven systems",
      "API documentation & versioning",
      "Load testing & performance tuning",
    ],
    process: [],
    techStack: ["Node.js", "Java", "Spring Boot", "PostgreSQL", "MongoDB"],
    faqs: [],
    relatedProjectSlugs: [],
  },
  {
    slug: "cloud-devops",
    hasPage: true,
    name: "Cloud & DevOps",
    icon: Cloud,
    shortDescription:
      "Cloud infrastructure, CI/CD, and observability that keeps your product reliable at scale.",
    heroDescription:
      "We design cloud infrastructure and delivery pipelines that keep your product reliable, secure, and easy to scale — without a dedicated ops team.",
    description:
      "DevCity designs and manages cloud infrastructure on AWS, sets up CI/CD pipelines that make shipping boring and safe, and builds observability into your systems so problems are caught before your customers notice. We work with teams that have no DevOps function, as well as teams looking to modernize existing infrastructure.",
    features: [
      "Cloud architecture on AWS",
      "CI/CD pipeline design",
      "Infrastructure as code",
      "Containerization with Docker",
      "Monitoring, logging & alerting",
      "Cost optimization & scaling strategy",
    ],
    process: [
      { title: "Infrastructure audit", description: "We assess your current setup for reliability, security, and cost risks." },
      { title: "Architecture design", description: "We design infrastructure as code so environments are reproducible." },
      { title: "Pipeline automation", description: "We build CI/CD pipelines that make deploys routine, not risky." },
      { title: "Observability", description: "We instrument monitoring and alerting so issues surface before customers feel them." },
    ],
    techStack: ["AWS", "Docker", "Node.js", "PostgreSQL", "MongoDB"],
    faqs: [
      { question: "Do you take over management of our existing infrastructure?", answer: "Yes, we regularly audit and take over existing AWS environments, including ones with no documentation." },
      { question: "Can you help us reduce our cloud costs?", answer: "Cost optimization is a standard part of every infrastructure audit we run." },
      { question: "Do you offer ongoing infrastructure management?", answer: "Yes, available as part of our Maintenance & Support retainer." },
    ],
    relatedProjectSlugs: ["harborline-fleet-tracking", "brightpath-logistics-erp"],
  },
  {
    slug: "ai-automation",
    hasPage: true,
    name: "AI & Automation",
    icon: Sparkles,
    shortDescription:
      "Practical AI features and workflow automation that create measurable operational leverage.",
    heroDescription:
      "We build practical AI features and automation systems that remove manual work and create measurable leverage — not AI for its own sake.",
    description:
      "We integrate AI where it actually creates value: intelligent search, document processing, support automation, and workflow orchestration that removes manual, repetitive work from your team's day. Every engagement starts with identifying where automation produces measurable ROI, not chasing trends.",
    features: [
      "LLM-powered product features",
      "Document & data extraction pipelines",
      "Internal workflow automation",
      "Retrieval-augmented search",
      "Customer support automation",
      "Custom AI integration & evaluation",
    ],
    process: [
      { title: "Opportunity mapping", description: "We identify the highest-leverage automation opportunities in your workflow." },
      { title: "Prototype & evaluate", description: "We build a working prototype and evaluate accuracy before committing to scope." },
      { title: "Production integration", description: "We integrate the system into your product or internal tools with proper guardrails." },
      { title: "Monitor & refine", description: "We track performance and refine prompts, models, or logic post-launch." },
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    faqs: [
      { question: "Do you build custom AI models?", answer: "Most engagements use proven foundation models integrated thoughtfully rather than training custom models from scratch, which we recommend only when justified by the use case." },
      { question: "How do you handle AI accuracy and reliability?", answer: "We build evaluation pipelines and guardrails into every AI feature before it reaches production." },
      { question: "Can AI automation integrate with our existing systems?", answer: "Yes, automation workflows are built to integrate directly with your existing tools and data sources." },
    ],
    relatedProjectSlugs: ["brightpath-logistics-erp"],
  },
  {
    slug: "maintenance-support",
    hasPage: false,
    name: "Maintenance & Support",
    icon: LifeBuoy,
    shortDescription:
      "Ongoing support, monitoring, and iteration to keep your product healthy long after launch.",
    heroDescription:
      "Ongoing support, monitoring, and iteration to keep your product healthy long after launch.",
    description:
      "Launch is the beginning, not the end. Our maintenance and support retainers keep your product secure, performant, and evolving — with SLA-backed response times, proactive monitoring, and a dedicated team who already knows your codebase.",
    features: [
      "SLA-backed bug fixes & support",
      "Security patching & dependency updates",
      "Performance monitoring",
      "Feature iteration retainers",
      "Uptime & incident response",
      "Technical documentation upkeep",
    ],
    process: [],
    techStack: ["Node.js", "AWS", "Docker", "PostgreSQL"],
    faqs: [],
    relatedProjectSlugs: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesWithPages(): Service[] {
  return services.filter((service) => service.hasPage);
}
