import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cog,
  ExternalLink,
  Monitor,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";

const highlights = [
  {
    icon: BarChart3,
    title: "+ Ventas",
    detail: "Crecimiento sostenido",
  },
  {
    icon: Users,
    title: "+ Participación",
    detail: "Miles de usuarios activos",
  },
  {
    icon: ShieldCheck,
    title: "+ Confianza",
    detail: "Plataforma segura y transparente",
  },
] as const;

const pillars = [
  {
    icon: Monitor,
    title: "Desarrollo web",
    detail: "Plataforma a medida con WordPress + WooCommerce",
  },
  {
    icon: Smartphone,
    title: "Experiencia de usuario",
    detail: "Diseño moderno y 100% responsive",
  },
  {
    icon: Cog,
    title: "Integraciones",
    detail: "Pasarelas de pago, automatización y gestión de sorteos",
  },
  {
    icon: BarChart3,
    title: "Resultados",
    detail: "Mayor conversión y comunidad en crecimiento",
  },
] as const;

export function FeaturedCase() {
  return (
    <Section tone="dark" className="bg-background">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Caso destacado</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Vixon <span className="text-brand">Concursos</span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-foreground md:text-xl">
              Una nueva forma de vivir grandes premios.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Desarrollamos una plataforma completa de sorteos digitales, segura
              y escalable, que conecta a miles de personas con la posibilidad de
              ganar premios increíbles.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-6">
              {highlights.map((item) => (
                <li key={item.title} className="flex flex-col gap-2">
                  <item.icon
                    className="size-[2rem] text-brand"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/portafolio/vixon">
                  Ver proyecto completo
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://vixon.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar sitio
                  <ExternalLink />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-12 grid gap-6 rounded-2xl border border-white/10 bg-surface/60 px-5 py-6 sm:grid-cols-2 sm:px-6 lg:mt-14 lg:grid-cols-4 lg:gap-0 lg:px-0 lg:py-7">
            {pillars.map((item, index) => (
              <li
                key={item.title}
                className={
                  index > 0
                    ? "flex gap-3 lg:border-l lg:border-white/10 lg:px-6"
                    : "flex gap-3 lg:px-6"
                }
              >
                <item.icon
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
