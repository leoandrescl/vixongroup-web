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
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  marketingPillarItems,
  softwarePillarItems,
} from "@/content/services";
import { cn } from "@/lib/utils";

/** Cyan (tech) vs emerald (marketing) — must stay distinct like the mock */
const themes = {
  tech: {
    accent: "#00c8ea",
    accentRgb: "0 200 234",
    buttonBg: "#00c8ea",
    buttonText: "#041018",
  },
  marketing: {
    accent: "#00d9a5",
    accentRgb: "0 217 165",
    buttonBg: "#00d9a5",
    buttonText: "#041018",
  },
} as const;

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
        <div className="absolute top-8 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#00c8ea]/12 blur-[110px]" />
        <div className="absolute right-[8%] bottom-20 h-56 w-56 rounded-full bg-[#00d9a5]/10 blur-[90px]" />
      </div>

      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#00c8ea] uppercase">
              <Sparkles className="size-3.5 fill-[#00c8ea]/30" aria-hidden />
              Nuestros pilares
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              Dos áreas, un mismo objetivo:{" "}
              <span className="text-[#00c8ea]">tu crecimiento.</span>
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <p className="border-l-2 border-[#00c8ea]/50 pl-5 text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
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
              theme="tech"
              label="Tecnología & desarrollo"
              title={
                <>
                  Creamos soluciones digitales que{" "}
                  <span style={{ color: themes.tech.accent }}>funcionan.</span>
                </>
              }
              description="Desarrollamos sitios web, plataformas y software a medida con foco en rendimiento, seguridad y escalabilidad."
              items={softwarePillarItems}
              href="/servicios#software"
              cta="Ver servicios de tecnología"
              imageSrc="/home/pillar-tech-devices.webp"
              imageAlt="Laptop con código y smartphone VIXON"
              chips={
                <>
                  <GlassChip
                    accent={themes.tech.accent}
                    className="hero-float absolute top-[8%] left-[4%] z-10 flex items-center gap-1.5"
                  >
                    <BarChart3
                      className="size-3.5"
                      style={{ color: themes.tech.accent }}
                    />
                    <span className="text-[0.62rem] font-medium text-white">
                      Escalable
                    </span>
                  </GlassChip>
                  <GlassChip
                    accent={themes.tech.accent}
                    className="hero-float absolute top-[20%] right-[2%] z-10 flex items-center gap-1.5 [animation-delay:0.5s]"
                  >
                    <ShieldCheck
                      className="size-3.5"
                      style={{ color: themes.tech.accent }}
                    />
                    <span className="text-[0.62rem] font-medium text-white">
                      Seguro
                    </span>
                  </GlassChip>
                  <GlassChip
                    accent={themes.tech.accent}
                    className="hero-float absolute top-[36%] left-[8%] z-10 flex items-center gap-1.5 [animation-delay:1s]"
                  >
                    <Code2
                      className="size-3.5"
                      style={{ color: themes.tech.accent }}
                    />
                    <span className="text-[0.62rem] font-medium text-white">
                      A medida
                    </span>
                  </GlassChip>
                </>
              }
            />
          </Reveal>

          <Reveal delay={110}>
            <PillarCard
              theme="marketing"
              label="Marketing, growth & diseño"
              title={
                <>
                  Conectamos tu marca con las{" "}
                  <span style={{ color: themes.marketing.accent }}>
                    personas correctas.
                  </span>
                </>
              }
              description="Estrategia, campañas y análisis de datos para aumentar ventas, leads y posicionamiento digital."
              items={marketingPillarItems}
              href="/servicios#marketing"
              cta="Ver servicios de marketing"
              imageSrc="/home/pillar-marketing-phone.webp"
              imageAlt="Smartphone con dashboard de marketing"
              chips={
                <GlassChip
                  accent={themes.marketing.accent}
                  className="hero-float absolute top-[4%] right-[2%] z-10 max-w-[9.5rem] p-2"
                >
                  <div className="flex items-start gap-1.5">
                    <TrendingUp
                      className="mt-0.5 size-3.5 shrink-0"
                      style={{ color: themes.marketing.accent }}
                    />
                    <p className="text-[0.6rem] leading-snug font-medium text-white">
                      Más alcance, Más clientes, Más ventas
                    </p>
                  </div>
                </GlassChip>
              }
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function PillarCard({
  theme,
  label,
  title,
  description,
  items,
  href,
  cta,
  imageSrc,
  imageAlt,
  chips,
}: {
  theme: keyof typeof themes;
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
  imageSrc: string;
  imageAlt: string;
  chips: ReactNode;
}) {
  const t = themes[theme];

  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-[#0c1422] p-6 sm:p-7 lg:p-8"
      style={{
        boxShadow: `0 0 0 1px rgb(${t.accentRgb} / 0.35), 0 0 60px -28px rgb(${t.accentRgb} / 0.55)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-0 h-28 bg-linear-to-t to-transparent"
        style={{
          backgroundImage: `linear-gradient(to top, rgb(${t.accentRgb} / 0.16), transparent)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-16 size-72 rounded-full blur-3xl"
        style={{ backgroundColor: `rgb(${t.accentRgb} / 0.14)` }}
      />

      <div className="relative grid flex-1 gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(13rem,0.95fr)] lg:items-stretch lg:gap-3">
        <div className="relative z-10 flex min-w-0 flex-col">
          <p
            className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase sm:text-[0.65rem]"
            style={{ color: t.accent }}
          >
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
                  <span
                    className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full sm:size-10"
                    style={{
                      color: t.accent,
                      boxShadow: `inset 0 0 0 1px rgb(${t.accentRgb} / 0.55)`,
                    }}
                  >
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

          <Link
            href={href}
            className="mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-full px-5 text-sm font-semibold transition-[transform,box-shadow,background-color] duration-300 ease-out-expo hover:-translate-y-px"
            style={{
              backgroundColor: t.buttonBg,
              color: t.buttonText,
              boxShadow: `0 12px 28px -12px rgb(${t.accentRgb} / 0.55)`,
            }}
          >
            {cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="relative min-h-[17.5rem] sm:min-h-[20rem] lg:min-h-full">
          <div
            className={cn(
              "absolute inset-0",
              theme === "tech"
                ? "top-[4%] right-[-4%] bottom-[-2%] left-[-6%]"
                : "top-[2%] right-[-2%] bottom-[-4%] left-[4%]",
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 320px, 360px"
              className={cn(
                "object-contain",
                theme === "tech" ? "object-[center_bottom]" : "object-[center_bottom]",
              )}
            />
          </div>
          {chips}
        </div>
      </div>
    </article>
  );
}

function GlassChip({
  className,
  children,
  accent,
}: {
  className?: string;
  children: ReactNode;
  accent: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-[#0a101c]/85 px-2.5 py-1.5 shadow-lg backdrop-blur-md",
        className,
      )}
      style={{ border: `1px solid ${accent}66` }}
    >
      {children}
    </div>
  );
}
