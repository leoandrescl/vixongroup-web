import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

const promises = [
  {
    icon: MessageCircle,
    label: "Primera conversación gratuita",
  },
  {
    icon: ShieldCheck,
    label: "Confidencialidad en tus ideas",
  },
  {
    icon: Zap,
    label: "Enfoque en resultados no en promesas",
  },
] as const;

const verticals = ["Tecnología", "Diseño", "Marketing", "Innovación"] as const;

export function ProjectCta() {
  return (
    <section className="relative overflow-hidden py-10 md:py-12">
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/40 p-7 shadow-[0_0_0_1px_rgb(0_163_173_/_0.15),0_0_60px_-20px_rgb(0_163_173_/_0.45)] md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <Image
                src="/home/img-hablemos_de_tu_proyecto.jpg"
                alt=""
                fill
                sizes="(max-width: 80rem) 100vw, 80rem"
                className="object-cover object-center"
                priority={false}
              />
            </div>

            <div className="mb-8 text-right lg:absolute lg:top-12 lg:right-12 lg:z-10 lg:mb-0">
              <ul className="space-y-1">
                {verticals.map((item) => (
                  <li
                    key={item}
                    className="text-[0.7rem] font-normal tracking-[0.22em] text-foreground/70 uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span
                className="mt-3 ml-auto block h-px w-10 bg-brand"
                aria-hidden
              />
            </div>

            <div className="relative grid gap-10 text-left lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,0.85fr)] lg:items-start lg:gap-12">
              <div className="max-w-xl text-left">
                <Eyebrow>Hablemos de tu proyecto</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
                  Tienes una idea.{" "}
                  <span className="text-brand">
                    Nosotros la hacemos realidad.
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
                  Cuéntanos qué quieres construir, mejorar o hacer crecer. Te
                  ayudamos a encontrar el mejor camino, sin compromiso.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-brand/50 text-foreground hover:border-brand hover:bg-brand/10"
                  >
                    <Link href="/servicios">Ver nuestros servicios</Link>
                  </Button>
                </div>
              </div>

              <div
                className="hidden h-full min-h-40 w-px self-stretch bg-linear-to-b from-transparent via-brand/55 to-transparent lg:block"
                aria-hidden
              />

              <div className="flex flex-col justify-center">
                <ul className="space-y-5">
                  {promises.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <Icon
                        className="mt-0.5 size-7 shrink-0 text-brand"
                        aria-hidden
                      />
                      <span className="text-sm font-medium leading-snug text-foreground/90 md:text-[0.95rem]">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
