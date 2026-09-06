import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";

const companies = [
  { id: "sorteo-seguro", name: "Sorteo Seguro" },
  { id: "san-mateo", name: "San Mateo Gestión Inmobiliaria" },
  { id: "pagate", name: "Pagate" },
  { id: "imppulsor", name: "Impulsor" },
  { id: "layer07", name: "layer07" },
  { id: "allisone", name: "Allisone" },
] as const;

export function TrustedCompanies() {
  return (
    <Section tone="canvas" className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <Reveal>
            <Eyebrow>Empresas que confían en nosotros</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.45rem] lg:leading-[1.15]">
              Proyectos de distintos rubros, un mismo objetivo:{" "}
              <span className="text-brand">hacer crecer negocios.</span>
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <p className="border-brand/30 text-sm leading-relaxed text-canvas-foreground/70 lg:border-l lg:pl-10 md:text-[0.95rem]">
              Trabajamos con empresas y emprendedores de diferentes industrias,
              desarrollando soluciones digitales que se adaptan a sus
              necesidades y objetivos.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-12 lg:grid-cols-6">
          {companies.map((company, index) => (
            <Reveal key={company.id} as="li" delay={index * 40}>
              <div className="flex min-h-[5.25rem] items-center justify-center rounded-xl border border-black/8 bg-white px-3 py-4 text-center shadow-[0_10px_28px_-22px_rgba(15,23,42,0.45)]">
                <p className="text-[0.8rem] font-semibold leading-snug tracking-wide text-canvas-foreground">
                  {company.name}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
