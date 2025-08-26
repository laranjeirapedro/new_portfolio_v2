import Hero from "@/components/home/hero";
import ProjectHighlight from "@/components/home/project-highlight";

import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Home - Pedro Magalhães",
  description: "Welcome to my portfolio",
  url: "https://pedro-magalhaes-portfolio.vercel.app/",
  image: "https://pedro-magalhaes-portfolio.vercel.app/home-og-image.png",
});


export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-tr from-blue-900 via-indigo-800 to-sky-600 overflow-x-hidden">
      <Hero />
      <ProjectHighlight />
    </main>
  );
}