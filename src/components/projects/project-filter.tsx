"use client";

import { useState, useEffect } from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repo: string;
  liveUrl: string;
};


type ProjectFilterProps = {
  projects: Project[];
  onFilter: (projects: Project[]) => void;
};

export default function ProjectFilter({ projects, onFilter }: ProjectFilterProps) {
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const [activeTag, setActiveTag] = useState<string>("All");

  const filterProjects = (tag: string) => {
    setActiveTag(tag);

    if (tag === "All") {
      onFilter(projects);
    } else {
      onFilter(projects.filter((p) => p.tags.includes(tag)));
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-8 px-4 pt-4">
      {isMobile ? (
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={activeTag}
          onChange={(e) => filterProjects(e.target.value)}
        >
          <option value="All">All</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      ) : (
        <div className="flex flex-wrap gap-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTag === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => filterProjects("All")}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded ${
                activeTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
              onClick={() => filterProjects(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}