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
    <section className="relative isolate overflow-hidden lg:min-h-[min(56rem,calc(100svh-4rem))]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgb(0_163_173_/_0.3),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgb(0_163_173_/_0.1),transparent_42%)]" />

      {/* Desktop: visual stage pinned to the right, bleeding past the content column */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[64%] lg:block">
        <div className="absolute top-[18%] right-[4%] h-[70%] w-[80%] rounded-full bg-brand/25 blur-[90px]" />
        <Image
          src="/home/hero-devices.webp"
          alt=""
          fill
          priority
          sizes="64vw"
          className="hero-float object-contain object-right scale-[1.12]"
          aria-hidden
        />
        <div className="absolute inset-y-0 left-0 w-[28%] bg-linear-to-r from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[48%] bg-linear-to-r from-background via-background/95 to-transparent lg:block" />

      <Container className="relative z-[2] flex flex-col pt-14 pb-10 md:pt-16 md:pb-12 lg:min-h-[min(56rem,calc(100svh-4rem))] lg:pt-20">
        <div className="flex flex-1 flex-col justify-center lg:max-w-[36rem] xl:max-w-[40rem]">
          <Eyebrow className="hero-fade">Agencia tecnológica + Growth</Eyebrow>
          <HeroWords
            words="Tecnología que funciona. Marketing que la hace"
            accent="crecer."
            className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]"
          />
          <p className="hero-fade hero-fade-2 mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Diseñamos, construimos y hacemos crecer productos digitales de alto
            rendimiento — con métricas de ventas, leads y velocidad, no de
            vanidad.
          </p>
          <div className="hero-fade hero-fade-3 mt-8 flex flex-wrap gap-3">
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

        {/* Mobile/tablet: stage under the copy, still edge-to-edge within the hero */}
        <div className="hero-fade hero-fade-2 relative mt-10 -mx-5 aspect-[4/3] sm:-mx-6 lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_163_173_/_0.35),transparent_60%)]" />
          <Image
            src="/home/hero-devices.webp"
            alt="Laptop y móvil mostrando Sorteo Seguro, caso del portafolio Vixon Studio"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>

        <div className="hero-fade hero-fade-4 mt-8 border-t border-white/10 pt-2 md:mt-10 lg:mt-auto lg:pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/10">
            {capabilityStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 px-1 py-4 md:px-5 md:first:pl-0 md:last:pr-0"
              >
                <item.icon
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  aria-hidden
                />
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
