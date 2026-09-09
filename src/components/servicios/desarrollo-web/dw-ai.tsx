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
        <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_0.5fr] lg:gap-6 xl:gap-8">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">Innovación a tu favor</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance md:text-[1.75rem] lg:text-[1.85rem] lg:leading-[1.15]">
              Inteligencia artificial aplicada a tu sitio web.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-canvas-foreground/70">
              Integramos soluciones de IA para mejorar la experiencia de tus
              usuarios y optimizar procesos, siempre que aporte valor real a tu
              negocio.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="relative mx-auto aspect-square w-full max-w-[16rem] lg:max-w-none">
              <Image
                src="/home/robot-desarrollo-web.png"
                alt="Asistente de inteligencia artificial aplicado a sitios web"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                className="object-contain object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-2.5">
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

          <Reveal delay={140}>
            <aside className="flex h-full min-h-[12rem] w-full max-w-[9.5rem] flex-col justify-between gap-6 justify-self-end rounded-2xl bg-white p-4 shadow-[0_12px_36px_-24px_rgba(15,23,42,0.25)] sm:p-5 lg:max-w-none">
              <p className="text-[0.95rem] font-semibold leading-snug text-canvas-foreground">
                Soluciones
                <br />
                inteligentes
                <br />
                para negocios
                <br />
                reales.
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
