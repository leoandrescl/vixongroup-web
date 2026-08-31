import { cn } from "@/lib/utils";

export function HeroWords({
  words,
  accent,
  className,
}: {
  words: string;
  accent?: string;
  className?: string;
}) {
  const parts = words.trim().split(/\s+/);

  return (
    <h1 className={cn("text-balance", className)}>
      {parts.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="hero-word"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          {word}
        </span>
      ))}
      {accent ? (
        <span
          className="hero-word text-brand"
          style={{ animationDelay: `${parts.length * 40}ms` }}
        >
          {accent}
        </span>
      ) : null}
    </h1>
  );
}
