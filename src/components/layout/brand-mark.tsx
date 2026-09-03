import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-sm font-semibold tracking-[0.12em] lowercase",
        className,
      )}
    >
      <span className="text-white">vixon</span>
      <span className="text-brand">studio</span>
    </span>
  );
}
