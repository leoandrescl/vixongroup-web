import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { dwAiBenefits } from "@/content/desarrollo-web";

export function DwAi() {
  return (
    <Section tone="canvas" className="scroll-mt-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-[#e8f7fb]">
            <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:p-10">
              <div>
                <Eyebrow className="text-[#00c8ea]">Innovación a tu favor</Eyebrow>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.2rem] lg:leading-[1.12]">
                  Inteligencia artificial aplicada a tu sitio web.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
                  Integramos soluciones de IA para mejorar la experiencia de tus
                  usuarios y optimizar procesos, siempre que aporte valor real a
                  tu negocio.
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
              </div>

              <div className="relative">
                <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden lg:max-w-none">
                  <Image
                    src="/home/img-servicios-ia.png"
                    alt="Asistente de inteligencia artificial aplicado a sitios web"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3.5 backdrop-blur-sm lg:absolute lg:right-0 lg:bottom-4 lg:mt-0 lg:max-w-[14rem] lg:flex-col lg:items-start lg:bg-white/85">
                  <p className="text-sm font-semibold leading-snug text-canvas-foreground">
                    Soluciones inteligentes para negocios reales.
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#00c8ea] text-[#041018] transition-colors hover:bg-[#00c8ea]/90"
                    aria-label="Consultar soluciones de IA"
                  >
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
