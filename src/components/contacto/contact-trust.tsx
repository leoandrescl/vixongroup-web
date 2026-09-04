import {
  BarChart3,
  Clock,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { contactTrust } from "@/content/contact";

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
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {contactTrust.map((item) => {
            const Icon = trustIcons[item.icon];
            return (
              <li key={item.title} className="flex gap-3">
                <Icon
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.body}
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
