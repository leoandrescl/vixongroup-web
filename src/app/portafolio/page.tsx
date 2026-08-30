import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { ProjectGallery } from "@/components/portafolio/project-gallery";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { testimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portafolio",
  path: "/portafolio",
  description:
    "Casos de software, e-commerce y marketing digital. Filtra por categoría y abre el detalle de cada proyecto.",
});

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Una galería de trabajo que se puede abrir, no solo mirar."
        description="Casos reales (contenido de ejemplo en esta fase) con stack, KPIs y el relato del desafío. Filtra por área y entra al detalle."
      />
      <Section className="pt-0">
        <Container>
          <ProjectGallery />
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>Reseñas</Eyebrow>
          <h2 className="mt-4 mb-10 text-3xl font-semibold tracking-tight">
            Opiniones ligadas a los casos.
          </h2>
          <TestimonialSlider items={testimonials} />
        </Container>
      </Section>
      <CtaBanner
        title="¿Quieres lograr resultados parecidos? Cotiza aquí."
        cta="Cotizar ahora"
      />
    </>
  );
}
