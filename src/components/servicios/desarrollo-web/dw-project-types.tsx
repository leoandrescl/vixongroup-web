import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { dwProjectTypes } from "@/content/desarrollo-web";

export function DwProjectTypes() {
  return (
    <Section className="scroll-mt-24">
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">Tipos de proyectos</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            Soluciones para{" "}
            <span className="text-[#00c8ea]">cada necesidad.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {dwProjectTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-4/3 overflow-hidden bg-[#0a121c]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.78rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex size-9 items-center justify-center rounded-full bg-[#00c8ea] text-[#041018] transition-colors hover:bg-[#00c8ea]/90"
                    aria-label={`Consultar sobre ${item.title}`}
                  >
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
