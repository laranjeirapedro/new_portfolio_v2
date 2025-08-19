import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repo: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  repo,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="rounded-md aspect-[16/9] object-cover mb-4"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="self-end text-blue-600 dark:text-blue-400 underline mt-auto"
      >
        View Repository
      </a>
    </div>
  );
}