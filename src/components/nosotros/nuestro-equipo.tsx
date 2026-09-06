import Image from "next/image";
import { LinkedInIcon } from "@/components/icons/social";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { team } from "@/content/team";

export function NuestroEquipo() {
  return (
    <Section id="equipo" className="scroll-mt-24">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <Reveal>
            <Eyebrow>Nuestro equipo</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
              Talento que{" "}
              <span className="text-brand">hace la diferencia.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem] lg:justify-self-end lg:pb-1 lg:text-right">
              Un equipo multidisciplinario, creativo y comprometido, que
              trabaja para llevar cada proyecto al siguiente nivel.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 70}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-white/10 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.photo.src}
                    alt={member.photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-foreground/90 transition-colors duration-300 ease-out-expo hover:text-brand"
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
