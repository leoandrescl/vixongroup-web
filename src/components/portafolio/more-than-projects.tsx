import {
  Network,
  PenLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";

const pillars = [
  {
    icon: PenLine,
    title: "Diseño a medida",
    detail: "Soluciones alineadas a la identidad de cada marca.",
  },
  {
    icon: Network,
    title: "Tecnología escalable",
    detail: "Plataformas preparadas para crecer.",
  },
  {
    icon: ShieldCheck,
    title: "Enfoque en resultados",
    detail: "Desarrollo orientado a objetivos medibles.",
  },
  {
    icon: Users,
    title: "Acompañamiento",
    detail: "Te asesoramos en cada etapa de tu proyecto.",
  },
] as const;

export function MoreThanProjects() {
  return (
    <Section tone="canvas" className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <Reveal>
            <Eyebrow>Más que proyectos</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.45rem] lg:leading-[1.15]">
              Soluciones que se{" "}
              <span className="text-brand">adaptan a cada negocio.</span>
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <p className="border-brand/30 text-sm leading-relaxed text-canvas-foreground/70 lg:border-l lg:pl-10 md:text-[0.95rem]">
              Cada proyecto es una oportunidad para aplicar estrategia, diseño y
              tecnología, creando soluciones que generan un impacto real y
              sostenible.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {pillars.map((item, index) => (
            <Reveal key={item.title} as="li" delay={index * 50}>
              <div className="flex flex-col gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <item.icon
                    className="size-[1.35rem]"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-canvas-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-canvas-foreground/65">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
