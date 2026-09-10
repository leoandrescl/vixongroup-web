import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { nosotrosEquipo } from "@/content/nosotros";

export function NuestroEquipo() {
  return (
    <Section id="equipo" className="scroll-mt-24">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">
              {nosotrosEquipo.eyebrow}
            </Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              {nosotrosEquipo.titleBefore}{" "}
              <span className="text-[#00c8ea]">
                {nosotrosEquipo.titleAccent}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem] lg:justify-self-end lg:pb-1 lg:text-right">
              {nosotrosEquipo.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {nosotrosEquipo.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 70}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-white/10">
                <div
                  className="relative aspect-[4/5] bg-[#121821]"
                  aria-label={
                    member.photo
                      ? undefined
                      : `Espacio reservado para la foto de ${member.name}`
                  }
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgb(0_200_234_/_0.12),transparent_65%)]"
                      aria-hidden
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#00c8ea]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
