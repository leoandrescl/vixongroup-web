import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  tone?: "dark" | "canvas";
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "dark",
}: PageHeroProps) {
  return (
    <Section
      tone={tone}
      className={cn("pt-20 pb-16 md:pt-28 md:pb-24", tone === "canvas" && "bg-canvas")}
    >
      <Container className="max-w-3xl">
        {eyebrow ? <Eyebrow className="hero-fade">{eyebrow}</Eyebrow> : null}
        <HeroWords
          words={title}
          className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
        />
        <p
          className={cn(
            "hero-fade hero-fade-2 mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
            tone === "canvas"
              ? "text-canvas-foreground/70"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </Container>
    </Section>
  );
}
