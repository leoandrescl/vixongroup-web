import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { nosotrosCta } from "@/content/nosotros";

export function NosotrosCtaBanner() {
  return (
    <section className="pb-10 md:pb-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[#00c8ea]/35 bg-[#070b14] shadow-[0_0_0_1px_rgb(0_200_234_/_0.12),0_0_50px_-20px_rgb(0_200_234_/_0.4)] md:rounded-[1.25rem]">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <Image
                src="/home/img-hablemos_de_tu_proyecto.jpg"
                alt=""
                fill
                sizes="(max-width: 80rem) 100vw, 80rem"
                className="object-cover object-[78%_45%] opacity-55"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#070b14] from-0% via-[#070b14]/90 via-45% to-[#070b14]/40 to-80%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#070b14]/55 via-transparent to-[#070b14]/25" />
            </div>

            <div className="relative flex flex-col gap-8 px-5 py-8 sm:px-6 sm:py-9 md:px-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-[1.85rem] sm:leading-snug md:text-[2.15rem]">
                  {nosotrosCta.titleBefore}{" "}
                  <span className="text-[#00c8ea]">
                    {nosotrosCta.titleAccent}
                  </span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                  {nosotrosCta.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-[#00c8ea] text-[#041018] hover:bg-[#00c8ea]/90"
                >
                  <Link href="/contacto">
                    {nosotrosCta.cta}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              <p className="max-w-[16rem] text-right text-[0.7rem] font-semibold tracking-[0.22em] text-white/80 uppercase lg:pb-1">
                {nosotrosCta.quote}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
