import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <Section>
      <Container>
        <Reveal>
          <Eyebrow>Casos destacados</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Proyectos que se pueden abrir.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portafolio">
                Ver todos los proyectos
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
