import { BlogSection } from "@/components/home/blog-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HomeHero } from "@/components/home/home-hero";
import { LogoRibbon } from "@/components/sections/logo-ribbon";
import { MetricsBlock } from "@/components/home/metrics-block";
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
      <MetricsBlock />
      <WhyUs />
      <FeaturedProjects />
      <TestimonialsSection />
      <BlogSection />
      <CtaBanner
        title="¿Listo para llevar tu proyecto al siguiente nivel?"
        description="Cuéntanos el objetivo. En una reunión acotamos alcance, riesgos y el siguiente paso."
        cta="Agendar reunión"
      />
    </>
  );
}
