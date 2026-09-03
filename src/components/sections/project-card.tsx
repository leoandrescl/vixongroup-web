"use client";

import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tilt } from "@/components/motion/tilt";
import { categoryLabels, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Tilt>
      <Link
        href={`/portafolio/${project.slug}`}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl bg-background ring-1 ring-white/8 transition-[transform,box-shadow] duration-500 ease-out-expo hover:shadow-[0_24px_48px_-28px_rgb(0_163_173_/_0.45)] max-lg:hover:-translate-y-1",
          className,
        )}
      >
        <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/35 to-transparent opacity-0 transition-opacity duration-500 ease-out-expo group-hover:opacity-100" />
          </div>
        </ViewTransition>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-brand uppercase">
            {categoryLabels[project.category]}
          </p>
          <h3 className="mt-2 flex items-center justify-between gap-2 text-lg font-semibold text-white">
            {project.client}
            <ArrowUpRight className="size-4 text-muted-foreground transition-colors duration-300 ease-out-expo group-hover:text-brand" />
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/8 pt-4">
            {project.stack.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
