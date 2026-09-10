import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { nosotrosIa } from "@/content/nosotros";

export function EspecialistasIa() {
  return (
    <Section
      id="especialistas-ia"
      className="scroll-mt-24 bg-white text-canvas-foreground"
    >
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,0.8fr)] lg:items-stretch lg:gap-5 xl:gap-6">
          <Reveal className="lg:pr-2">
            <Eyebrow className="text-[#00c8ea]">{nosotrosIa.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.15rem] lg:leading-[1.12] xl:text-[2.35rem]">
              {nosotrosIa.titleBefore}{" "}
              <span className="text-[#00c8ea]">{nosotrosIa.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-canvas-foreground/65 md:text-[0.95rem]">
              {nosotrosIa.description}
            </p>
          </Reveal>

          {nosotrosIa.specialists.map((specialist, index) => (
            <Reveal
              key={`${specialist.role}-${index}`}
              delay={(index + 1) * 60}
              className="h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/6 shadow-[0_10px_36px_-24px_rgba(15,23,42,0.28)]">
                <div
                  className="relative aspect-[4/5] shrink-0 bg-[#e8eef2]"
                  aria-label={`Espacio reservado para la imagen de ${specialist.role}`}
                >
                  {specialist.photo ? (
                    <Image
                      src={specialist.photo}
                      alt={specialist.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgb(0_200_234_/_0.16),transparent_65%)]"
                      aria-hidden
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {specialist.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#00c8ea]">
                    {specialist.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-canvas-foreground/65">
                    {specialist.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={200} className="h-full">
            <aside className="flex h-full flex-col justify-center gap-5 rounded-2xl bg-[#0b0f19] p-6 text-white sm:p-7">
              {nosotrosIa.note.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-white/85 md:text-[0.95rem]"
                >
                  {paragraph}
                </p>
              ))}
            </aside>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
