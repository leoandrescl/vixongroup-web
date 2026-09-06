import { BarChart3, Globe2, Rocket, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "+50",
    label: "Proyectos realizados",
    icon: Rocket,
  },
  {
    value: "+30",
    label: "Clientes en Chile y Latam",
    icon: Users,
  },
  {
    value: "+5 años",
    label: "De experiencia en el mercado",
    icon: BarChart3,
  },
  {
    value: "100%",
    label: "Compromiso con cada proyecto",
    icon: Globe2,
  },
] as const;

export function NuestraTrayectoria() {
  return (
    <Section id="trayectoria" tone="canvas" className="scroll-mt-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:items-start lg:gap-0">
          <Reveal>
            <Eyebrow>Nuestra trayectoria</Eyebrow>
            <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.45rem] lg:leading-[1.12]">
              Resultados que{" "}
              <span className="text-brand">hablan por sí solos.</span>
            </h2>
          </Reveal>

          <Reveal
            delay={70}
            className="lg:border-l lg:border-canvas-foreground/12 lg:px-8 xl:px-10"
          >
            <p className="max-w-md text-sm leading-relaxed text-canvas-foreground/65 md:text-[0.95rem]">
              Cada proyecto es una oportunidad para demostrar nuestro
              compromiso. Estos números reflejan la confianza de nuestros
              clientes y el trabajo de todo el equipo.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="flex items-start lg:border-l lg:border-brand/40 lg:pl-8 xl:pl-10"
          >
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-canvas-foreground/40 uppercase">
              Más que ideas,
              <br />
              resultados
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              as="li"
              delay={index * 60}
              className={cn(
                "lg:px-6",
                index > 0 && "lg:border-l lg:border-canvas-foreground/12",
                index === 0 && "lg:pl-0",
                index === stats.length - 1 && "lg:pr-0",
              )}
            >
              <stat.icon
                className="size-8 text-brand"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mt-4 text-3xl font-semibold tracking-tight text-brand md:text-[2.15rem]">
                <AnimatedStat value={stat.value} />
              </p>
              <p className="mt-2 text-sm text-canvas-foreground/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
