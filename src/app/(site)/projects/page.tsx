"use client";

import { useState } from "react";
import ProjectFilter from "@/components/projects/project-filter";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filtered, setFiltered] = useState(projects);
  return (
    <section>
      <ProjectFilter projects={projects} onFilter={setFiltered} />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 p-10">
        {filtered.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
