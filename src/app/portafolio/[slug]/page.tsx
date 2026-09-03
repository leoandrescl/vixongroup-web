import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  categoryLabels,
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/content/projects";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

const showProjectGallery = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.client} — ${project.title}`,
    description: project.summary,
    path: `/portafolio/${project.slug}`,
    image: project.cover.src,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <Section className="py-0 pt-16 pb-8 md:pt-24 md:pb-8">
        <Container>
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 ease-out-expo hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            Portafolio
          </Link>
          <Eyebrow className="mt-8">
            {categoryLabels[project.category]} · {project.year}
          </Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {project.client}: {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {project.summary}
          </p>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: `${project.client}: ${project.title}`,
                description: project.summary,
                datePublished: String(project.year),
                image: project.cover.src.startsWith("http")
                  ? project.cover.src
                  : absoluteUrl(project.cover.src),
              }),
            }}
          />
          {project.liveUrl ? (
            <Button asChild variant="outline" className="mt-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver sitio
                <ExternalLink />
              </a>
            </Button>
          ) : null}
        </Container>
      </Section>

      <Section className="py-8 md:py-8">
        <Container>
          <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ViewTransition>
        </Container>
      </Section>

      <Section tone="surface" className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Stack</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold">Tecnologías implementadas</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Alcance</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold">Servicios del caso</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Desafío</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-canvas-foreground">
              El problema
            </h2>
            <p className="mt-4 leading-relaxed text-canvas-foreground/70">
              {project.challenge}
            </p>
          </div>
          <div>
            <Eyebrow>Solución</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-canvas-foreground">
              Qué implementamos
            </h2>
            <p className="mt-4 leading-relaxed text-canvas-foreground/70">
              {project.solution}
            </p>
          </div>
        </Container>
      </Section>

      {showProjectGallery && project.gallery.length > 0 ? (
        <Section>
          <Container>
            <Eyebrow>Showcase</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Galería</h2>
            <div className="mt-8 grid items-start gap-6 md:grid-cols-[1.4fr_0.7fr]">
              {project.gallery.map((image) => {
                const isMobile = image.src.includes("-mobile");
                return (
                  <div
                    key={image.src}
                    className={
                      isMobile
                        ? "relative mx-auto aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-2xl ring-1 ring-white/10"
                        : "relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10"
                    }
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top"
                      sizes={
                        isMobile
                          ? "280px"
                          : "(max-width: 768px) 100vw, 60vw"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {project.testimonial ? (
        <Section>
          <Container className="max-w-3xl">
            <blockquote className="rounded-3xl bg-surface p-8 text-xl leading-relaxed md:p-12 md:text-2xl">
              “{project.testimonial.quote}”
              <footer className="mt-6 text-base font-semibold not-italic">
                {project.testimonial.author}
                <span className="mt-1 block text-sm font-normal text-muted-foreground">
                  {project.testimonial.role}
                </span>
              </footer>
            </blockquote>
          </Container>
        </Section>
      ) : null}

      <CtaBanner
        title="¿Un resultado parecido en tu marca?"
        cta="Hablemos"
      />

      <nav
        className="border-t border-white/8 bg-surface"
        aria-label="Otros casos"
      >
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={`/portafolio/${prev.slug}`}
              className="inline-flex items-center gap-2 text-sm hover:text-brand"
            >
              <ArrowLeft className="size-4" />
              {prev.client}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/portafolio/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm hover:text-brand sm:ml-auto"
            >
              {next.client}
              <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </Container>
      </nav>
    </>
  );
}
