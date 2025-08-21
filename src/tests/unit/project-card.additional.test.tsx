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

describe("ProjectCard additional tests", () => {
  test("renders description", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByText("This is a test project.")).toBeInTheDocument();
  });

  test("renders all tags", () => {
    render(<ProjectCard {...baseProps} />);
    baseProps.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  test("renders repository link with correct href", () => {
    render(<ProjectCard {...baseProps} />);
    const repoLink = screen.getByText("View Repository").closest("a");
    expect(repoLink).toHaveAttribute("href", baseProps.repo);
  });

  test("renders live link when liveUrl is provided", () => {
    render(<ProjectCard {...baseProps} />);
    const liveLink = screen.getByText("View Live").closest("a");
    expect(liveLink).toHaveAttribute("href", baseProps.liveUrl);
  });

  test("does not render live link when liveUrl is empty", () => {
    const propsWithoutLiveUrl = { ...baseProps, liveUrl: "" };
    render(<ProjectCard {...propsWithoutLiveUrl} />);
    const liveLink = screen.queryByText("View Live");
    expect(liveLink).toBeNull();
  });

  test("image renders with correct alt attribute", () => {
    render(<ProjectCard {...baseProps} />);
    const img = screen.getByAltText(baseProps.title);
    expect(img).toHaveAttribute("src", baseProps.image);
  });
});