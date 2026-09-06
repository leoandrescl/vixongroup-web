import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  Code2,
  Database,
  Layers,
  Megaphone,
  Monitor,
  Palette,
  Plug,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { techStackLogoMap } from "@/components/icons/tech-stack-logos";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  techStackCategories,
  techStackHighlights,
  type TechToolId,
} from "@/content/tech-stack";

const categoryIcons = {
  monitor: Monitor,
  code: Code2,
  cloud: Cloud,
  megaphone: Megaphone,
  database: Database,
  plug: Plug,
  palette: Palette,
  sparkles: Sparkles,
  shield: ShieldCheck,
} as const satisfies Record<
  (typeof techStackCategories)[number]["icon"],
  LucideIcon
>;

const highlightIcons = {
  shield: ShieldCheck,
  chart: BarChart3,
  cog: Settings,
  users: Users,
} as const satisfies Record<
  (typeof techStackHighlights)[number]["icon"],
  LucideIcon
>;

function ToolLogo({ id }: { id: TechToolId }) {
  const Logo = techStackLogoMap[id];
  return <Logo className="size-8 text-canvas-foreground sm:size-9" />;
}

export function ServiciosTech() {
  return (
    <Section
      tone="canvas"
      id="tecnologias"
      className="scroll-mt-24 bg-white text-canvas-foreground"
    >
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Tecnologías que usamos</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
              Las mejores herramientas para{" "}
              <span className="text-brand">grandes resultados.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-6 grid gap-5 border-t border-black/8 pt-6 sm:grid-cols-2 sm:gap-8 lg:max-w-4xl">
            <p className="text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
              Trabajamos con tecnologías líderes del mercado para desarrollar
              soluciones seguras, escalables y de alto rendimiento.
            </p>
            <p className="border-black/10 text-sm leading-relaxed text-canvas-foreground/70 sm:border-l sm:pl-8 md:text-[0.95rem]">
              Elegimos las mejores herramientas según tu proyecto, combinando
              innovación, estabilidad y flexibilidad para lograr resultados
              reales.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {techStackCategories.map((category, index) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Reveal key={category.id} delay={index * 35}>
                <article className="flex h-full flex-col rounded-2xl border border-black/6 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-[0.95rem] font-semibold tracking-tight text-canvas-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="mt-5 grid flex-1 grid-cols-3 gap-x-2 gap-y-5">
                    {category.tools.map((tool) => (
                      <li
                        key={`${category.id}-${tool.id}`}
                        className="flex flex-col items-center gap-1.5 text-center"
                      >
                        <ToolLogo id={tool.id} />
                        <span className="text-[0.65rem] leading-tight font-medium text-canvas-foreground/65 sm:text-[0.7rem]">
                          {tool.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-[#0b0f19] px-5 py-6 text-foreground md:mt-12 md:flex-row md:items-center md:gap-8 md:rounded-3xl md:px-7 md:py-6 lg:gap-10">
            <div className="flex shrink-0 items-start gap-3 md:max-w-[14rem] lg:max-w-[16rem]">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Layers className="size-4" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="text-[0.95rem] font-semibold tracking-tight text-balance">
                Tecnología al servicio{" "}
                <span className="text-brand">de tus objetivos.</span>
              </p>
            </div>

            <ul className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {techStackHighlights.map((item) => {
                const Icon = highlightIcons[item.icon];
                return (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="text-sm leading-snug text-foreground/85">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Button
              asChild
              variant="outline"
              className="shrink-0 border-brand text-brand hover:bg-brand/10"
            >
              <Link href="/contacto">
                Hablemos de tu proyecto
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
