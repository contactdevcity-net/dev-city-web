import {
  Globe,
  Smartphone,
  Code2,
  Rocket,
  Palette,
  Cloud,
  Sparkles,
} from "lucide-react";
import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web App Development", href: "/services/web-development", description: "Custom web applications built to scale.", icon: Globe },
      { label: "Mobile App Development", href: "/services/mobile-development", description: "Native and cross-platform mobile apps.", icon: Smartphone },
      { label: "Custom Software", href: "/services/custom-software", description: "Bespoke systems for your workflow.", icon: Code2 },
      { label: "SaaS Product Development", href: "/services/saas-development", description: "From MVP to multi-tenant platform.", icon: Rocket },
      { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centered product design.", icon: Palette },
      { label: "Cloud & DevOps", href: "/services/cloud-devops", description: "Infrastructure that scales reliably.", icon: Cloud },
      { label: "AI & Automation", href: "/services/ai-automation", description: "Practical AI with measurable ROI.", icon: Sparkles },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web App Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/mobile-development" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "SaaS Product Development", href: "/services/saas-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "AI & Automation", href: "/services/ai-automation" },
  ],
  resources: [
    { label: "All Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
