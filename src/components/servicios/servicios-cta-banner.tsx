import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ServiciosCtaBanner() {
  return (
    <section className="pb-5 md:pb-6">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] px-5 py-5 shadow-[0_0_50px_-28px_rgb(0_200_234_/_0.45)] sm:px-6 sm:py-5 md:rounded-[1.25rem] md:px-7">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-32deg, transparent 0 18px, rgb(0 200 234 / 0.07) 18px 19px, transparent 19px 38px)",
              }}
            />
            <div
              className="pointer-events-none absolute -top-16 right-10 size-48 rounded-full bg-[#00c8ea]/15 blur-[70px]"
              aria-hidden
            />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div className="flex min-w-0 items-start gap-3.5 sm:items-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#00c8ea]/45 bg-[#00c8ea]/10 text-[#00c8ea]">
                  <BarChart3 className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    ¿Tienes un proyecto en mente?
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Hablemos y hagámoslo realidad.
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="shrink-0 bg-[#00c8ea] text-[#041018] hover:bg-[#00c8ea]/90"
              >
                <Link href="/contacto">
                  Conversemos tu proyecto
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
