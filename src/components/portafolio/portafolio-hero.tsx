import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Box,
  Cog,
  Headphones,
  Users,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const infoBlocks = [
  { icon: Box, lines: ["Proyectos", "reales"] },
  { icon: BarChart3, lines: ["Soluciones", "funcionales"] },
  { icon: Users, lines: ["Clientes en", "crecimiento"] },
  { icon: Cog, lines: ["Tecnología", "de vanguardia"] },
  { icon: Headphones, lines: ["Acompañamiento", "en todo el proceso"] },
] as const;

export function PortafolioHero() {
  return (
    <>
      <section className="relative isolate flex h-auto min-h-0 flex-col overflow-hidden md:h-[min(32rem,calc(100svh-12.5rem))] lg:h-[min(34rem,calc(100svh-12.5rem))]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portafolio/img-hero-portafolio.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_42%] max-md:object-[72%_38%]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/88 via-34% to-background/10 to-70% max-md:via-background/80 max-md:to-background/45" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-center py-8 md:py-7 lg:py-8">
          <div className="max-w-lg lg:max-w-xl">
            <Eyebrow className="hero-fade">Portafolio</Eyebrow>
            <HeroWords
              words="Trabajo en producción,"
              accent="no mockups."
              className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-3 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              Casos reales que ya están generando resultados. Plataformas,
              e-commerce, sitios corporativos, SaaS y soluciones a medida.
            </p>
            <div className="hero-fade hero-fade-3 mt-5 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#proyectos">
                  Ver nuestros proyectos
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Hablemos de tu proyecto</Link>
              </Button>
            </div>
          </div>

          <div
            className="pointer-events-none h-28 sm:h-32 md:hidden"
            aria-hidden
          />
        </Container>

        <span className="sr-only">
          Visual del hero: laptop y móvil con el dashboard de proyectos de
          Vixon Studio.
        </span>
      </section>

      <section
        className="hero-fade hero-fade-4 border-y border-white/10 bg-background"
        aria-label="Qué verás en el portafolio"
      >
        <Container className="py-5 md:py-6">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {infoBlocks.map((item, index) => (
              <li
                key={item.lines[0]}
                className={cn(
                  "flex items-center gap-3 lg:px-5",
                  index > 0 && "lg:border-l lg:border-white/10",
                  index === 0 && "lg:pl-0",
                  index === infoBlocks.length - 1 && "lg:pr-0",
                )}
              >
                <item.icon
                  className="size-[2rem] shrink-0 text-brand"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <p className="text-sm leading-snug text-foreground">
                  {item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
