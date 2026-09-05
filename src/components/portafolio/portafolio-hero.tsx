import Image from "next/image";
import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

export function PortafolioHero() {
  return (
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
          <Eyebrow className="hero-fade">Portafolio</Eyebrow>
          <HeroWords
            words="Trabajo en producción, no mockups."
            className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
          />
          <p className="hero-fade hero-fade-2 mt-3 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
            Casos que se pueden abrir en el navegador: SaaS, e-commerce, sitios
            a medida y paneles B2B. Filtra y entra al detalle.
          </p>
        </div>

        <div
          className="pointer-events-none h-28 sm:h-32 md:hidden"
          aria-hidden
        />
      </Container>

      <span className="sr-only">
        Visual del hero: laptop y móvil con el dashboard de proyectos de Vixon
        Studio.
      </span>
    </section>
  );
}
