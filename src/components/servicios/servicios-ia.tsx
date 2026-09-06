import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  FileText,
  Headphones,
  Lightbulb,
  Megaphone,
} from "lucide-react";
import {
  ClaudeLogo,
  GeminiLogo,
  MakeLogo,
  MicrosoftLogo,
  N8nLogo,
  OpenAiLogo,
  ZapierLogo,
} from "@/components/icons/ai-tool-logos";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { aiCapabilities, aiTools } from "@/content/ai-tools";

const capabilityIcons = {
  bot: Bot,
  file: FileText,
  chart: BarChart3,
  headset: Headphones,
  megaphone: Megaphone,
  lightbulb: Lightbulb,
} as const satisfies Record<
  (typeof aiCapabilities)[number]["icon"],
  LucideIcon
>;

const toolLogos = {
  openai: OpenAiLogo,
  claude: ClaudeLogo,
  gemini: GeminiLogo,
  microsoft: MicrosoftLogo,
  make: MakeLogo,
  zapier: ZapierLogo,
  n8n: N8nLogo,
} as const satisfies Record<
  (typeof aiTools)[number]["logo"],
  ComponentType<SVGProps<SVGSVGElement>>
>;

export function ServiciosIa() {
  return (
    <Section id="ia" className="relative isolate scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 left-1/4 size-[28rem] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 size-[22rem] rounded-full bg-brand/8 blur-[100px]"
        aria-hidden
      />

      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <Eyebrow>Inteligencia artificial</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
              La IA como aliada{" "}
              <span className="text-brand">de tu negocio.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/75 md:text-[0.95rem]">
              Aplicamos inteligencia artificial para automatizar procesos,
              optimizar campañas y crear experiencias más personalizadas.
            </p>
          </Reveal>

          <Reveal delay={70}>
            <p className="text-sm leading-relaxed text-foreground/75 md:text-[0.95rem]">
              Transformamos la tecnología en soluciones reales que ahorran{" "}
              <span className="font-semibold text-foreground">tiempo</span>,
              reducen{" "}
              <span className="font-semibold text-foreground">costos</span> y
              generan más{" "}
              <span className="font-semibold text-foreground">oportunidades</span>
              .
            </p>
            <Button asChild className="mt-5 bg-brand text-background hover:bg-brand/90">
              <Link href="/contacto">
                Explorar soluciones con IA
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-10">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-3.5">
            {aiCapabilities.map((item, index) => {
              const Icon = capabilityIcons[item.icon];
              return (
                <Reveal key={item.title} delay={index * 40}>
                  <article className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-sm sm:p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand/35 bg-brand/10 text-brand">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.9rem] font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-2xl lg:max-w-none lg:rounded-3xl">
              <Image
                src="/home/img-servicios-ia.png"
                alt="Asistente de IA de Vixon Studio con interfaz holográfica"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-center"
                priority={false}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-md md:mt-14 md:rounded-3xl md:px-7 md:py-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
              <div className="shrink-0 lg:max-w-[17rem] xl:max-w-[19rem]">
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand uppercase">
                  Tecnología que potencia ideas
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Trabajamos con las mejores herramientas de IA y las integramos
                  según las necesidades de tu proyecto.
                </p>
              </div>

              <div
                className="hidden h-14 w-px shrink-0 bg-white/15 lg:block"
                aria-hidden
              />

              <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-7 lg:flex-1 lg:justify-between lg:gap-x-4">
                {aiTools.map((tool) => {
                  const Logo = toolLogos[tool.logo];
                  return (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2 text-foreground/70"
                    >
                      <Logo className="size-6 shrink-0 sm:size-7" />
                      <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                        {tool.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
