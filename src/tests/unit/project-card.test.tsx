import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/projects/project-card";
import type { ProjectCardProps } from "@/components/projects/project-card";

const baseProps: ProjectCardProps = {
  title: "Example Project",
  description: "This is a test project.",
  tags: ["React", "Next.js"],
  image: "example.jpg",
  repo: "https://github.com/example/project",
  liveUrl: "https://example.com",
};

describe("ProjectCard component", () => {
  test("renders project title", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByText("Example Project")).toBeInTheDocument();
  });
});