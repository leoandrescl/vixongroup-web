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
            <Button asChild variant="outline" className="mt-5 border-brand text-brand hover:bg-brand/10">
              <Link href="/contacto">
                Conversemos tu proyecto
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {serviceCatalog.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.n} delay={index * 40}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/6 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] sm:p-6">
                  <div className="relative z-10 flex items-start gap-3 pr-10">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: service.iconBg }}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="pt-1.5 text-[0.95rem] font-semibold tracking-tight text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <span className="absolute top-0 right-0 rounded-full bg-[#e8f7fb] px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-brand tabular-nums">
                      {service.n}
                    </span>
                  </div>

                  <p className="relative z-10 mt-3 max-w-[58%] text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="relative z-10 mt-4 max-w-[58%] space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-[0.8rem] leading-snug text-slate-600"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-brand"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
                  >
                    Ver más
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <div className="pointer-events-none absolute inset-y-3 right-0 w-[46%] sm:inset-y-4 sm:w-[48%]">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 200px, (min-width: 640px) 40vw, 45vw"
                      className="object-contain object-right-bottom"
                      aria-hidden
                    />
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
