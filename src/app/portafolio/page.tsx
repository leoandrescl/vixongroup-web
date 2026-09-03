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
    "Trabajo en producción: SaaS, e-commerce y sitios a medida. Entra al detalle de cada caso y abre el sitio en vivo.",
});

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Trabajo en producción, no mockups."
        description="Cuatro casos que se pueden abrir en el navegador: producto SaaS, e-commerce, sitio inmobiliario y un panel B2B. Filtra y entra al detalle."
        visual="portafolio"
      />
      <Section className="pt-0">
        <Container>
          <ProjectGallery />
        </Container>
      </Section>
      {testimonials.length > 0 ? (
        <Section>
          <Container>
            <Eyebrow>Reseñas</Eyebrow>
            <h2 className="mt-4 mb-10 text-3xl font-semibold tracking-tight">
              Opiniones ligadas a los casos.
            </h2>
            <TestimonialSlider items={testimonials} />
          </Container>
        </Section>
      ) : null}
      <CtaBanner
        title="¿Quieres lograr resultados parecidos? Cotiza aquí."
        cta="Cotizar ahora"
      />
    </>
  );
}
