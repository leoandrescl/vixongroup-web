import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Handshake,
  Layers,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { marketingScope, softwareScope } from "@/content/services";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Target,
    label: "Estrategia",
    detail: "Entendemos tu negocio",
  },
  {
    icon: Layers,
    label: "Ejecución",
    detail: "Convertimos ideas en soluciones",
  },
  {
    icon: BarChart3,
    label: "Resultados",
    detail: "Crecemos junto a ti",
  },
] as const;

const valueProps = [
  {
    icon: Users,
    title: "Proyectos reales",
    detail: "En múltiples industrias",
  },
  {
    icon: Zap,
    title: "Soluciones a medida",
    detail: "Sin plantillas genéricas",
  },
  {
    icon: BarChart3,
    title: "Datos que importan",
    detail: "Decisiones basadas en resultados",
  },
  {
    icon: Handshake,
    title: "Acompañamiento",
    detail: "Antes, durante y después",
  },
] as const;

export function ServicePillars() {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-16 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand/12 blur-[100px]" />
        <div className="absolute right-[8%] bottom-24 h-64 w-64 rounded-full bg-marketing/10 blur-[90px]" />
        <div className="absolute bottom-40 left-[12%] h-48 w-48 rounded-full bg-brand/8 blur-[80px]" />
      </div>

      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Nuestros servicios</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Soluciones integrales para crear, conectar y hacer{" "}
              <span className="bg-linear-to-r from-brand to-[#4fd1c5] bg-clip-text text-transparent">
                crecer
              </span>{" "}
              tu negocio digital.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Combinamos tecnología, diseño y marketing para construir productos
              digitales que venden, escalan y se miden con claridad.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:gap-5">
              {highlights.map((item) => (
                <div key={item.label} className="min-w-0">
                  <item.icon
                    className="size-10 text-brand sm:size-[2.7rem]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="mt-3 text-[0.65rem] font-semibold tracking-[0.16em] text-foreground uppercase sm:text-xs">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground sm:text-xs">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2">
          <Reveal delay={40}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface/70 p-6 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-brand/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative grid flex-1 gap-8 xl:grid-cols-[1fr_0.95fr] xl:items-center">
                <div>
                  <div className="inline-flex max-w-full items-center gap-2 whitespace-nowrap">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-[0.65rem] font-bold text-brand-foreground">
                      01
                    </span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-brand uppercase">
                      Tecnología e ingeniería
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-[1.7rem]">
                    Software y e-commerce
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Desarrollamos productos digitales escalables, seguros y
                    listos para vender o operar a escala.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {softwareScope.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-7">
                    <Link href="/servicios#software">
                      Ver todos los servicios
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
                <SoftwareVisual />
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface/70 p-6 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-marketing/15 blur-3xl"
              />
              <div className="relative grid flex-1 gap-8 xl:grid-cols-[1fr_0.95fr] xl:items-center">
                <div>
                  <div className="inline-flex max-w-full items-center gap-2 whitespace-nowrap">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-marketing text-[0.65rem] font-bold text-marketing-foreground">
                      02
                    </span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-marketing uppercase">
                      Marketing, growth y diseño
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-[1.7rem]">
                    Marketing digital y crecimiento
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Estrategias orientadas a datos para atraer, convertir y
                    retener clientes con ROI medible.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {marketingScope.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-marketing"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="marketing" className="mt-7">
                    <Link href="/servicios#marketing">
                      Ver todos los servicios
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
                <MarketingVisual />
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <item.icon
                  className="mt-0.5 size-10 shrink-0 text-brand"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
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
        "rounded-2xl border border-white/12 bg-white/6 px-3 py-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="relative mx-auto hidden h-[17.5rem] w-full max-w-[18rem] sm:block xl:mx-0 xl:max-w-none">
      <div className="absolute inset-x-2 top-6 overflow-hidden rounded-2xl border border-white/12 bg-[#0a0e16] shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-brand/80" />
          <span className="ml-2 text-[0.55rem] text-muted-foreground">
            app.vixongroup.com
          </span>
        </div>
        <div className="relative aspect-16/10">
          <Image
            src="/portafolio/sorteo-desktop.jpg"
            alt=""
            fill
            sizes="280px"
            className="object-cover object-top"
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0e16]/70 via-transparent to-transparent" />
        </div>
      </div>

      <div className="absolute right-1 bottom-0 w-[5.6rem] overflow-hidden rounded-[1.1rem] border border-white/15 bg-[#0a0e16] p-1 shadow-2xl shadow-black/60">
        <div className="relative aspect-9/16 overflow-hidden rounded-[0.85rem]">
          <Image
            src="/portafolio/allisone-mobile.jpg"
            alt=""
            fill
            sizes="90px"
            className="object-cover object-top"
            aria-hidden
          />
        </div>
      </div>

      <GlassChip className="hero-float absolute top-0 left-0 flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-lg bg-brand/15 text-brand ring-1 ring-brand/25">
          <Code2 className="size-3.5" aria-hidden />
        </span>
        <span className="text-[0.65rem] font-medium text-foreground">
          Desarrollo a medida
        </span>
      </GlassChip>

      <GlassChip className="hero-float absolute top-16 -right-1 flex items-center gap-2 [animation-delay:0.6s]">
        <span className="flex size-7 items-center justify-center rounded-lg bg-brand/15 text-brand ring-1 ring-brand/25">
          <Cloud className="size-3.5" aria-hidden />
        </span>
        <span className="text-[0.65rem] font-medium text-foreground">
          Cloud & infraestructura
        </span>
      </GlassChip>

      <GlassChip className="hero-float absolute bottom-10 left-0 flex items-center gap-2 [animation-delay:1.2s]">
        <span className="flex size-7 items-center justify-center rounded-lg bg-brand/15 text-brand ring-1 ring-brand/25">
          <ShieldCheck className="size-3.5" aria-hidden />
        </span>
        <span className="text-[0.65rem] font-medium text-foreground">
          Seguro y escalable
        </span>
      </GlassChip>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="relative mx-auto hidden h-[17.5rem] w-full max-w-[16rem] sm:block xl:mx-0 xl:max-w-none">
      <div className="absolute top-8 left-1/2 w-[7.2rem] -translate-x-1/2 overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0a0e16] p-1.5 shadow-2xl shadow-black/60">
        <div className="relative aspect-9/16 overflow-hidden rounded-[1rem]">
          <Image
            src="/portafolio/sorteo-mobile.jpg"
            alt=""
            fill
            sizes="115px"
            className="object-cover object-top"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/35 to-transparent px-2 pt-8 pb-2">
            <div className="flex justify-center gap-1.5">
              {["IG", "FB", "TT", "YT"].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-white/12 px-1.5 py-0.5 text-[0.45rem] font-semibold tracking-wide text-white/85"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <GlassChip className="hero-float absolute top-0 right-0 w-[8.2rem] p-2.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.6rem] font-semibold text-foreground">Meta Ads</p>
          <span className="text-[0.55rem] font-semibold text-brand">+120%</span>
        </div>
        <p className="mt-0.5 text-[0.7rem] font-semibold text-foreground">
          ROAS 4.2x
        </p>
        <div className="mt-2 flex h-8 items-end gap-0.5">
          {[35, 48, 42, 62, 55, 78, 70, 92].map((h, i) => (
            <span
              key={i}
              className="hero-bar w-full rounded-sm bg-brand/80"
              style={{
                height: `${h}%`,
                animationDelay: `${400 + i * 50}ms`,
              }}
            />
          ))}
        </div>
      </GlassChip>

      <GlassChip className="hero-float absolute top-[5.5rem] -left-1 w-[8rem] p-2.5 [animation-delay:0.7s]">
        <p className="text-[0.6rem] font-semibold text-foreground">Google Ads</p>
        <p className="mt-0.5 text-[0.7rem] font-semibold text-emerald-400">
          Conversiones +185%
        </p>
        <svg
          viewBox="0 0 100 28"
          className="mt-2 h-6 w-full text-emerald-400"
          aria-hidden
        >
          <path
            d="M2 22 C18 20, 28 12, 40 14 S62 24, 74 10 S90 4, 98 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </GlassChip>

      <GlassChip className="hero-float absolute right-0 bottom-2 flex items-center gap-2 [animation-delay:1.3s]">
        <span className="flex size-7 items-center justify-center rounded-lg bg-marketing/15 text-marketing ring-1 ring-marketing/25">
          <TrendingUp className="size-3.5" aria-hidden />
        </span>
        <span className="text-[0.65rem] font-medium text-foreground">
          Crecimiento sostenible
        </span>
      </GlassChip>
    </div>
  );
}
