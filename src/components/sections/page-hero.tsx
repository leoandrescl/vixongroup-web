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
      className={cn("pb-16 pt-20 md:pb-24 md:pt-28", tone === "canvas" && "bg-canvas")}
    >
      <Container className="max-w-3xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
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
