import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export default function ProjectHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-4">
      <h2 className="text-xl md:text-4xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-700 text-white text-center font-bold mb-4 border-blue rounded-full py-2">Highlighted Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.slice(0, 2).map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
