import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { mktProjectTypes } from "@/content/marketing";

export function MktProjectTypes() {
  return (
    <Section className="scroll-mt-24 bg-[#e8f7fb] text-canvas-foreground">
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">{mktProjectTypes.eyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            {mktProjectTypes.titleBefore}{" "}
            <span className="text-[#00c8ea]">{mktProjectTypes.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-4">
          {mktProjectTypes.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_36px_-24px_rgba(15,23,42,0.28)]">
                <div className="relative aspect-16/11 overflow-hidden bg-[#dceef4]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 14vw, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.78rem] leading-relaxed text-canvas-foreground/65">
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
