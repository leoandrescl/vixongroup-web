import { Container } from "@/components/ui/container";
import { techLogos } from "@/content/tech-logos";

export function LogoRibbon() {
  const logos = [...techLogos, ...techLogos];

  return (
    <section className="pt-2 pb-4 md:pt-3 md:pb-5">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] py-5 shadow-[0_0_40px_-20px_rgb(0_163_173_/_0.35)] backdrop-blur-md md:rounded-3xl md:py-6">
          <p className="mb-4 px-5 text-center text-[0.65rem] font-semibold tracking-[0.2em] text-brand uppercase">
            Tecnología que usamos todos los días
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent md:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent md:w-16" />
            <div className="flex w-max animate-marquee items-center gap-12 px-6 motion-reduce:animate-none md:gap-14">
              {logos.map((logo, index) => (
                <span
                  key={`${logo.name}-${index}`}
                  className="flex shrink-0 items-center gap-2.5 text-foreground/50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-7 fill-current"
                    aria-hidden
                  >
                    <path d={logo.path} />
                  </svg>
                  <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                    {logo.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
