import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  tone?: "dark" | "canvas" | "surface";
};

export function Section({
  className,
  tone = "dark",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-12 md:py-16",
        tone === "canvas" && "bg-canvas text-canvas-foreground",
        tone === "surface" && "bg-surface",
        className,
      )}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.22em] text-brand uppercase",
        className,
      )}
      {...props}
    />
  );
}
