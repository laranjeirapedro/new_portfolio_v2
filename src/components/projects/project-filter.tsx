import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repo: string;
  liveUrl: string;
};

type ProjectFilterProps = {
  projects: Project[];
  onFilter: (filtered: Project[]) => void;
};

const getAllTags = (projects: Project[]) => {
  const tags = new Set<string>();
  projects.forEach((proj) => proj.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
};

export default function ProjectFilter({
  projects,
  onFilter,
}: ProjectFilterProps) {
  const tags = getAllTags(projects);
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(tag: string | null) {
    setSelected(tag);
    if (!tag) {
      onFilter(projects); // Sem filtro: mostra todos
    } else {
      onFilter(projects.filter((p) => p.tags.includes(tag)));
    }
  }

  return (
    <div className="flex gap-3 flex-wrap mt-4 mb-6 justify-center">
      <button
        onClick={() => handleSelect(null)}
        className={`px-3 py-1 rounded-full border font-semibold ${selected === null ? "bg-sky-600 text-white" : "bg-blue-200 text-sky-700"}`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleSelect(tag)}
          className={`px-3 py-1 rounded-full border font-semibold transition ${
            selected === tag
              ? "bg-sky-600 text-white"
              : "bg-blue-200 text-sky-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
