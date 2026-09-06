import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Code2,
  FileSearch,
  Lightbulb,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  serviciosProcessCommitments,
  serviciosProcessSteps,
} from "@/content/servicios-process";

const stepIcons = {
  search: FileSearch,
  lightbulb: Lightbulb,
  code: Code2,
  cog: Settings,
  chart: BarChart3,
  refresh: RefreshCw,
  users: Users,
  trophy: Trophy,
} as const satisfies Record<
  (typeof serviciosProcessSteps)[number]["icon"],
  LucideIcon
>;

const commitmentIcons = {
  shield: ShieldCheck,
  users: Users,
  star: Star,
} as const satisfies Record<
  (typeof serviciosProcessCommitments)[number]["icon"],
  LucideIcon
>;

export function ServiciosProcess() {
  return (
    <Section id="proceso" className="relative isolate scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-20 left-0 size-[26rem] rounded-full bg-[#00c8ea]/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-10 bottom-40 size-[20rem] rounded-full bg-brand/8 blur-[100px]"
        aria-hidden
      />

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-12">
          <div>
            <Reveal>
              <Eyebrow className="text-[#00c8ea]">Nuestro proceso</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
                De la idea a{" "}
                <span className="text-[#00c8ea]">resultados reales.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/70 md:text-[0.95rem]">
                Un proceso claro, ágil y colaborativo para que tengas siempre
                visibilidad, control y los mejores resultados.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {serviciosProcessSteps.map((step, index) => {
                const Icon = stepIcons[step.icon];
                const showArrow = index % 4 !== 3;

                return (
                  <Reveal key={step.n} delay={index * 35}>
                    <div className="relative h-full">
                      <article className="relative flex h-full flex-col rounded-2xl border border-[#00c8ea]/25 bg-white/[0.03] p-3.5 shadow-[0_0_28px_-18px_rgb(0_200_234_/_0.55)] backdrop-blur-sm sm:p-4">
                        <div className="flex items-start justify-between gap-2">
                          <span className="flex size-7 items-center justify-center rounded-full bg-[#00c8ea]/15 text-[0.65rem] font-semibold tracking-wide text-[#00c8ea] tabular-nums">
                            {step.n}
                          </span>
                          <span className="text-[#00c8ea]">
                            <Icon
                              className="size-4"
                              strokeWidth={1.75}
                              aria-hidden
                            />
                          </span>
                        </div>
                        <h3 className="mt-3 text-[0.9rem] font-semibold tracking-tight text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[0.72rem] leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </article>

                      {showArrow ? (
                        <ArrowRight
                          className="pointer-events-none absolute top-1/2 -right-3.2 z-10 hidden size-3.5 -translate-y-1/2 text-[#00c8ea] lg:block"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={90}>
            <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden lg:mx-0 lg:max-w-none">
              <Image
                src="/home/img-nuestro_proceso.jpg"
                alt="Espacio de trabajo Vixon Studio con dashboard de resultados"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-r from-background from-0% via-background/75 via-28% to-transparent to-58%"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={110}>
          <div className="mt-12 flex flex-col gap-5 md:mt-14 lg:flex-row lg:items-center lg:gap-5">
            <div className="flex min-w-0 flex-1 flex-col gap-6 rounded-2xl border border-white/12 bg-[#070b14] px-5 py-5 sm:px-6 sm:py-6 md:rounded-[1.25rem] lg:flex-row lg:items-center lg:gap-0 lg:py-5">
              <div className="shrink-0 lg:max-w-[15.5rem] lg:pr-6 xl:max-w-[17rem] xl:pr-8">
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.22em] text-[#00c8ea] uppercase">
                  <Sparkles
                    className="size-3.5 fill-[#00c8ea]/30"
                    aria-hidden
                  />
                  Nuestro compromiso
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-tight text-balance sm:text-xl md:text-[1.45rem] md:leading-snug">
                  Más que proveedores, somos tu{" "}
                  <span className="text-[#00c8ea]">socio estratégico.</span>
                </h3>
              </div>

              <div
                className="hidden h-16 w-px shrink-0 bg-white/15 lg:block"
                aria-hidden
              />

              <ul className="grid flex-1 gap-5 border-white/10 sm:grid-cols-3 sm:gap-4 lg:gap-5 lg:border-l-0 lg:pl-6 xl:pl-8">
                {serviciosProcessCommitments.map((item) => {
                  const Icon = commitmentIcons[item.icon];
                  return (
                    <li key={item.title} className="flex gap-3">
                      <Icon
                        className="mt-0.5 size-5 shrink-0 text-[#00c8ea]"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="shrink-0 lg:pl-1 lg:text-center">
              <Button
                asChild
                className="w-full bg-[#00c8ea] text-[#041018] hover:bg-[#00c8ea]/90 lg:w-auto"
              >
                <Link href="/contacto">
                  Conversemos tu proyecto
                  <ArrowRight />
                </Link>
              </Button>
              <p className="mt-2.5 text-center text-[0.72rem] text-muted-foreground">
                Primera reunión gratuita y sin compromiso.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
