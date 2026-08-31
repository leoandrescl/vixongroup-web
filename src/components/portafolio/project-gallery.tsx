"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
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
      <div
        className="flex flex-wrap gap-2"
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
