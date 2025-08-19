import ProjectCard from "@/components/projects/project-card";

const projects = [
  {
    title: "Weather App",
    description: "Weather forecast using React + Tailwind, API Integration.",
    tags: ["React", "Tailwind", "API"],
    image: "/images/weather-app.webp",
    repo: "https://github.com/laranjeirapedro/weather-app",
  },
    {
    title: "Old Portfolio",
    description: "Personal portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS.",
    tags: ["React", "Tailwind", "TypeScript"],
    image: "/images/old-portfolio.webp",
    repo: "https://github.com/laranjeirapedro/new_portfolio",
  },
  {
    title: "To-Do List",
    description: "Full-stack to-do list, Next.js + MongoDB CRUD.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    image: "/images/todo-app.webp",
    repo: "https://github.com/laranjeirapedro/todo-list",
  },
];

export default function ProjectHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl text-white font-bold mb-4">
        Highlighted Projects
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
