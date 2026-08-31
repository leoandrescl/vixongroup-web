import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description?: string;
  href?: string;
  cta?: string;
  tone?: "light" | "dark";
};

export function CtaBanner({
  title,
  description,
  href = "/contacto",
  cta = "Agendar reunión",
  tone = "light",
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        tone === "light" ? "bg-canvas" : "bg-background",
      )}
    >
      <Container>
        <Reveal>
          <div
            className={cn(
              "flex flex-col items-start justify-between gap-8 rounded-3xl px-8 py-10 md:flex-row md:items-center md:px-12",
              tone === "light"
                ? "bg-white text-canvas-foreground shadow-sm ring-1 ring-black/5"
                : "bg-surface ring-1 ring-white/10",
            )}
          >
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {title}
              </h2>
              {description ? (
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    tone === "light"
                      ? "text-canvas-foreground/70"
                      : "text-muted-foreground",
                  )}
                >
                  {description}
                </p>
              ) : null}
            </div>
            <Button asChild size="lg">
              <Link href={href}>
                {cta}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
