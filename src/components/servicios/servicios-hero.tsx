import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

const valueStrip = [
  {
    icon: Target,
    label: "Estrategia a medida",
    detail: "Soluciones alineadas a tus objetivos.",
  },
  {
    icon: BarChart3,
    label: "Soluciones escalables",
    detail: "Listas para crecer con tu negocio.",
  },
  {
    icon: Users,
    label: "Equipo multidisciplinario",
    detail: "Expertos en tecnología y marketing.",
  },
  {
    icon: Star,
    label: "Resultados medibles",
    detail: "Decisiones basadas en datos.",
  },
] as const;

export function ServiciosHero() {
  return (
    <section className="relative isolate flex h-auto min-h-0 flex-col overflow-hidden md:h-[min(32rem,calc(100svh-12.5rem))] lg:h-[min(34rem,calc(100svh-12.5rem))]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/img-hero-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_36%] max-md:object-[70%_32%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/88 via-34% to-background/10 to-70% max-md:via-background/80 max-md:to-background/45" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col gap-6 py-8 md:py-7 lg:py-8">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-lg lg:max-w-xl">
            <Eyebrow className="hero-fade flex items-center gap-2">
              <Zap
                className="size-3.5 shrink-0 fill-brand/40 text-brand"
                aria-hidden
              />
              Servicios
            </Eyebrow>
            <HeroWords
              words="Todo lo que tu negocio necesita para"
              accent="construir, vender y crecer."
              className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-3 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              Desarrollo, software, automatización, diseño y marketing digital
              trabajando como un solo sistema.
            </p>
            <p className="hero-fade hero-fade-2 mt-2 max-w-md text-sm leading-relaxed text-foreground/70 md:text-[0.95rem]">
              Desde una web corporativa hasta una plataforma a medida, una
              estrategia de performance o la automatización completa de
              procesos: conectamos tecnología y crecimiento en un mismo equipo.
            </p>
            <div className="hero-fade hero-fade-3 mt-5 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Cuéntanos tu proyecto
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#pilares">
                  Explorar servicios
                  <ArrowDown className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div
            className="pointer-events-none h-28 sm:h-32 md:hidden"
            aria-hidden
          />
        </div>

        <div className="hero-fade hero-fade-4 border-t border-white/10 pt-4">
          <div className="grid grid-cols-2 gap-y-3 md:grid-cols-4 md:divide-x md:divide-white/10">
            {valueStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-2 md:px-4 md:first:pl-0 md:last:pr-0"
              >
                <item.icon
                  className="mt-0.5 size-8 shrink-0 text-brand"
                  aria-hidden
                />
                <div>
                  <p className="text-[0.95rem] font-semibold tracking-[0.08em] text-brand uppercase">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[0.95rem] text-foreground/75">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <span className="sr-only">
        Hero de servicios con la misma visual del home: laptop, móvil y
        capacidades de software, e-commerce, growth y data.
      </span>
    </section>
  );
}
