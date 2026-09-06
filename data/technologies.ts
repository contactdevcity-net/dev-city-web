import type { Technology, TechBrand } from "@/types";

export const trustedTechnologies: TechBrand[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "TypeScript" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Firebase" },
];

export const technologies: Technology[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "GraphQL", category: "Backend" },

  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },

  { name: "AWS", category: "Cloud & Infrastructure" },
  { name: "Docker", category: "Cloud & Infrastructure" },
  { name: "Kubernetes", category: "Cloud & Infrastructure" },
  { name: "Terraform", category: "Cloud & Infrastructure" },

  { name: "React Native", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "Firebase", category: "Mobile" },
];

export function groupTechnologiesByCategory() {
  const categories: Technology["category"][] = [
    "Frontend",
    "Backend",
    "Database",
    "Cloud & Infrastructure",
    "Mobile",
  ];
  return categories.map((category) => ({
    category,
    items: technologies.filter((tech) => tech.category === category),
  }));
}
