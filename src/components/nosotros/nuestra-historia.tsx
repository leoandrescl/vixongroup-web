import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";

export function NuestraHistoria() {
  return (
    <Section id="historia" tone="canvas" className="scroll-mt-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <Reveal>
          <Eyebrow>Nuestra historia</Eyebrow>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.55rem] lg:leading-[1.15]">
            De una idea a un{" "}
            <span className="text-brand">impacto real.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-canvas-foreground/65 md:text-[0.95rem]">
            Vixon nace con la convicción de que la tecnología y el marketing
            deben estar al servicio de las personas y de sus ideas. Comenzamos
            como un equipo apasionado por el desarrollo digital y hoy somos una
            agencia que acompaña a empresas de distintos rubros a crecer,
            innovar y destacar en un mundo cada vez más competitivo.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#manifiesto">
              Conoce nuestra historia
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={90} className="relative">
          <div className="relative">
            {/* Slot de imagen — reemplazar cuando esté el asset */}
            <div
              className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#e8eef2] shadow-[0_24px_60px_-28px_rgb(0_163_173_/_0.45)] ring-1 ring-brand/15"
              aria-label="Espacio reservado para la imagen de Nuestra historia"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgb(0_163_173_/_0.12),transparent_60%)]"
                aria-hidden
              />
            </div>

            <aside className="absolute top-4 right-4 z-10 w-[min(100%,13.5rem)] rounded-2xl bg-[#0b0f19] p-4 shadow-[0_18px_40px_-18px_rgb(0_0_0_/_0.55)] ring-1 ring-white/10 sm:top-5 sm:right-5 sm:p-5">
              <Lightbulb
                className="size-6 text-brand"
                strokeWidth={1.6}
                aria-hidden
              />
              <p className="mt-3 text-sm leading-snug font-medium text-white">
                Grandes proyectos comienzan con grandes ideas.
              </p>
              <span
                className="mt-4 block h-0.5 w-10 rounded-full bg-brand"
                aria-hidden
              />
            </aside>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
