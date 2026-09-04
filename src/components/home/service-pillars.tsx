import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
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
  (typeof softwarePillarItems)[number]["icon"] | (typeof marketingPillarItems)[number]["icon"],
  LucideIcon
>;

export function ServicePillars() {
  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-brand/14 blur-[110px]" />
        <div className="absolute right-[6%] bottom-16 h-64 w-64 rounded-full bg-brand/10 blur-[90px]" />
        <div className="absolute bottom-32 left-[10%] h-52 w-52 rounded-full bg-brand/8 blur-[80px]" />
      </div>

      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-brand uppercase">
              <Sparkles className="size-3.5" aria-hidden />
              Nuestros pilares
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.15]">
              Dos áreas, un mismo objetivo:{" "}
              <span className="text-brand">tu crecimiento.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="border-l border-brand/45 pl-5 text-sm leading-relaxed text-muted-foreground md:pl-6 md:text-[0.95rem] lg:mt-10">
              Combinamos tecnología y marketing para ofrecer soluciones
              integrales que impulsan tu negocio{" "}
              <span className="font-medium text-foreground">
                desde la idea hasta los resultados.
              </span>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2">
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

          <Reveal delay={120}>
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface/75 p-6 shadow-[0_0_0_1px_rgb(0_163_173_/_0.18),0_28px_80px_-36px_rgb(0_163_173_/_0.45)] ring-1 ring-brand/25 backdrop-blur-md transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full bg-brand/16 blur-3xl"
      />

      <div className="relative grid flex-1 gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
        <div className="flex min-w-0 flex-col">
          <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-brand uppercase whitespace-nowrap">
            {label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance md:text-[1.65rem] md:leading-snug">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <ul className="mt-6 space-y-3.5">
            {items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-brand/40">
                    <Icon
                      className="size-5 text-brand"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Button asChild className="mt-8 w-fit">
            <Link href={href}>
              {cta}
              <ArrowRight />
            </Link>
          </Button>
        </div>

        {visual}
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
        "rounded-xl border border-brand/25 bg-[#0b1220]/75 px-2.5 py-1.5 shadow-[0_16px_36px_-22px_rgba(0,163,173,0.55)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

function TechVisual() {
  return (
    <div className="relative mx-auto h-[16.5rem] w-full max-w-[19rem] sm:h-[18rem] xl:mx-0 xl:max-w-none">
      <div className="absolute inset-x-0 top-4 bottom-0">
        <Image
          src="/home/pillar-tech-devices.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 320px, 300px"
          className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
          aria-hidden
        />
      </div>

      <GlassChip className="hero-float absolute top-0 left-0 flex items-center gap-1.5">
        <BarChart3 className="size-3.5 text-brand" aria-hidden />
        <span className="text-[0.65rem] font-medium text-foreground">
          Escalable
        </span>
      </GlassChip>

      <GlassChip className="hero-float absolute top-10 right-0 flex items-center gap-1.5 [animation-delay:0.55s]">
        <ShieldCheck className="size-3.5 text-brand" aria-hidden />
        <span className="text-[0.65rem] font-medium text-foreground">
          Seguro
        </span>
      </GlassChip>

      <GlassChip className="hero-float absolute top-[5.25rem] left-1 flex items-center gap-1.5 [animation-delay:1.1s]">
        <Code2 className="size-3.5 text-brand" aria-hidden />
        <span className="text-[0.65rem] font-medium text-foreground">
          A medida
        </span>
      </GlassChip>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="relative mx-auto h-[16.5rem] w-full max-w-[14rem] sm:h-[18rem] xl:mx-0 xl:max-w-none">
      <div className="absolute inset-x-2 top-6 bottom-0 sm:inset-x-4">
        <Image
          src="/home/pillar-marketing-phone.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 240px, 220px"
          className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
          aria-hidden
        />
      </div>

      <GlassChip className="hero-float absolute top-0 right-0 max-w-[9.5rem] p-2.5">
        <div className="flex items-start gap-2">
          <BarChart3 className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
          <p className="text-[0.65rem] leading-snug font-medium text-foreground">
            Más alcance, Más clientes, Más ventas
          </p>
        </div>
      </GlassChip>
    </div>
  );
}
