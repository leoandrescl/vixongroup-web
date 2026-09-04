import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Settings2,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { BlogFeature, BlogFeatureIcon } from "@/content/blog";
import { cn } from "@/lib/utils";

export const blogFeatureIcons: Record<BlogFeatureIcon, LucideIcon> = {
  sparkles: Sparkles,
  users: Users,
  chart: BarChart3,
  settings: Settings2,
  target: Target,
  zap: Zap,
};

export function BlogFeatureList({
  items,
  className,
}: {
  items: BlogFeature[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-5", className)}>
      {items.map((item) => {
        const Icon = blogFeatureIcons[item.icon];
        return (
          <li key={item.title} className="flex gap-4">
            <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-brand/40">
              <Icon className="size-5 text-brand" aria-hidden />
            </span>
            <div>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
