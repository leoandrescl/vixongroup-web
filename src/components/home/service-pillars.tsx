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

      <div className="relative grid flex-1 gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(12.5rem,1fr)] lg:items-stretch lg:gap-3 xl:gap-5">
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

        <div className="relative min-h-[16.5rem] sm:min-h-[19rem] lg:min-h-full lg:self-stretch">
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
        "rounded-lg border border-brand/40 bg-[#0a101c]/80 px-2.5 py-1.5 shadow-[0_12px_28px_-18px_rgb(0_163_173_/_0.7)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

function TechVisual() {
  return (
    <div className="absolute inset-0 overflow-visible">
      <div className="absolute -right-[6%] -bottom-[4%] left-[-8%] top-[10%] sm:top-[6%]">
        <Image
          src="/home/pillar-tech-devices.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 340px, 380px"
          className="object-contain object-[center_bottom] drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
          aria-hidden
        />
      </div>

      <GlassChip className="hero-float absolute top-[8%] left-[4%] z-10 flex items-center gap-1.5">
        <BarChart3 className="size-3.5 text-brand" aria-hidden />
        <span className="text-[0.62rem] font-medium text-white">Escalable</span>
      </GlassChip>
      <GlassChip className="hero-float absolute top-[20%] right-[2%] z-10 flex items-center gap-1.5 [animation-delay:0.5s]">
        <ShieldCheck className="size-3.5 text-brand" aria-hidden />
        <span className="text-[0.62rem] font-medium text-white">Seguro</span>
      </GlassChip>
      <GlassChip className="hero-float absolute top-[36%] left-[8%] z-10 flex items-center gap-1.5 [animation-delay:1s]">
        <Code2 className="size-3.5 text-brand" aria-hidden />
        <span className="text-[0.62rem] font-medium text-white">A medida</span>
      </GlassChip>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="absolute inset-0 overflow-visible">
      <div className="absolute top-[6%] right-[-2%] bottom-[-6%] left-[8%] sm:left-[12%]">
        <Image
          src="/home/pillar-marketing-phone.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 260px, 300px"
          className="object-contain object-[center_bottom] drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
          aria-hidden
        />
      </div>

      <GlassChip className="hero-float absolute top-[2%] right-[0%] z-10 max-w-[9.25rem] p-2">
        <div className="flex items-start gap-1.5">
          <TrendingUp
            className="mt-0.5 size-3.5 shrink-0 text-brand"
            aria-hidden
          />
          <p className="text-[0.6rem] leading-snug font-medium text-white">
            Más alcance, Más clientes, Más ventas
          </p>
        </div>
      </GlassChip>
    </div>
  );
}
