import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Monitor,
  PenLine,
  PieChart,
  Settings,
  Video,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { serviceCatalog } from "@/content/services";

const iconMap = {
  monitor: Monitor,
  code: Code2,
  cog: Settings,
  cloud: Cloud,
  pen: PenLine,
  chart: BarChart3,
  pie: PieChart,
  video: Video,
} as const satisfies Record<(typeof serviceCatalog)[number]["icon"], LucideIcon>;

export function ServiciosCatalog() {
  return (
    <Section tone="canvas" id="servicios" className="scroll-mt-24">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">
              Nuestros servicios
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-canvas-foreground text-balance md:text-4xl">
              Soluciones digitales para cada etapa de{" "}
              <span className="text-brand">tu negocio.</span>
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <p className="text-sm leading-relaxed text-canvas-foreground/75 md:text-[0.95rem]">
              <span className="font-semibold text-canvas-foreground">
                Un servicio integral, modular y flexible.
              </span>{" "}
              Puedes contratar un servicio específico o una solución completa.
              Nos adaptamos a tus objetivos.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-5 border-brand text-brand hover:bg-brand/10"
            >
              <Link href="/contacto">
                Conversemos tu proyecto
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.n} delay={index * 40}>
                <article className="relative aspect-square overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)]">
                  {/* Decorative art — full card, anchored bottom-right via object-* */}
                  <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="left-[20px]! object-contain object-right-bottom"
                      aria-hidden
                    />
                  </div>

                  <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                    <div className="flex items-start gap-2.5 pr-9">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-white sm:size-10"
                        style={{ backgroundColor: service.iconBg }}
                      >
                        <Icon
                          className="size-4 sm:size-5"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      <h3 className="pt-1 text-[0.9rem] font-semibold tracking-tight text-slate-900 leading-snug sm:text-[0.95rem]">
                        {service.title}
                      </h3>
                      <span className="absolute top-5 right-5 flex size-7 items-center justify-center rounded-full bg-[#e8f7fb] text-[0.65rem] font-semibold tracking-wide text-brand tabular-nums sm:top-6 sm:right-6">
                        {service.n}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[54%] text-[0.8rem] leading-relaxed text-slate-600 sm:text-sm">
                      {service.description}
                    </p>

                    <ul className="mt-3 max-w-[54%] space-y-1.5 sm:mt-4 sm:space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-1.5 text-[0.7rem] leading-none whitespace-nowrap text-slate-600 sm:gap-2 sm:text-[0.75rem]"
                        >
                          <Check
                            className="size-3.5 shrink-0 text-brand"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
                    >
                      Ver más
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
