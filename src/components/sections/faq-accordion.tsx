"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
  tone = "dark",
}: {
  items: FaqItem[];
  tone?: "dark" | "light";
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger className="text-base hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "leading-relaxed",
              tone === "light"
                ? "text-canvas-foreground/70"
                : "text-muted-foreground",
            )}
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
