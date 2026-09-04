import Image from "next/image";
import {
  FileText,
  MessageCircle,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ContactForm } from "@/components/contacto/contact-form";
import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { contactBenefits, contactHero } from "@/content/contact";

const benefitIcons: Record<(typeof contactBenefits)[number]["icon"], LucideIcon> =
  {
    message: MessageCircle,
    file: FileText,
    users: Users,
    zap: Zap,
  };

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <p
        className="pointer-events-none absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 select-none text-[0.58rem] font-medium tracking-[0.42em] text-foreground/25 uppercase [writing-mode:vertical-rl] rotate-180 lg:left-5 lg:block xl:left-8"
        aria-hidden
      >
        {contactHero.spine.join(" · ")}
      </p>

      <Container className="relative z-10 grid items-start gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-20 xl:gap-14">
        <div className="flex min-w-0 flex-col gap-8 lg:pl-8 xl:pl-12">
          <div className="hero-fade ml-auto w-full max-w-md sm:max-w-lg lg:max-w-[28rem]">
            <Eyebrow>{contactHero.eyebrow}</Eyebrow>
            <HeroWords
              words={contactHero.title}
              accent={contactHero.accent}
              className="mt-4 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-3xl lg:text-[2.35rem] lg:leading-[1.12]"
            />
            <p className="hero-fade hero-fade-2 mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              {contactHero.description}
            </p>

            <ul className="hero-fade hero-fade-3 mt-8 grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
              {contactBenefits.map((item) => {
                const Icon = benefitIcons[item.icon];
                return (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-brand/35 text-brand">
                      <Icon className="size-4" strokeWidth={1.6} aria-hidden />
                    </span>
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
          </div>

          <div className="hero-fade hero-fade-4 relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 lg:min-h-[16rem]">
            <Image
              src={contactHero.image.src}
              alt={contactHero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[50%_40%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="hero-fade hero-fade-2 w-full lg:sticky lg:top-28 lg:justify-self-end lg:max-w-lg">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
