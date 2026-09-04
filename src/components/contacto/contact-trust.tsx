import {
  BarChart3,
  Clock,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { contactTrust } from "@/content/contact";
import { cn } from "@/lib/utils";

const trustIcons: Record<(typeof contactTrust)[number]["icon"], LucideIcon> = {
  shield: Shield,
  clock: Clock,
  chart: BarChart3,
  users: Users,
};

export function ContactTrustBar() {
  return (
    <section className="border-y border-white/8 bg-footer">
      <Container className="py-10 md:py-12">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {contactTrust.map((item, index) => {
            const Icon = trustIcons[item.icon];
            return (
              <li
                key={item.title}
                className={cn(
                  "flex gap-4 lg:px-6",
                  index > 0 && "lg:border-l lg:border-white/12",
                  index === 0 && "lg:pl-0",
                  index === contactTrust.length - 1 && "lg:pr-0",
                )}
              >
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-brand/40 text-brand">
                  <Icon className="size-[2rem]" strokeWidth={1.5} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-[1.45] text-muted-foreground">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
