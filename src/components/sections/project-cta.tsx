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
    <section className="relative overflow-hidden bg-[#05080f] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/home/project-cta-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_65%] opacity-45 saturate-50"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#05080f]/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_90%,rgb(0_163_173_/_0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-[#05080f] via-transparent to-[#05080f]/80" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/40 bg-[#070d16]/72 p-7 shadow-[0_0_0_1px_rgb(0_163_173_/_0.15),0_0_60px_-20px_rgb(0_163_173_/_0.45)] backdrop-blur-md md:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -top-24 left-1/3 size-72 rounded-full bg-brand/10 blur-[90px]"
              aria-hidden
            />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,0.85fr)] lg:items-center lg:gap-12">
              <div className="max-w-xl">
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

              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-stretch lg:justify-center lg:gap-10">
                <ul className="space-y-5">
                  {promises.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 size-5 shrink-0 text-brand"
                        aria-hidden
                      />
                      <span className="text-sm font-medium leading-snug text-foreground/90 md:text-[0.95rem]">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="shrink-0 sm:text-right lg:mt-2 lg:self-end lg:text-right">
                  <ul className="space-y-1.5">
                    {verticals.map((item) => (
                      <li
                        key={item}
                        className="text-[0.7rem] font-semibold tracking-[0.22em] text-foreground/75 uppercase"
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
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
