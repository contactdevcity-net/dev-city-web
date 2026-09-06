import type { LucideIcon } from "lucide-react";

export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface Service {
  slug: string;
  hasPage: boolean;
  name: string;
  shortDescription: string;
  description: string;
  heroDescription: string;
  icon: LucideIcon;
  features: string[];
  process: { title: string; description: string }[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
  relatedProjectSlugs: string[];
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  industry: string;
  client: string;
  year: string;
  summary: string;
  description: string[];
  challenge: string;
  solution: string;
  image: string;
  techStack: string[];
  serviceSlugs: string[];
  results: ProjectResult[];
  featured: boolean;
}

export interface BlogBlock {
  type: "paragraph" | "heading" | "list";
  content?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  date: string;
  readingTime: string;
  image: string;
  content: BlogBlock[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud & Infrastructure" | "Mobile";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

export interface TechBrand {
  name: string;
}
