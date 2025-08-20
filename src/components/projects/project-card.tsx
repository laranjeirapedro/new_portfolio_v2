import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repo: string;
  liveUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  repo,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-80 p-2 object-fill" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-sky-600 text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-sky-500 text-sky-500 rounded hover:bg-sky-600 hover:text-white transition"
          >
            View Repository
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
