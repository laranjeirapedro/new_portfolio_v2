import ProjectCard from "@/components/projects/project-card";

const projects = [
  {
    title: "Weather App",
    description: "Weather forecast using React + Tailwind with external APIs.",
    tags: ["React", "Tailwind", "API"],
    image: "/images/weather-app.png",
    repo: "https://github.com/laranjeirapedro/weather-app",
  },
  {
    title: "To-Do List",
    description:
      "Full-stack To-Do app in Next.js with MongoDB persistence and CRUD.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    image: "/images/todo-app.png",
    repo: "https://github.com/laranjeirapedro/todo-list",
  },
];

export default function ProjectsPage() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 p-10">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}