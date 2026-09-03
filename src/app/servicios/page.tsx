import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { MethodologySteps } from "@/components/sections/methodology-steps";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { servicesFaqs } from "@/content/faqs";
import {
  marketingScope,
  marketingTech,
  softwareScope,
  softwareTech,
} from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios",
  path: "/servicios",
  description:
    "Software, e-commerce y marketing digital: alcance técnico, tecnologías, metodología y entregables claros.",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Oferta integral: construir el producto y hacerlo crecer."
        description="Dos fichas técnicas, un mismo estándar de calidad: rendimiento, medición y accountability. Elige un pilar o combina ambos en un solo equipo."
        visual="servicios"
      />

      <Section id="software" className="scroll-mt-24 pt-0">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Eyebrow>Ficha técnica</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Software y e-commerce
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Alcance técnico para productos que tienen que vender, operar o
              escalar. Priorizamos arquitectura simple, velocidad real (LCP,
              INP) e integraciones que no se rompen en temporada alta.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {softwareScope.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-surface p-8 ring-1 ring-white/8">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              Tecnologías
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {softwareTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Optimización de velocidad incluida en el Definition of Done:
              presupuesto de JS, imágenes, edge cache y medición continua de
              Core Web Vitals en producción.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="marketing" tone="surface" className="scroll-mt-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Eyebrow className="text-marketing">Ficha técnica</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Marketing digital
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Estrategia, ads, SEO y analítica sobre una base de producto
              sólida. El objetivo no es más tráfico: es pipeline y unidad
              económica que se puede defender en comité.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {marketingScope.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-marketing">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-background p-8 ring-1 ring-white/8">
            <p className="text-xs font-semibold tracking-[0.18em] text-marketing uppercase">
              Stack de growth
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {marketingTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-marketing/10 px-3 py-1.5 text-xs font-medium text-marketing"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Atribución server-side, eventos de conversión auditables y
              experimentación CRO. Si no se puede medir, no se escala el
              presupuesto.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="metodologia" className="scroll-mt-24">
        <Container>
          <Eyebrow>Metodología</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Un proceso claro. Resultados medibles.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Auditoría, estrategia e implementación en un flujo de siete pasos.
            Cada etapa tiene un entregable y un criterio de salida.
          </p>
          <div className="mt-12">
            <MethodologySteps />
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="max-w-3xl">
          <Eyebrow>FAQ de servicios</Eyebrow>
          <h2 className="mt-4 mb-8 text-3xl font-semibold tracking-tight text-canvas-foreground">
            Plazos, entregables y modalidad.
          </h2>
          <div className="rounded-3xl bg-white p-4 text-canvas-foreground shadow-sm ring-1 ring-black/5 md:p-8">
            <FaqAccordion items={servicesFaqs} tone="light" />
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="¿Cotizamos tu alcance?"
        description="Formulario o WhatsApp: elige el canal. Salimos de la primera llamada con un siguiente paso concreto."
        cta="Pedir cotización"
      />
    </>
  );
}
