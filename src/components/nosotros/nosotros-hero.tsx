import Image from "next/image";
import {
  ChartNoAxesCombined,
  Target,
  Users,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const infoBlocks = [
  { icon: Target, label: "Ideas con propósito" },
  { icon: Users, label: "Equipos que suman" },
  { icon: ChartNoAxesCombined, label: "Resultados que crecen" },
] as const;

export function NosotrosHero() {
  return (
    <>
      <section className="relative isolate flex h-auto min-h-0 flex-col overflow-hidden md:h-[min(32rem,calc(100svh-12.5rem))] lg:h-[min(34rem,calc(100svh-12.5rem))]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portafolio/img-hero-portafolio.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_42%] max-md:object-[72%_38%]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/88 via-34% to-background/10 to-70% max-md:via-background/80 max-md:to-background/45" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-center py-8 md:py-7 lg:py-8">
          <div className="max-w-lg lg:max-w-xl">
            <Eyebrow className="hero-fade">Nosotros</Eyebrow>
            <HeroWords
              words="Más que una agencia, somos tu"
              accent="socio estratégico."
              className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-3 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              En Vixon combinamos tecnología, diseño y marketing digital para
              crear soluciones que impulsan negocios reales. Creemos en la
              cercanía, el compromiso y en el poder de las ideas bien
              ejecutadas.
            </p>
          </div>

          <div
            className="pointer-events-none h-28 sm:h-32 md:hidden"
            aria-hidden
          />
        </Container>

        <span className="sr-only">
          Visual del hero: espacio de trabajo de Vixon Group.
        </span>
      </section>

      <section
        className="hero-fade hero-fade-4 border-y border-white/10 bg-background"
        aria-label="Pilares de Vixon Group"
      >
        <Container className="py-5 md:py-6">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
            {infoBlocks.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "flex items-center gap-3 sm:px-6 lg:px-8",
                  index > 0 && "sm:border-l sm:border-white/10",
                  index === 0 && "sm:pl-0",
                  index === infoBlocks.length - 1 && "sm:pr-0",
                )}
              >
                <item.icon
                  className="size-[2rem] shrink-0 text-brand"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <p className="text-sm leading-snug text-foreground">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
