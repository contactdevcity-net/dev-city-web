import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

const SLUG = "web-development";

export function generateMetadata() {
  const service = getServiceBySlug(SLUG)!;
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${SLUG}`,
  });
}

export default function Page() {
  const service = getServiceBySlug(SLUG)!;
  const jsonLd = [
    serviceSchema(service),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.name, path: `/services/${SLUG}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate slug={SLUG} />
    </>
  );
}
