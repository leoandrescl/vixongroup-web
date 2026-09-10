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
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">{nosotrosIa.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              {nosotrosIa.titleBefore}{" "}
              <span className="text-[#00c8ea]">{nosotrosIa.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-sm leading-relaxed text-canvas-foreground/65 md:text-[0.95rem] lg:justify-self-end lg:pb-1 lg:text-right">
              {nosotrosIa.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {nosotrosIa.specialists.map((specialist, index) => (
            <Reveal
              key={`${specialist.role}-${index}`}
              delay={index * 70}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f4fbfd] ring-1 ring-[#00c8ea]/10">
                <div
                  className="relative aspect-[4/5] bg-[#dceef4]"
                  aria-label={`Espacio reservado para la imagen de ${specialist.role}`}
                >
                  {specialist.photo ? (
                    <Image
                      src={specialist.photo}
                      alt={specialist.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgb(0_200_234_/_0.18),transparent_65%)]"
                      aria-hidden
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
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

          <Reveal delay={160}>
            <aside className="flex h-full min-h-[18rem] flex-col justify-center gap-5 rounded-2xl bg-[#0b0f19] p-6 text-white sm:p-7 lg:min-h-0">
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
