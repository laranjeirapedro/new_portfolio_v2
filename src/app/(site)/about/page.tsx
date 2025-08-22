import { Briefcase, Code, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2023–Present",
    title: "Full-Stack Developer @ AcmeDent (Canada)",
    description: `Developed and maintained e-commerce platforms, including migrating AcmeDent’s     website from WordPress to Shopify, increasing revenue by 41%.  
      Integrated .NET REST API for automatic product sync with QuickBooks.  
      Built React apps with Contentful CMS and Generative AI for marketing landing pages.  
      Leveraged Azure Analytics and PostHog for A/B testing and performance tracking.  
      Automated email marketing with MailChimp’s AI Content Generator for better engagement.  
      Also provided graphic and digital design services using Photoshop, Canva, and Figma.`,
    icon: <Code className="w-5 h-5 text-sky-600" />,
  },
  {
    year: "2023–2024",
    title: "Computer Programming Diploma @ Georgian College (Canada)",
    description:
      "Studied Front-End development, React (frameworks), Node.js, .Net, TypeScript, cloud integration (AWS), and database technologies for scalable web solutions.",
    icon: <GraduationCap className="w-5 h-5 text-sky-600" />,
  },
  {
    year: "2021–2022",
    title: "Full-Stack Studies",
    description:
      "Studied Node.js, TypeScript, cloud integration (AWS), and database technologies for scalable web solutions.",
    icon: <GraduationCap className="w-5 h-5 text-sky-600" />,
  },
  {
    year: "2012–2022",
    title: "Logistics Project Manager @ Stellantis (Brazil)",
    description: `Planned and managed logistics projects ensuring on-time and budget delivery.  
      Led end-to-end project execution, coordinating teams and stakeholders.  
      Developed automated VBA/Excel control system for tracking progress and budgets.  
      Provided regular reports and maintained cross-team communications.`,
    icon: <Briefcase className="w-5 h-5 text-sky-600" />,
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-6 text-sky-800 dark:text-sky-300">
        About Me
      </h1>
      <section className="mb-8">
        <p className="text-neutral-900 dark:text-neutral-100 text-lg">
          I’m Pedro Magalhães, a Full-Stack Developer based in Toronto with
          strong experience in building and maintaining e-commerce platforms and
          web applications. At AcmeDent, I led the migration from WordPress to
          Shopify, boosting revenue by 41%, and developed React apps integrating
          Contentful CMS and Generative AI for marketing. I also automate
          workflows with .NET APIs, leverage Azure Analytics and PostHog for A/B
          testing, and strengthen email marketing using AI-powered tools.
          Alongside development, I provide graphic and digital design expertise
          using Photoshop, Canva, and Figma.
          <br />
          <br />
          Before transitioning to tech, I managed logistics projects at
          Stellantis for over a decade, delivering projects on time and budget
          while developing automated tracking tools. I hold a Computer
          Programming Diploma from Georgian College where I studied front-end
          frameworks, Node.js, .NET, and cloud technologies. I’m passionate
          about creating scalable solutions that combine technical skill,
          design, and business impact.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-200">
          Skills & Technologies
        </h2>
        <ul className="flex flex-wrap gap-3">
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Skilled with React, Next.js, TypeScript, .NET, cloud services, and
            modern design tools like Figma. I blend technical expertise and
            creative design to build performant, scalable, and user-friendly
            solutions.
          </p>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-200">
          Professional Experience
        </h2>
        <ol className="relative border-l border-sky-400 ml-2">
          {timeline.map((item) => (
            <li key={item.year} className="mb-5 ml-6">
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-white dark:bg-neutral-950 border-2 border-sky-400 rounded-full shadow">
                {item.icon}
              </span>
              <h3 className="mb-1 text-lg font-bold text-sky-900 dark:text-sky-200">
                {item.year} – {item.title}
              </h3>
              <p className="whitespace-pre-line text-base text-neutral-700 dark:text-neutral-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
