import Link from "next/link";
import { Download, ExternalLink, Github } from "lucide-react";

const achievements = [
  {
    title: "Product Landing Page System (React + Contentful CMS)",
    description:
      "Created a scalable landing page framework enabling non-technical teams to manage content independently, integrating real-time API data and Playwright E2E testing.",
  },
  {
    title: "AcmeDent.com Website Revamp (React + Shopify)",
    description:
      "Led a full frontend redevelopment improving performance, accessibility, and SEO, with continuous deployment using GitHub Actions.",
  },
  {
    title: "Imagineairsystems.com (React + Contentful)",
    description:
      "Developed API-driven landing pages with Google Analytics integration to track and optimize engagement.",
  },
];

const workExperience = [
  {
    company: "AcmeDent",
    title: "Full-Stack Developer",
    location: "Toronto, ON",
    period: "Nov 2023 – Present",
    details: [
      "Designed, developed, and maintained enterprise dashboards and customer-facing web applications using React, TypeScript, and .NET APIs.",
      "Built reusable UI components with Styled-Components, ensuring WCAG 2.1 accessibility compliance.",
      "Integrated RESTful APIs, implemented automated testing (Jest, Cypress), and enhanced CI/CD pipelines via GitLab CI.",
      "Improved site performance, SEO, and UX, resulting in higher engagement and reduced load times.",
      "Collaborated in Agile sprints with cross-functional teams, delivering impactful features aligned with business goals.",
      "Utilized Google Analytics & GTM for data-driven UX optimization.",
    ],
  },
  {
    company: "Stellantis",
    title: "Project Manager – Engineering & Logistics",
    location: "South America",
    period: "Jun 2012 – Oct 2022",
    details: [
      "Led process automation projects, creating internal tools using VBA, Excel, and SQL to improve operational efficiency.",
      "Served as liaison between business and technical teams to define requirements and deliver tailored software solutions.",
      "Acquired foundational experience with version control systems, Agile workflows, and full software development lifecycles.",
    ],
  },
];

const education = [
  {
    institution: "Georgian College",
    degree: "Computer Programming",
    period: "Jan 2023 – Aug 2024",
    honors: "Dean’s List: 2023, 2024",
  },
];

const skills = [
  {
    title: "Frontend Development",
    values: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript (ES6–ES9)",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind",
      "Styled-Components",
      "WCAG 2.1 Accessibility",
    ],
  },
  {
    title: "Backend Development",
    values: [
      "Node.js",
      "Express",
      "Python",
      ".NET 5/6",
      "ASP.NET",
    ],
  },
  {
    title: "Databases",
    values: ["PostgreSQL", "SQL Server", "Sequelize ORM"],
  },
  {
    title: "Cloud & DevOps",
    values: [
      "AWS (Lambda, S3, Cognito)",
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "CI/CD (GitHub Actions, GitLab CI)",
      "Azure",
    ],
  },
  {
    title: "Testing & Quality",
    values: [
      "Jest",
      "Cypress",
      "Mocha",
      "NUnit",
      "xUnit",
      "Playwright",
      "TDD & E2E Testing",
    ],
  },
  {
    title: "Collaboration & Tools",
    values: [
      "Jira",
      "Confluence",
      "Figma",
      "Google Analytics",
      "GTM",
      "Swagger",
      "Postman",
      "Kubernetes (basic)",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 pb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800 dark:text-sky-300 mb-1">
            Pedro Magalhães
          </h1>
          <div className="text-gray-800 dark:text-gray-200 font-medium mb-1">Full-Stack Developer</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
            Toronto, CA &nbsp;•&nbsp; +1 (647) 640-7182 &nbsp;•&nbsp; <a className="underline hover:text-sky-600" href="mailto:pedrohl.m@hotmail.com">pedrohl.m@hotmail.com</a>
          </div>
          <div className="flex gap-4 text-sky-700 dark:text-sky-400 text-sm mt-2">
            <Link href="https://www.linkedin.com/in/pedroh-magalhaes/" target="_blank" className="inline-flex items-center gap-1 hover:underline">
              LinkedIn <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="https://github.com/laranjeirapedro" target="_blank" className="inline-flex items-center gap-1 hover:underline">
              GitHub <Github className="w-4 h-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-1 hover:underline">
              Portfolio
            </Link>
          </div>
        </div>
        <a
          href="/resume-pedro-magalhaes.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition text-base font-semibold self-start"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </a>
      </div>

      <section className="mb-7">
        <h2 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">Profile</h2>
        <p className="text-gray-900 dark:text-gray-100">
          Results-driven Full-Stack Software Engineer with 3+ years of experience delivering high-performance, scalable web applications using React, Node.js, Python, .NET, and PostgreSQL.
          Adept at both front-end and back-end development, cloud deployments (AWS), and CI/CD pipelines. Known for technical expertise, problem-solving, and collaborative work in fast-paced, Agile environments.
        </p>
      </section>

      <section className="mb-7">
        <h2 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">Key Achievements</h2>
        <ul className="space-y-2 text-gray-900 dark:text-gray-100">
          {achievements.map((a) => (
            <li key={a.title}>
              <span className="font-medium">{a.title}:</span> {a.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-7">
        <h2 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">Professional Experience</h2>
        {workExperience.map((job) => (
          <div key={job.company} className="mb-5">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <span className="font-bold text-sky-900 dark:text-sky-200">{job.title}</span>
                {" @ "}
                <span className="font-semibold text-gray-900 dark:text-gray-100">{job.company}</span>
                {" — "}
                <span className="text-gray-500 dark:text-gray-300 text-sm">{job.location}</span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">{job.period}</div>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-900 dark:text-gray-100 space-y-1">
              {job.details.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-7">
        <h2 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">Education</h2>
        {education.map((edu) => (
          <div key={edu.institution} className="mb-1">
            <div className="font-bold">{edu.institution}</div>
            <div className="text-sm text-gray-800 dark:text-gray-200">
              {edu.degree} <span className="text-gray-500 dark:text-gray-400">({edu.period})</span>
              <span className="text-emerald-700 dark:text-emerald-400"> • {edu.honors}</span>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((sk) => (
            <div key={sk.title} className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-200 rounded-lg p-3 min-w-[180px] mb-2 shadow text-sm">
              <div className="font-semibold mb-1">{sk.title}</div>
              <ul className="list-none pl-2">
                {sk.values.map((v) => <li key={v}>• {v}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}