import { techLogos } from "@/content/tech-logos";

export function LogoRibbon() {
  const logos = [...techLogos, ...techLogos];

  return (
    <section className="overflow-hidden border-y border-black/5 bg-canvas py-10">
      <div className="mb-6 px-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-canvas-foreground/45 uppercase">
          Stack y plataformas con las que construimos
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-canvas to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-14 px-6 motion-reduce:animate-none">
          {logos.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-canvas-foreground/45"
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
