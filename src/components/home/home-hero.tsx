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
    <section className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute top-[-20%] right-[-8%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(0_163_173_/_0.22),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[40%] w-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(37_99_235_/_0.12),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col gap-8 py-8 md:gap-9 md:py-10 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6 xl:gap-10">
          <div className="max-w-xl">
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
              className="mt-4 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              Diseñamos, desarrollamos y hacemos crecer productos digitales.
              Unimos tecnología, diseño y marketing para convertir ideas en
              negocios digitales que funcionan.
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

          <div className="hero-fade hero-fade-2 relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(0_163_173_/_0.28),transparent_70%)] blur-3xl"
              aria-hidden
            />
            <div className="relative aspect-3/2 w-full">
              <Image
                src="/home/hero-devices.webp"
                alt="Laptop y móvil con producto digital Vixon, rodeados de métricas de desarrollo, e-commerce, ads, analytics y cloud."
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 48vw"
                className="object-contain object-center drop-shadow-[0_30px_60px_rgb(0_163_173_/_0.18)]"
              />
            </div>
          </div>
        </div>

        <div className="hero-fade hero-fade-4 border-t border-white/10 pt-5">
          <div className="grid grid-cols-2 gap-y-4 sm:gap-y-3 md:grid-cols-4 md:divide-x md:divide-white/10">
            {capabilityStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-2.5 md:px-5 md:first:pl-0 md:last:pr-0"
              >
                <item.icon
                  className="mt-0.5 size-4 shrink-0 text-brand"
                  aria-hidden
                />
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-brand uppercase">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[0.75rem] text-foreground/75">
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
