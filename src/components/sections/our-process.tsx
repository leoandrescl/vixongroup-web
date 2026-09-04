import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  FileText,
  MessageSquareText,
  Pencil,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { methodologySteps, processStats } from "@/content/site";
import { cn } from "@/lib/utils";

const stepIcons = {
  strategy: MessageSquareText,
  design: Pencil,
  dev: Code2,
  launch: Rocket,
  growth: BarChart3,
  optimize: RefreshCw,
} as const;

const resultIcons = {
  projects: FileText,
  clients: Users,
  experience: Star,
  commitment: ShieldCheck,
} as const;

const stackBadges = ["Next.js", "React", "Node.js", "WordPress", "Shopify"] as const;
const growthBadges = ["Meta", "Google Ads", "Instagram", "TikTok", "YouTube"] as const;

function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-3 shadow-[0_20px_50px_-28px_rgb(0_163_173_/_0.55)] backdrop-blur-md",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand/15 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function StrategyVisual() {
  const rows = [
    { label: "Análisis", done: true },
    { label: "Objetivos", done: true },
    { label: "Plan de acción", done: false },
  ];

  return (
    <GlassPanel className="min-h-[9.5rem]">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-brand/80" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
      </div>
      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-2 rounded-lg bg-background/50 px-2.5 py-1.5 text-[0.7rem]"
          >
            <span
              className={cn(
                "flex size-4 items-center justify-center rounded-full",
                row.done ? "bg-brand text-brand-foreground" : "bg-white/10 text-white/40",
              )}
            >
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            <span className={row.done ? "text-foreground" : "text-muted-foreground"}>
              {row.label}
            </span>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

function DesignVisual() {
  return (
    <div className="relative min-h-[9.5rem]">
      <GlassPanel className="absolute top-0 left-0 w-[72%] rotate-[-4deg]">
        <div className="aspect-4/3 overflow-hidden rounded-lg bg-linear-to-br from-brand/40 via-surface to-background">
          <div className="flex h-full flex-col justify-end gap-1 p-2">
            <div className="h-1.5 w-3/4 rounded-full bg-white/50" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/30" />
          </div>
        </div>
      </GlassPanel>
      <GlassPanel className="absolute right-0 bottom-0 w-[58%] rotate-[6deg] p-2.5">
        <p className="text-2xl font-semibold tracking-tight text-brand">Aa</p>
        <div className="mt-2 flex gap-1">
          <span className="size-3 rounded-full bg-brand" />
          <span className="size-3 rounded-full bg-foreground/80" />
          <span className="size-3 rounded-full bg-marketing" />
        </div>
      </GlassPanel>
    </div>
  );
}

function DevVisual() {
  return (
    <GlassPanel className="min-h-[9.5rem]">
      <div className="space-y-1 font-mono text-[0.58rem] leading-relaxed text-brand/90">
        <p>
          <span className="text-muted-foreground">const</span> app ={" "}
          <span className="text-foreground/80">create()</span>
        </p>
        <p>
          app.<span className="text-foreground/80">scale</span>()
        </p>
        <p>
          <span className="text-muted-foreground">await</span> ship()
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1">
        {stackBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-brand/30 bg-brand/10 px-1.5 py-0.5 text-[0.55rem] font-medium text-brand"
          >
            {badge}
          </span>
        ))}
      </div>
    </GlassPanel>
  );
}

function LaunchVisual() {
  return (
    <GlassPanel className="min-h-[9.5rem]">
      <div className="mb-2 flex items-center gap-1 border-b border-white/8 pb-2">
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-2">
        <div className="flex size-9 items-center justify-center rounded-full border border-brand/40 bg-brand/15 text-brand">
          <Sparkles className="size-4" />
        </div>
        <span className="relative inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-[0.65rem] font-semibold text-brand-foreground shadow-[0_10px_24px_-10px_rgb(0_163_173_/_0.8)]">
          Launch
          <span
            className="absolute -right-2 -bottom-3 size-4 rotate-[-18deg] rounded-sm border border-white/20 bg-foreground/90"
            aria-hidden
          />
        </span>
      </div>
    </GlassPanel>
  );
}

function GrowthVisual() {
  const bars = [38, 52, 44, 68, 58, 82, 74];

  return (
    <GlassPanel className="min-h-[9.5rem]">
      <div className="mb-2 flex flex-wrap gap-1">
        {growthBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[0.5rem] font-medium text-foreground/70"
          >
            {badge}
          </span>
        ))}
      </div>
      <div className="flex h-14 items-end gap-1.5">
        {bars.map((height, index) => (
          <span
            key={height}
            className="flex-1 rounded-t-sm bg-linear-to-t from-brand/40 to-brand"
            style={{
              height: `${height}%`,
              animationDelay: `${index * 60}ms`,
            }}
          />
        ))}
      </div>
    </GlassPanel>
  );
}

