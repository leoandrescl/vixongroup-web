import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { dwAiBenefits } from "@/content/desarrollo-web";

export function DwAi() {
  return (
    <Section className="scroll-mt-24 bg-[#e8f7fb] text-canvas-foreground">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(12rem,0.55fr)] lg:gap-8 xl:gap-10">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">Innovación a tu favor</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.2rem] lg:leading-[1.12]">
              Inteligencia artificial aplicada a tu sitio web.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
              Integramos soluciones de IA para mejorar la experiencia de tus
              usuarios y optimizar procesos, siempre que aporte valor real a tu
              negocio.
            </p>
            <ul className="mt-6 space-y-2.5">
              {dwAiBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-canvas-foreground/85"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#00c8ea]"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-none">
              <Image
                src="/home/img-servicios-ia.png"
                alt="Asistente de inteligencia artificial aplicado a sitios web"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-contain object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="flex flex-col justify-between gap-6 rounded-2xl bg-white/80 p-5 shadow-[0_12px_36px_-24px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:p-6 lg:min-h-[14rem]">
              <p className="text-[0.95rem] font-semibold leading-snug text-canvas-foreground">
                Soluciones inteligentes para negocios reales.
              </p>
              <Link
                href="/contacto"
                className="inline-flex size-10 items-center justify-center self-end rounded-full bg-[#00c8ea] text-[#041018] transition-colors hover:bg-[#00c8ea]/90"
                aria-label="Consultar soluciones de IA"
              >
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </aside>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
