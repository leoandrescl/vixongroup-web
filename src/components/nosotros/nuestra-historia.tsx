import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { nosotrosHistoria } from "@/content/nosotros";

export function NuestraHistoria() {
  return (
    <Section
      id="historia"
      className="scroll-mt-24 bg-white text-canvas-foreground"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">
              {nosotrosHistoria.eyebrow}
            </Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              {nosotrosHistoria.titleBefore}{" "}
              <span className="text-[#00c8ea]">
                {nosotrosHistoria.titleAccent}
              </span>
            </h2>
            <div className="mt-5 max-w-lg space-y-4 text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
              {nosotrosHistoria.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#e8eef2] ring-1 ring-[#00c8ea]/15">
              <Image
                src={nosotrosHistoria.image}
                alt="Nuestra historia y propósito en ViXon Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
