import Hero from "@/components/home/hero";
import ProjectHighlight from "@/components/home/project-highlight";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-tr from-blue-900 via-indigo-800 to-sky-600 overflow-x-hidden">
      <Hero />
      <ProjectHighlight />
    </main>
  );
}