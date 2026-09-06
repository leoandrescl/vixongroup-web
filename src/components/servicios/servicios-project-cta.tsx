import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const promises = [
  { icon: Zap, label: "Respuesta rápida" },
  { icon: Users, label: "Asesoría personalizada" },
  { icon: BarChart3, label: "Soluciones escalables" },
] as const;

export function ServiciosProjectCta() {
  return (
    <section className="pb-10 md:pb-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[#00c8ea]/35 bg-[#070b14] shadow-[0_0_0_1px_rgb(0_200_234_/_0.12),0_0_50px_-20px_rgb(0_200_234_/_0.4)] md:rounded-[1.25rem]">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <Image
                src="/home/img-hablemos_de_tu_proyecto.jpg"
                alt=""
                fill
                sizes="(max-width: 80rem) 100vw, 80rem"
                className="object-cover object-[78%_45%] opacity-55"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#070b14] from-0% via-[#070b14]/92 via-42% to-[#070b14]/35 to-78%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#070b14]/50 via-transparent to-[#070b14]/20" />
            </div>

            <div className="relative flex flex-col gap-8 px-5 py-7 sm:px-6 sm:py-8 md:px-7 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
              <div className="min-w-0 shrink-0 lg:max-w-[18rem] xl:max-w-[20rem]">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#00c8ea] uppercase">
                  Hablemos de tu proyecto
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-[1.65rem] sm:leading-snug">
                  ¿Listo para llevar tu idea{" "}
                  <span className="text-[#00c8ea]">al siguiente nivel?</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  Cuéntanos tu proyecto y te asesoraremos sin compromiso para
                  encontrar la mejor solución.
                </p>
              </div>

              <div
                className="hidden h-20 w-px shrink-0 bg-white/15 lg:block"
                aria-hidden
              />

              <ul className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-5">
                {promises.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2 sm:text-center"
                  >
                    <Icon
                      className="size-7 shrink-0 text-[#00c8ea]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-foreground/90">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="shrink-0 lg:text-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#00c8ea] text-[#041018] hover:bg-[#00c8ea]/90 lg:w-auto"
                >
                  <Link href="/contacto">
                    Conversemos tu proyecto
                    <ArrowRight />
                  </Link>
                </Button>
                <p className="mt-2.5 text-center text-[0.72rem] text-muted-foreground">
                  Primera reunión gratuita y sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
