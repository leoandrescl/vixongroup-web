import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function NosotrosCtaBanner() {
  return (
    <section className="bg-canvas py-14 md:py-16">
      <Container>
        <Reveal>
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_auto] md:gap-0">
            <h2 className="max-w-sm text-2xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-3xl lg:text-[2rem] lg:leading-tight">
              ¿Quieres trabajar con nosotros?
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-canvas-foreground/70 md:border-l md:border-canvas-foreground/15 md:px-8 md:text-[0.95rem] lg:px-10">
              Conversemos sobre tu proyecto y descubramos juntos cómo podemos
              hacerlo realidad.
            </p>

            <div className="md:pl-8 lg:pl-10">
              <Button
                asChild
                size="lg"
                className="text-white hover:text-white [&_svg]:text-white"
              >
                <Link href="/contacto">
                  Hablemos de tu proyecto
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
