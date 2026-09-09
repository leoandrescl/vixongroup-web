import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Gauge,
  Monitor,
  PieChart,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { dwResultFeatures } from "@/content/desarrollo-web";

const featureIcons = {
  monitor: Monitor,
  seo: BarChart3,
  shield: ShieldCheck,
  gauge: Gauge,
  wrench: Wrench,
  pie: PieChart,
} as const satisfies Record<
  (typeof dwResultFeatures)[number]["icon"],
  LucideIcon
>;

export function DwResults() {
  return (
    <Section tone="canvas" className="scroll-mt-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-14">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">
              Desarrollo enfocado en resultados
            </Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Un sitio preparado para{" "}
              <span className="text-[#00c8ea]">
                atraer, convertir y crecer.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
              No se trata solo de tener un sitio web, sino de que realmente
              funcione. Desarrollamos con una visión integral, considerando
              experiencia de usuario, velocidad, posicionamiento, analítica y
              herramientas de marketing.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dwResultFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.icon];
              return (
                <Reveal key={feature.title} delay={index * 35}>
                  <article className="flex h-full gap-3.5 rounded-2xl border border-black/6 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.3)]">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#00c8ea]/12 text-[#00c8ea]">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-semibold tracking-tight text-canvas-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-canvas-foreground/65">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
