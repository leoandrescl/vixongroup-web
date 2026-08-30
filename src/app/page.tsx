import { CtaBanner } from "@/components/sections/cta-banner";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HomeHero } from "@/components/home/home-hero";
import { LogoRibbon } from "@/components/sections/logo-ribbon";
import { MetricsBlock } from "@/components/home/metrics-block";
import { ServicePillars } from "@/components/home/service-pillars";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { WhyUs } from "@/components/home/why-us";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { testimonials } from "@/content/testimonials";
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
      <Section>
        <Container>
          <Eyebrow>Testimonios</Eyebrow>
          <h2 className="mt-4 mb-10 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Clientes que validan el resultado, no el discurso.
          </h2>
          <TestimonialSlider items={testimonials} />
        </Container>
      </Section>
      <CtaBanner
        title="¿Listo para llevar tu proyecto al siguiente nivel?"
        description="Cuéntanos el objetivo. En una reunión acotamos alcance, riesgos y el siguiente paso."
        cta="Agendar reunión"
      />
    </>
  );
}
