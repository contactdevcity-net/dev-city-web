import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "northwind-logistics-platform",
    name: "Northwind Logistics Platform",
    industry: "Logistics & Supply Chain",
    client: "Northwind Freight Co.",
    year: "2024",
    summary:
      "A real-time shipment tracking and dispatch platform that replaced three disconnected legacy tools.",
    description: [
      "Northwind Freight came to DevCity running dispatch, tracking, and billing across three disconnected legacy systems, causing constant data reconciliation errors and delayed customer updates.",
      "We designed and built a unified web platform that consolidated dispatch scheduling, live shipment tracking, and automated billing into a single system, integrated with their existing fleet hardware.",
      "The platform now processes over 4,000 shipments per week with real-time status updates visible to both internal dispatchers and end customers.",
    ],
    challenge:
      "Dispatch, tracking, and billing lived in three separate systems that didn't talk to each other, forcing staff to manually reconcile data every day and causing frequent customer-facing errors.",
    solution:
      "We built a single Next.js platform with a unified data model, real-time tracking via WebSocket updates, and automated billing triggered directly by delivery confirmation events.",
    image: "/projects/northwind-logistics-platform.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    serviceSlugs: ["web-development", "custom-software", "cloud-devops"],
    results: [
      { label: "Manual reconciliation time", value: "-92%" },
      { label: "Shipments processed weekly", value: "4,000+" },
      { label: "Customer support tickets", value: "-61%" },
    ],
    featured: true,
  },
  {
    slug: "atlas-realestate-marketplace",
    name: "Atlas Real Estate Marketplace",
    industry: "Real Estate & PropTech",
    client: "Atlas Properties",
    year: "2023",
    summary:
      "A high-performance property marketplace built to handle heavy search traffic without sacrificing speed.",
    description: [
      "Atlas Properties needed a property marketplace that could handle complex, high-volume search filtering without the sluggish load times that plagued their previous WordPress-based site.",
      "DevCity designed a new information architecture, a fully custom search and filtering engine, and a component-driven design system, then rebuilt the platform on Next.js with server-side rendering for SEO-critical listing pages.",
      "The result was a marketplace that loads in under a second even under heavy search load, with organic search traffic more than doubling within six months of launch.",
    ],
    challenge:
      "The existing WordPress site couldn't handle complex property search filtering at scale, resulting in slow page loads and declining organic search rankings.",
    solution:
      "We rebuilt the platform on Next.js with server-rendered listing pages, a custom search architecture, and a reusable design system for rapid iteration on new listing types.",
    image: "/projects/atlas-realestate-marketplace.svg",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS"],
    serviceSlugs: ["web-development", "ui-ux-design", "saas-development"],
    results: [
      { label: "Organic search traffic", value: "+118%" },
      { label: "Median page load time", value: "0.9s" },
      { label: "Listing conversion rate", value: "+34%" },
    ],
    featured: true,
  },
  {
    slug: "fintrack-personal-finance-app",
    name: "FinTrack Personal Finance App",
    industry: "FinTech",
    client: "FinTrack Inc.",
    year: "2023",
    summary:
      "A cross-platform personal finance app taken from concept to 100,000+ downloads in its first year.",
    description: [
      "FinTrack approached DevCity with a validated concept but no engineering team. We acted as their full product development partner, from initial UX research through App Store launch.",
      "We built a cross-platform mobile app with React Native, backed by a secure, PCI-conscious backend handling bank account aggregation, transaction categorization, and subscription billing.",
      "FinTrack launched on both iOS and Android simultaneously and crossed 100,000 downloads within its first year, maintaining a 4.7-star average rating.",
    ],
    challenge:
      "A pre-seed startup needed a production-grade, secure personal finance app built and launched on a tight runway, with no in-house engineering team.",
    solution:
      "We delivered end-to-end product development: UX research, cross-platform mobile app development, secure backend architecture, and subscription billing infrastructure.",
    image: "/projects/fintrack-personal-finance-app.svg",
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS", "Firebase"],
    serviceSlugs: ["mobile-development", "saas-development", "ui-ux-design"],
    results: [
      { label: "First-year downloads", value: "100,000+" },
      { label: "App Store rating", value: "4.7 / 5" },
      { label: "Time to launch", value: "5 months" },
    ],
    featured: true,
  },
  {
    slug: "harborline-fleet-tracking",
    name: "Harborline Fleet Tracking",
    industry: "Maritime & Transportation",
    client: "Harborline Shipping",
    year: "2022",
    summary:
      "A real-time fleet monitoring system integrating IoT sensor data across 60+ vessels.",
    description: [
      "Harborline needed visibility into fuel consumption, maintenance schedules, and location data across a fleet of 60+ vessels, previously tracked through manual logs and spreadsheets.",
      "DevCity built a cloud-based monitoring platform that ingests real-time IoT sensor data, providing dashboards for fleet managers and automated maintenance alerts.",
      "The system reduced unplanned maintenance incidents significantly by surfacing early warning signs the manual process had been missing.",
    ],
    challenge:
      "Fleet data was tracked manually across spreadsheets, making it impossible to catch early warning signs of maintenance issues or optimize fuel usage across the fleet.",
    solution:
      "We built a cloud platform ingesting live IoT sensor data with automated alerting, deployed on AWS with a scalable event-processing pipeline built for continuous vessel data streams.",
    image: "/projects/harborline-fleet-tracking.svg",
    techStack: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    serviceSlugs: ["cloud-devops", "custom-software", "mobile-development"],
    results: [
      { label: "Unplanned maintenance", value: "-44%" },
      { label: "Vessels monitored", value: "60+" },
      { label: "Fuel cost savings", value: "12%" },
    ],
    featured: false,
  },
  {
    slug: "brightpath-logistics-erp",
    name: "BrightPath Logistics ERP",
    industry: "Manufacturing & Distribution",
    client: "BrightPath Industries",
    year: "2022",
    summary:
      "A custom ERP system replacing 15 years of spreadsheet-based inventory and order management.",
    description: [
      "After 15 years of managing inventory, purchasing, and order fulfillment through an ever-growing web of spreadsheets, BrightPath's operations had become error-prone and impossible to scale.",
      "DevCity mapped their entire operational workflow and designed a custom ERP system covering inventory management, purchasing, order fulfillment, and reporting in one platform.",
      "We also introduced an AI-assisted demand forecasting feature that flags reorder points automatically based on historical sales velocity.",
    ],
    challenge:
      "Fifteen years of operational growth had been managed through spreadsheets, resulting in inventory errors, purchasing delays, and no reliable reporting.",
    solution:
      "We designed a custom ERP covering the full operational workflow, plus an AI-assisted demand forecasting module for automated reorder recommendations.",
    image: "/projects/brightpath-logistics-erp.svg",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Docker"],
    serviceSlugs: ["custom-software", "ai-automation", "cloud-devops"],
    results: [
      { label: "Inventory errors", value: "-78%" },
      { label: "Order fulfillment time", value: "-35%" },
      { label: "Manual reporting hours saved / mo", value: "120+" },
    ],
    featured: false,
  },
  {
    slug: "meridian-health-portal",
    name: "Meridian Patient Portal",
    industry: "Healthcare",
    client: "Meridian Health Network",
    year: "2021",
    summary:
      "An accessible patient portal for appointment scheduling, records access, and secure messaging.",
    description: [
      "Meridian Health Network needed a patient-facing portal that met strict accessibility and compliance requirements while remaining simple enough for patients of all ages to use confidently.",
      "DevCity led research with patients and clinical staff, then designed and built a portal covering appointment scheduling, medical records access, and secure provider messaging.",
      "The portal launched to full WCAG 2.1 AA compliance and now serves as the primary digital touchpoint for over 80,000 patients.",
    ],
    challenge:
      "Patients needed a single, accessible digital touchpoint for scheduling, records, and communication, while meeting strict healthcare compliance and accessibility requirements.",
    solution:
      "We ran structured research with patients and clinical staff, then delivered a WCAG 2.1 AA-compliant portal with scheduling, records access, and secure messaging.",
    image: "/projects/meridian-health-portal.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    serviceSlugs: ["ui-ux-design", "web-development"],
    results: [
      { label: "Active patients served", value: "80,000+" },
      { label: "Accessibility compliance", value: "WCAG 2.1 AA" },
      { label: "Appointment no-shows", value: "-27%" },
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
