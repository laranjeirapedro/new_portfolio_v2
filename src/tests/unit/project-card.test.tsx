import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/projects/project-card";
import type { ProjectCardProps } from "@/components/projects/project-card";

describe("ProjectCard component", () => {
  test("renders project title", () => {
    const props: ProjectCardProps = {
      title: "Test Project",
      description: "Test description",
      tags: ["React", "TypeScript"],
      image: "test-image.jpg",
      repo: "https://github.com/example/repo",
      liveUrl: "https://example.com",
    };

    render(<ProjectCard {...props} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });
});