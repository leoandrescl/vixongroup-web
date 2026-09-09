"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { analiticaFaqs } from "@/content/analitica";
import { cn } from "@/lib/utils";

export function AnFaq() {
  const left = analiticaFaqs.slice(0, 3);
  const right = analiticaFaqs.slice(3);

  return (
    <Section className="scroll-mt-24 bg-white text-canvas-foreground">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Resolvemos tus dudas.
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <p className="text-sm leading-relaxed whitespace-nowrap text-canvas-foreground/65 sm:text-right">
              Si tienes otra consulta,{" "}
              <Link
                href="/contacto"
                className="font-semibold text-[#00c8ea] hover:underline"
              >
                escríbenos
              </Link>{" "}
              y te ayudamos.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {[left, right].map((column, colIndex) => (
            <Reveal key={colIndex} delay={colIndex * 50}>
              <Accordion type="single" collapsible className="flex flex-col gap-3">
                {column.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`an-faq-${colIndex}-${index}`}
                    className="overflow-hidden rounded-2xl border border-[#00c8ea]/35 border-b-[#00c8ea]/35 bg-white last:border-b"
                  >
                    <AccordionTrigger
                      className={cn(
                        "gap-4 px-4 py-4 text-[0.95rem] font-medium text-canvas-foreground hover:bg-transparent hover:text-[#00c8ea] hover:no-underline sm:px-5",
                        "**:data-[slot=accordion-trigger-icon]:hidden",
                      )}
                    >
                      <span className="flex min-w-0 flex-1 items-center justify-between gap-4 text-left">
                        <span className="leading-snug">{item.question}</span>
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#00c8ea]/45 bg-white text-[#00c8ea] transition-transform group-aria-expanded/accordion-trigger:rotate-45">
                          <Plus className="size-4" strokeWidth={2.25} aria-hidden />
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-[0.9375rem] leading-relaxed text-canvas-foreground/65 sm:px-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
