import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Play,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

const capabilityStrip = [
  {
    icon: Code2,
    label: "Software",
    detail: "Desarrollo a medida",
  },
  {
    icon: ShoppingCart,
    label: "E-commerce",
    detail: "Venta & conversión",
  },
  {
    icon: TrendingUp,
    label: "Growth",
    detail: "Performance marketing",
  },
  {
    icon: BarChart3,
    label: "Data",
    detail: "Medición & optimización",
  },
] as const;

export function HomeHero() {
  return (
    <section className="relative isolate flex h-auto min-h-0 flex-col overflow-hidden md:h-[min(32rem,calc(100svh-12.5rem))] lg:h-[min(34rem,calc(100svh-12.5rem))]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero-devices.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_42%] max-md:object-[55%_28%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/90 via-32% to-background/15 to-68% max-md:via-background/85 max-md:to-background/50" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-between gap-6 py-8 md:py-7 lg:py-8">
        <div className="max-w-lg lg:max-w-xl">
          <Eyebrow className="hero-fade">Agencia tecnológica + Growth</Eyebrow>
          <HeroWords
            words="Tecnología que funciona. Marketing que la hace"
            accent="crecer."
            className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
          />
          <p className="hero-fade hero-fade-2 mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            Diseñamos, construimos y hacemos crecer productos digitales de alto
            rendimiento — con métricas de ventas, leads y velocidad, no de
            vanidad.
          </p>
          <div className="hero-fade hero-fade-3 mt-5 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contacto">
                Hablemos de tu proyecto
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portafolio">
                <Play className="size-4 fill-current" />
                Ver proyectos
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile only: short stage peek so devices remain visible */}
        <div className="pointer-events-none h-28 sm:h-32 md:hidden" aria-hidden />

        <div className="hero-fade hero-fade-4 border-t border-white/10 pt-4">
          <div className="grid grid-cols-2 gap-y-3 md:grid-cols-4 md:divide-x md:divide-white/10">
            {capabilityStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-2 md:px-4 md:first:pl-0 md:last:pr-0"
              >
                <item.icon
                  className="mt-0.5 size-4 shrink-0 text-brand"
                  aria-hidden
                />
                <div>
                  <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <span className="sr-only">
        Visual del hero: laptop y móvil mostrando Sorteo Seguro, caso del
        portafolio Vixon Studio.
      </span>
    </section>
  );
}
