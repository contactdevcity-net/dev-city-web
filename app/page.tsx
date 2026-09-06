import { Hero } from "@/components/hero/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyDevCity } from "@/components/sections/WhyDevCity";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { SITE_TAGLINE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: SITE_TAGLINE,
  description:
    "DevCity designs and builds web, mobile, SaaS, and AI-powered software for ambitious businesses. Explore our services, case studies, and engineering process.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <FeaturedProjects />
      <WhyDevCity />
      <ProcessSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
