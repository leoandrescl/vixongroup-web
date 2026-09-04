import { techLogos } from "@/content/tech-logos";

export function LogoRibbon() {
  const logos = [...techLogos, ...techLogos];

  return (
    <section className="overflow-hidden border-y border-white/8 bg-background/80 py-8 backdrop-blur-sm">
      <div className="mb-5 px-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand/80 uppercase">
          Tecnología que usamos todos los días
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-14 px-6 motion-reduce:animate-none">
          {logos.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-foreground/45"
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
    </section>
  );
}
