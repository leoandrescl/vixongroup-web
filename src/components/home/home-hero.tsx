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
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed plate — covers the whole hero width */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero-devices.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] max-md:object-[60%_30%]"
          aria-hidden
        />
        {/* Readability scrim on the copy side */}
        <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/88 via-35% to-background/20 to-70% max-lg:via-background/80 max-lg:to-background/55" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 py-10 md:py-12 lg:py-14">
        <div className="max-w-xl">
          <Eyebrow className="hero-fade">Agencia tecnológica + Growth</Eyebrow>
          <HeroWords
            words="Tecnología que funciona. Marketing que la hace"
            accent="crecer."
            className="mt-4 text-[2rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          />
          <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Diseñamos, construimos y hacemos crecer productos digitales de alto
            rendimiento — con métricas de ventas, leads y velocidad, no de
            vanidad.
          </p>
          <div className="hero-fade hero-fade-3 mt-6 flex flex-wrap gap-3">
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

        {/* Keep a bit of stage visible on small screens without stacking a second image */}
        <div className="pointer-events-none h-36 sm:h-40 md:h-28 lg:h-16" aria-hidden />

        <div className="hero-fade hero-fade-4 border-t border-white/10 pt-5">
          <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 md:divide-x md:divide-white/10">
            {capabilityStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-2.5 md:px-5 md:first:pl-0 md:last:pr-0"
              >
                <item.icon
                  className="mt-0.5 size-4 shrink-0 text-brand md:size-5"
                  aria-hidden
                />
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
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
