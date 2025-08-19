// components/home/project-highlight.tsx

import ProjectCard from "@/components/projects/project-card";

// Exemplo de projetos destacados
const projects = [
  {
    title: "Weather App",
    description: "Weather forecast using React + Tailwind, API Integration.",
    tags: ["React", "Tailwind", "API"],
    image: "/images/weather-app.png",
    repo: "https://github.com/laranjeirapedro/weather-app",
  },
  {
    title: "To-Do List",
    description: "Full-stack to-do list, Next.js + MongoDB CRUD.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    image: "/images/todo-app.png",
    repo: "https://github.com/laranjeirapedro/todo-list",
  },
];

export default function ProjectHighlight() {
  return (
    <section className="w-full py-8">
      <h2 className="text-2xl font-bold mb-4">Highlighted Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}