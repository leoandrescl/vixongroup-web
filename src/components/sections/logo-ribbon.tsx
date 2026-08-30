import { Container } from "@/components/ui/container";
import { techLogos } from "@/content/site";

export function LogoRibbon() {
  const logos = [...techLogos, ...techLogos];

  return (
    <section className="overflow-hidden border-y border-black/5 bg-canvas py-8">
      <Container className="mb-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-canvas-foreground/45 uppercase">
          Stack y plataformas con las que construimos
        </p>
      </Container>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-canvas to-transparent" />
        <div className="flex w-max animate-marquee gap-12 px-6 motion-reduce:animate-none">
          {logos.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-sm font-semibold tracking-wide text-canvas-foreground/40 uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
