import { BlogSection } from "@/components/home/blog-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HomeHero } from "@/components/home/home-hero";
import { LogoRibbon } from "@/components/sections/logo-ribbon";
import { ProjectCta } from "@/components/sections/project-cta";
import { ServicePillars } from "@/components/home/service-pillars";
import { TestimonialsSection } from "@/components/sections/testimonial-slider";
import { WhyUs } from "@/components/home/why-us";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Vixon Group: ingeniería, e-commerce y marketing digital. Tecnología que funciona y growth que se mide.",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LogoRibbon />
      <ServicePillars />
      <WhyUs />
      <FeaturedProjects />
      <TestimonialsSection />
      <BlogSection />
      <ProjectCta />
    </>
  );
}
