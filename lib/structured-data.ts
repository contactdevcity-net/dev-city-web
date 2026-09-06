import { COMPANY, SITE_NAME, SITE_URL, SITE_DESCRIPTION, SOCIAL_LINKS } from "./constants";
import type { BlogPost, Project, Service } from "@/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: SITE_DESCRIPTION,
    foundingDate: COMPANY.foundedYear,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      addressCountry: COMPANY.addressCountry,
    },
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    image: `${SITE_URL}${project.image}`,
    creator: { "@id": `${SITE_URL}/#organization` },
    about: project.industry,
  };
}