function OptimizeVisual() {
  const items = [
    "Mejora continua",
    "Más ventas",
    "Mejor rendimiento",
    "Nuevas oportunidades",
  ];

  return (
    <GlassPanel className="min-h-[9.5rem]">
      <p className="mb-2 text-[0.65rem] font-semibold tracking-wide text-brand">
        Mejora continua
      </p>
      <ul className="space-y-1.5">
        {items.slice(1).map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[0.68rem] text-foreground/80"
          >
            <Check className="size-3 shrink-0 text-brand" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

const visuals = {
  strategy: StrategyVisual,
  design: DesignVisual,
  dev: DevVisual,
  launch: LaunchVisual,
  growth: GrowthVisual,
  optimize: OptimizeVisual,
} as const;

export function OurProcess() {
  return (
    <Section id="metodologia" className="relative isolate scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute top-16 left-1/4 size-[28rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute right-0 bottom-24 size-[22rem] rounded-full bg-brand/8 blur-[100px]" />
      </div>

      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <Eyebrow>Nuestro proceso</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              De la idea al{" "}
              <span className="text-brand">resultado.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Un mismo equipo, todas las piezas. Estrategia, diseño, desarrollo
              y marketing trabajando en conjunto para convertir ideas en
              productos digitales que crecen.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md md:p-6">
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                  <BarChart3 className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-snug md:text-[0.95rem]">
                    Más que proveedores, somos tu partner digital.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Nos involucramos en tu negocio desde el primer día.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-5">
                <a href="#proceso-pasos">
                  Conoce cómo trabajamos
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <ol
          id="proceso-pasos"
          className="relative mt-14 scroll-mt-28 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-3 xl:gap-4"
        >
          <div
            className="pointer-events-none absolute top-[1.15rem] right-[8%] left-[8%] hidden border-t border-dashed border-brand/35 lg:block"
            aria-hidden
          />

          {methodologySteps.map((step, index) => {
            const Icon = stepIcons[step.visual];
            const Visual = visuals[step.visual];

            return (
              <Reveal
                key={step.n}
                as="li"
                delay={index * 70}
                className="relative flex flex-col"
              >
                <div className="relative z-10 mb-4 flex items-center gap-3 lg:mb-5 lg:justify-center">
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-brand bg-background text-xs font-semibold text-brand shadow-[0_0_0_4px_rgb(11_15_25)]">
                    {step.n}
                  </span>
                  <Icon className="size-5 text-brand lg:hidden" aria-hidden />
                </div>

                <div className="mb-3 hidden justify-center lg:flex">
                  <Icon className="size-5 text-brand" aria-hidden />
                </div>

                <div className="lg:text-center">
                  <h3 className="text-base font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground lg:text-[0.8rem] xl:text-sm">
                    {step.body}
                  </p>
                </div>

                <div className="relative mt-4 flex-1">
                  <Visual />
                  {index < methodologySteps.length - 1 ? (
                    <ChevronRight
                      className="absolute top-1/2 -right-2 z-10 hidden size-4 -translate-y-1/2 text-brand xl:block 2xl:-right-3"
                      aria-hidden
                    />
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={120}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-[0_30px_80px_-40px_rgb(0_163_173_/_0.45)] backdrop-blur-md md:mt-20 md:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand/15 blur-[90px]"
              aria-hidden
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.1fr_0.85fr] lg:items-end lg:gap-8">
              <div>
                <Eyebrow>Resultados que hablan</Eyebrow>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance md:text-[1.75rem]">
                  Tecnología y marketing con impacto real.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Cada proyecto es una oportunidad para generar resultados
                  medibles y un crecimiento sostenible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:gap-x-3">
                {processStats.map((stat) => {
                  const Icon = resultIcons[stat.icon];
                  return (
                    <div key={stat.label} className="min-w-0">
                      <Icon className="mb-2 size-5 text-brand" aria-hidden />
                      <p className="text-2xl font-semibold tracking-tight text-brand md:text-[1.65rem]">
                        <AnimatedStat value={stat.value} />
                      </p>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground md:text-[0.7rem]">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/70 p-5 md:p-6">
                <h4 className="text-lg font-semibold tracking-tight">
                  ¿Tienes un proyecto en mente?
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Hablemos y veamos cómo podemos llevarlo al siguiente nivel.
                </p>
                <Button asChild size="lg" className="mt-5 w-full sm:w-auto">
                  <Link href="/contacto">
                    Hablemos de tu proyecto
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
