import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Megaphone,
  Play,
  ShoppingCart,
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
    icon: Megaphone,
    label: "Growth",
    detail: "Performance Marketing",
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
          src="/home/hero-banner.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_50%] max-md:object-[70%_45%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/88 via-34% to-background/10 to-70% max-md:via-background/80 max-md:to-background/45" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-between gap-6 py-8 md:py-7 lg:py-8">
        <div className="max-w-lg lg:max-w-xl">
          <Eyebrow className="hero-fade flex items-center gap-2">
            <span
              className="size-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_10px_rgb(0_163_173_/_0.8)]"
              aria-hidden
            />
            Agencia tecnológica + Growth
          </Eyebrow>
          <HeroWords
            words="Tecnología que funciona. Marketing que la hace"
            accent="crecer."
            className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
          />
          <p className="hero-fade hero-fade-2 mt-3 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
            Diseñamos, desarrollamos y hacemos crecer productos digitales.
            Unimos tecnología, diseño y marketing para convertir ideas en
            negocios digitales que funcionan.
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
                  <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-brand uppercase">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] text-foreground/75">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <span className="sr-only">
        Visual del hero: laptop y móvil con tarjetas de desarrollo, e-commerce,
        ads, analytics y cloud.
      </span>
    </section>
  );
}
