"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import {
  categoryLabels,
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/content/projects";

const usedCategories = projectCategories.filter((id) =>
  projects.some((project) => project.category === id),
);

const filters: Array<{ id: "all" | ProjectCategory; label: string }> = [
  { id: "all", label: "Todos" },
  ...usedCategories.map((id) => ({ id, label: categoryLabels[id] })),
];

export function ProjectGallery() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <Reveal className="max-w-xl">
          <Eyebrow>Nuestros proyectos</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Explora <span className="text-brand">nuestro trabajo.</span>
          </h2>
        </Reveal>

        <div
          className="flex max-w-full flex-wrap gap-2 lg:justify-end"
          role="group"
          aria-label="Filtrar por categoría"
        >
          {filters.map((item) => (
            <Button
              key={item.id}
              type="button"
              size="sm"
              variant={filter === item.id ? "default" : "outline"}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={index * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
