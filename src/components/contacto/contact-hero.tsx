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
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={contactHero.background}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_40%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/78" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/88 to-background/45" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />
      </div>

      <p
        className="pointer-events-none absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 select-none text-[0.58rem] font-medium tracking-[0.42em] text-foreground/25 uppercase [writing-mode:vertical-rl] rotate-180 lg:left-5 lg:block xl:left-8"
        aria-hidden
      >
        {contactHero.spine.join(" · ")}
      </p>

      <Container className="relative z-10 grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:py-24 xl:gap-16">
        <div className="max-w-xl lg:pl-6 xl:pl-10">
          <Eyebrow className="hero-fade">{contactHero.eyebrow}</Eyebrow>
          <HeroWords
            words={contactHero.title}
            accent={contactHero.accent}
            className="mt-4 text-[2rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
          />
          <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            {contactHero.description}
          </p>

          <ul className="hero-fade hero-fade-3 mt-10 grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
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

        <div className="hero-fade hero-fade-2 lg:justify-self-end lg:w-full lg:max-w-lg">
          <ContactForm />
        </div>
      </Container>

      <span className="sr-only">
        Fondo del hero de contacto: oficina contemporánea con luz tenue.
      </span>
    </section>
  );
}
