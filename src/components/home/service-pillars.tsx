import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Globe,
  Megaphone,
  Monitor,
  PenLine,
  PieChart,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  marketingPillarItems,
  softwarePillarItems,
} from "@/content/services";
import { cn } from "@/lib/utils";

const iconMap = {
  globe: Globe,
  code: Code2,
  cloud: Cloud,
  server: Server,
  monitor: Monitor,
  megaphone: Megaphone,
  users: Users,
  pen: PenLine,
  pie: PieChart,
  cog: Settings,
} as const satisfies Record<
  | (typeof softwarePillarItems)[number]["icon"]
  | (typeof marketingPillarItems)[number]["icon"],
  LucideIcon
>;

export function ServicePillars() {
  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-8 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand/12 blur-[110px]" />
        <div className="absolute right-[8%] bottom-20 h-56 w-56 rounded-full bg-brand/10 blur-[90px]" />
      </div>

      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-brand uppercase">
              <Sparkles className="size-3.5 fill-brand/30" aria-hidden />
              Nuestros pilares
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              Dos áreas, un mismo objetivo:{" "}
              <span className="text-brand">tu crecimiento.</span>
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <p className="border-l-2 border-brand/50 pl-5 text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              Combinamos tecnología y marketing para ofrecer soluciones
              integrales que impulsan tu negocio{" "}
              <span className="font-semibold text-foreground">
                desde la idea hasta los resultados.
              </span>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <Reveal delay={40}>
            <PillarCard
              label="Tecnología & desarrollo"
              title={
                <>
                  Creamos soluciones digitales que{" "}
                  <span className="text-brand">funcionan.</span>
                </>
              }
              description="Desarrollamos sitios web, plataformas y software a medida con foco en rendimiento, seguridad y escalabilidad."
              items={softwarePillarItems}
              href="/servicios#software"
              cta="Ver servicios de tecnología"
              visual={<TechVisual />}
            />
          </Reveal>

          <Reveal delay={110}>
            <PillarCard
              label="Marketing, growth & diseño"
              title={
                <>
                  Conectamos tu marca con las{" "}
                  <span className="text-brand">personas correctas.</span>
                </>
              }
              description="Estrategia, campañas y análisis de datos para aumentar ventas, leads y posicionamiento digital."
              items={marketingPillarItems}
              href="/servicios#marketing"
              cta="Ver servicios de marketing"
              visual={<MarketingVisual />}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function PillarCard({
  label,
  title,
  description,
  items,
  href,
  cta,
  visual,
}: {
  label: string;
  title: ReactNode;
  description: string;
  items: readonly {
    title: string;
    detail: string;
    icon: keyof typeof iconMap;
  }[];
  href: string;
  cta: string;
  visual: ReactNode;
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-[#0c1422] p-6 ring-1 ring-brand/30 shadow-[0_0_60px_-28px_rgb(0_163_173_/_0.55)] sm:p-7 lg:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-0 h-24 bg-linear-to-t from-brand/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-16 size-72 rounded-full bg-brand/12 blur-3xl"
      />

      <div className="relative grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(13rem,0.95fr)] lg:items-stretch lg:gap-4">
        <div className="flex min-w-0 flex-col">
          <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-brand uppercase sm:text-[0.65rem]">
            {label}
          </p>
          <h3 className="mt-3 text-[1.35rem] font-semibold tracking-tight text-balance sm:text-2xl lg:text-[1.55rem] lg:leading-snug">
            {title}
          </h3>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-white/70">
            {description}
          </p>

          <ul className="mt-5 space-y-3">
            {items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-brand/55 text-brand sm:size-10">
                    <Icon
                      className="size-[1.15rem] sm:size-5"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[0.9rem] font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[0.72rem] leading-snug text-white/55">
                      {item.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Button
            asChild
            className="mt-7 w-fit bg-brand text-[#041018] hover:bg-brand/90 hover:text-[#041018]"
          >
            <Link href={href}>
              {cta}
              <ArrowRight className="text-[#041018]" />
            </Link>
          </Button>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[20rem] lg:min-h-full">
          {visual}
        </div>
      </div>
    </article>
  );
}

function GlassChip({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-brand/45 bg-[#0a101c]/85 px-2.5 py-1.5 shadow-[0_12px_28px_-16px_rgb(0_163_173_/_0.75)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

function TechVisual() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <GlassChip className="hero-float absolute top-[6%] left-[2%] z-20 flex items-center gap-1.5">
        <BarChart3 className="size-3.5 text-brand" />
        <span className="text-[0.62rem] font-medium text-white">Escalable</span>
      </GlassChip>
      <GlassChip className="hero-float absolute top-[18%] right-[4%] z-20 flex items-center gap-1.5 [animation-delay:0.5s]">
        <ShieldCheck className="size-3.5 text-brand" />
        <span className="text-[0.62rem] font-medium text-white">Seguro</span>
      </GlassChip>
      <GlassChip className="hero-float absolute top-[34%] left-[6%] z-20 flex items-center gap-1.5 [animation-delay:1s]">
        <Code2 className="size-3.5 text-brand" />
        <span className="text-[0.62rem] font-medium text-white">A medida</span>
      </GlassChip>

      {/* Laptop — frontal-ish, slight yaw */}
      <div className="absolute top-[22%] right-[18%] left-[2%] bottom-[8%] origin-bottom [transform:perspective(900px)_rotateY(-12deg)_rotateX(4deg)]">
        <div className="flex h-full flex-col rounded-[0.65rem] border border-white/15 bg-[#1a1d24] p-1.5 shadow-[0_28px_50px_-20px_rgba(0,0,0,0.85)]">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[0.4rem] bg-[#0d1117]">
            <div className="flex h-full">
              <div className="hidden w-[28%] flex-col gap-1 border-r border-white/8 bg-[#010409] p-1.5 sm:flex">
                <div className="mb-1 h-1 w-8 rounded bg-white/15" />
                {["src", "app", "lib", "api"].map((f) => (
                  <div key={f} className="h-1.5 w-[85%] rounded bg-white/10" />
                ))}
                <div className="mt-1 h-1.5 w-[70%] rounded bg-brand/50" />
              </div>
              <div className="flex-1 space-y-1 p-2 font-mono text-[0.45rem] leading-relaxed sm:text-[0.5rem]">
                <p>
                  <span className="text-fuchsia-400">import</span>{" "}
                  <span className="text-sky-300">{"{ api }"}</span>{" "}
                  <span className="text-fuchsia-400">from</span>{" "}
                  <span className="text-amber-300">&apos;./lib&apos;</span>
                </p>
                <p>
                  <span className="text-fuchsia-400">export async function</span>{" "}
                  <span className="text-sky-300">buildProduct</span>() {"{"}
                </p>
                <p className="pl-2">
                  <span className="text-fuchsia-400">const</span> data ={" "}
                  <span className="text-fuchsia-400">await</span> api.
                  <span className="text-sky-300">fetch</span>()
                </p>
                <p className="pl-2">
                  <span className="text-fuchsia-400">return</span>{" "}
                  <span className="text-amber-300">&lt;App</span>{" "}
                  <span className="text-sky-300">ready</span>=
                  <span className="text-emerald-400">{"{true}"}</span>{" "}
                  <span className="text-amber-300">/&gt;</span>
                </p>
                <p>{"}"}</p>
                <p className="pt-1 text-white/25">
                  // VIXON · Ideas · Desarrollo · Soluciones
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 top-0 h-px bg-brand/40" />
          </div>
          <div className="mx-auto mt-1 h-1 w-10 rounded-full bg-white/20" />
        </div>
        <div className="mx-auto h-1.5 w-[102%] rounded-b-md bg-linear-to-b from-[#2a2e36] to-[#15181e] shadow-lg" />
      </div>

      {/* Phone beside laptop */}
      <div className="absolute right-[2%] bottom-[4%] z-10 w-[34%] max-w-[6.2rem] origin-bottom [transform:perspective(700px)_rotateY(8deg)]">
        <div className="rounded-[1.1rem] border border-white/20 bg-[#0a0a0c] p-1 shadow-[0_22px_40px_-16px_rgba(0,0,0,0.9)]">
          <div className="overflow-hidden rounded-[0.85rem] bg-[#05070c]">
            <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-white/15" />
            <div className="px-2 pt-3 pb-2">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="flex size-5 items-center justify-center rounded-md bg-brand/20 text-[0.55rem] font-bold text-brand">
                  V
                </span>
                <span className="text-[0.55rem] font-semibold tracking-wide text-brand">
                  VIXON
                </span>
              </div>
              {["Ideas", "Desarrollo", "Soluciones", "Resultados"].map(
                (step) => (
                  <div
                    key={step}
                    className="mb-1.5 flex items-center gap-1.5 border-b border-white/6 pb-1.5 last:mb-0 last:border-0 last:pb-0"
                  >
                    <span className="flex size-3.5 items-center justify-center rounded-full bg-brand/20">
                      <Check className="size-2 text-brand" strokeWidth={3} />
                    </span>
                    <span className="text-[0.5rem] text-white/85">{step}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <GlassChip className="hero-float absolute top-[4%] right-[2%] z-20 max-w-[9.5rem] p-2">
        <div className="flex items-start gap-1.5">
          <TrendingUp className="mt-0.5 size-3.5 shrink-0 text-brand" />
          <p className="text-[0.6rem] leading-snug font-medium text-white">
            Más alcance, Más clientes, Más ventas
          </p>
        </div>
      </GlassChip>

      {/* Soft monitor behind */}
      <div className="absolute top-[18%] right-[4%] left-[28%] bottom-[22%] opacity-45 blur-[0.5px]">
        <div className="h-full rounded-lg border border-white/10 bg-[#12161f] p-1.5 shadow-xl">
          <div className="grid h-full grid-cols-2 gap-1 rounded-md bg-[#0a0e16] p-1.5">
            <div className="rounded bg-brand/10 ring-1 ring-brand/20" />
            <div className="rounded bg-white/5 ring-1 ring-white/8" />
            <div className="col-span-2 flex items-end gap-0.5 rounded bg-white/4 p-1.5">
              {[40, 55, 48, 70, 62, 85, 78, 95].map((h, i) => (
                <span
                  key={i}
                  className="w-full rounded-sm bg-brand/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto h-2 w-8 bg-white/10" />
        <div className="mx-auto h-1 w-16 rounded-b bg-white/8" />
      </div>

      {/* Accent plant blob */}
      <div className="absolute right-[2%] bottom-[18%] h-16 w-10 rounded-full bg-emerald-500/25 blur-md" />

      {/* Main phone — upright, slight tilt */}
      <div className="absolute top-[14%] bottom-[2%] left-[8%] z-10 w-[58%] max-w-[9.5rem] origin-bottom [transform:perspective(800px)_rotateY(-6deg)]">
        <div className="flex h-full flex-col rounded-[1.35rem] border border-white/18 bg-[#0a0a0c] p-1.5 shadow-[0_28px_50px_-18px_rgba(0,0,0,0.9)]">
          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.05rem] bg-[#06080e]">
            <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-white/15" />
            <div className="flex flex-1 flex-col px-2.5 pt-3 pb-2">
              <p className="text-[0.55rem] font-semibold text-white">
                Campañas que{" "}
                <span className="text-brand">generan resultados</span>
              </p>
              <p className="mt-0.5 text-[0.45rem] text-white/45">
                Resumen de rendimiento
              </p>

              <div className="mt-2 rounded-lg bg-white/4 p-2 ring-1 ring-white/8">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[0.45rem] text-white/50">
                    Rendimiento
                  </span>
                  <span className="text-[0.4rem] text-brand">30 días</span>
                </div>
                <svg viewBox="0 0 100 36" className="h-9 w-full text-brand">
                  <path
                    d="M2 30 C18 28, 28 18, 40 20 S58 30, 70 12 S88 6, 98 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 30 C18 28, 28 18, 40 20 S58 30, 70 12 S88 6, 98 8 L98 36 L2 36 Z"
                    fill="currentColor"
                    opacity="0.15"
                  />
                </svg>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-1.5">
                <div className="rounded-md bg-white/4 p-1.5 ring-1 ring-white/8">
                  <p className="text-[0.7rem] font-bold text-brand">+230%</p>
                  <p className="text-[0.4rem] text-white/55">Ventas online</p>
                </div>
                <div className="rounded-md bg-white/4 p-1.5 ring-1 ring-white/8">
                  <p className="text-[0.7rem] font-bold text-brand">+120%</p>
                  <p className="text-[0.4rem] text-white/55">Leads calificados</p>
                </div>
              </div>

              <div className="mt-auto flex justify-center gap-1.5 pt-2">
                {["M", "G", "T", "in", "IG"].map((label) => (
                  <span
                    key={label}
                    className="flex size-4 items-center justify-center rounded-full bg-white/10 text-[0.35rem] font-semibold text-white/70"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
