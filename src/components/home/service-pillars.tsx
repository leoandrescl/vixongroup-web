import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Cloud,
  Code2,
  Globe,
  Megaphone,
  Monitor,
  PenLine,
  PieChart,
  Server,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  marketingPillarItems,
  softwarePillarItems,
} from "@/content/services";

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
    <Section>
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
              backgroundSrc="/home/img-servicios-01.jpg"
              backgroundAlt="Laptop y smartphone mostrando desarrollo y diseño digital"
            />
          </Reveal>

          <Reveal delay={110}>
            <PillarCard
              theme="marketing"
              label="Marketing, growth & diseño"
              title={
                <>
                  Conectamos tu marca con las{" "}
                  <span className="whitespace-nowrap" style={{ color: themes.marketing.accent }}>
                    personas correctas.
                  </span>
                </>
              }
              description="Estrategia, campañas y análisis de datos para aumentar ventas, leads y posicionamiento digital."
              items={marketingPillarItems}
              href="/servicios#marketing"
              cta="Ver servicios de marketing"
              backgroundSrc="/home/img-servicios-02.jpg"
              backgroundAlt="Smartphone con métricas de marketing digital"
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
  backgroundSrc,
  backgroundAlt,
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
  backgroundSrc: string;
  backgroundAlt: string;
}) {
  const t = themes[theme];

  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-5 sm:p-7 lg:p-8"
      style={{
        boxShadow: `0 0 0 1px rgb(${t.accentRgb} / 0.35)`,
      }}
    >
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-[78%_center] max-lg:object-[85%_20%]"
        priority={false}
      />
      {/* Soft left scrim so copy stays readable over the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0c1422]/92 via-[#0c1422]/55 to-transparent max-lg:from-[#0c1422]/94 max-lg:via-[#0c1422]/78 max-lg:to-[#0c1422]/35"
      />

      <div className="relative z-10 grid flex-1 gap-3 lg:grid-cols-[minmax(0,1.5fr)_minmax(7rem,0.5fr)] lg:items-stretch lg:gap-3">
        <div className="relative flex min-w-0 flex-col">
          <p
            className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase sm:text-[0.65rem]"
            style={{ color: t.accent }}
          >
            {label}
          </p>
          <h3 className="mt-2 text-[1.25rem] font-semibold tracking-tight sm:mt-3 sm:text-2xl lg:text-[1.55rem] lg:leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-[0.85rem] leading-relaxed text-white/70 sm:mt-3 lg:max-w-none lg:pr-2">
            {description}
          </p>

          <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <li key={item.title} className="flex items-start gap-2.5 sm:gap-3">
                  <span
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full sm:size-10"
                    style={{
                      color: t.accent,
                      boxShadow: `inset 0 0 0 1px rgb(${t.accentRgb} / 0.55)`,
                    }}
                  >
                    <Icon
                      className="size-4 sm:size-5"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[0.85rem] font-semibold text-foreground sm:text-[0.9rem]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] leading-snug text-white/55 sm:text-[0.72rem]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link
            href={href}
            className="mt-5 inline-flex h-10 w-fit items-center gap-2 rounded-full px-5 text-sm font-semibold transition-[transform,background-color] duration-300 ease-out-expo hover:-translate-y-px sm:mt-7 sm:h-11"
            style={{
              backgroundColor: t.buttonBg,
              color: t.buttonText,
            }}
          >
            {cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Desktop-only spacer so devices in the photo remain visible on the right */}
        <div
          className="pointer-events-none relative hidden min-h-full lg:block"
          aria-hidden
        />
      </div>
    </article>
  );
}
