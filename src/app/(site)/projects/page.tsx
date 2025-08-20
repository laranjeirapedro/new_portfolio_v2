import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 p-10">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}
