import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cloud,
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
    <section className="relative overflow-hidden pt-14 pb-12 md:pt-20 md:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(0_163_173_/_0.22),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgb(0_163_173_/_0.12),transparent_65%)]" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <div>
          <Eyebrow className="hero-fade">Agencia tecnológica + Growth</Eyebrow>
          <HeroWords
            words="Tecnología que funciona. Marketing que la hace"
            accent="crecer."
            className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
          />
          <p className="hero-fade hero-fade-2 mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
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

        <div className="hero-fade hero-fade-2 relative">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
          <Image
            src="/home/hero-devices.webp"
            alt="Laptop y móvil mostrando Sorteo Seguro, un caso de e-commerce del portafolio Vixon Studio"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="hero-float relative z-10 mx-auto h-auto w-full max-w-2xl drop-shadow-[0_30px_80px_rgba(0,163,173,0.25)]"
          />
        </div>
      </Container>

      <Container className="hero-fade hero-fade-4 relative mt-12 md:mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {capabilityStrip.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 bg-background/80 px-4 py-5 backdrop-blur-sm md:px-5"
            >
              <item.icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-2 text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
          <Cloud className="size-3.5 text-brand" aria-hidden />
          Stack cloud, producto y growth listo para producción
        </p>
      </Container>
    </section>
  );
}
