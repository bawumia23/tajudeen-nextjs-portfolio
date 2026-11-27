
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Projects & Portfolio",
  description:
    "Explore six software engineering projects by Tajudeen Bawumia, including Python backend systems, MySQL database integration, Next.js applications, JavaScript projects and live web demonstrations.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Software Projects | Tajudeen Bawumia",
    description:
      "Explore my frontend applications, Python backend projects, database engineering work and live demonstrations.",
    images: ["/opengraph-image.png"],
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Projects | Tajudeen Bawumia",
    description:
      "Discover my six software engineering projects and four live application demonstrations.",
    images: ["/twitter-image.png"],
  },
};

type Project = {
  number: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  repository: string;
  liveDemo?: string;
  contribution?: string;
};

const frontendProjects: Project[] = [
  {
    number: "01",
    slug: "portfolio",
    name: "Developer Portfolio",
    category: "PERSONAL WEBSITE",
    description:
      "A personal website built with HTML, CSS and JavaScript to showcase my professional background, technical skills and software development journey.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository:
      "https://github.com/bawumia23/developer-portfolio",
    liveDemo:
      "https://bawumia23.github.io/developer-portfolio/",
  },
  {
    number: "02",
    slug: "weather-dashboard",
    name: "WeatherNow",
    category: "WEB APPLICATION",
    description:
      "A weather dashboard that retrieves and presents weather forecasts and climate information through a clean, user-friendly interface.",
    technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
    repository:
      "https://github.com/bawumia23/weather-dashboard",
    liveDemo:
      "https://weathernow-phi-five.vercel.app/",
  },
  {
    number: "03",
    slug: "ecommerce-store",
    name: "ShopEase",
    category: "E-COMMERCE",
    description:
      "An online shopping application featuring product listings and shopping cart functionality, built around external product data.",
    technologies: ["JavaScript", "FakeStore API", "HTML", "CSS"],
    repository:
      "https://github.com/bawumia23/ecommerce-store",
    liveDemo:
      "https://bawumia23.github.io/ecommerce-store/",
  },
  {
    number: "04",
    slug: "task-manager",
    name: "TaskFlow",
    category: "PRODUCTIVITY",
    description:
      "A responsive task management application built with HTML, CSS and JavaScript to help users organize their daily activities.",
    technologies: ["JavaScript", "HTML", "CSS"],
    repository:
      "https://github.com/bawumia23/task-manager",
    liveDemo:
      "https://bawumia23.github.io/task-manager/",
  },
];

const backendProjects: Project[] = [
  {
    number: "05",
    slug: "airbnb-clone",
    name: "AirBnB Clone",
    category: "BACKEND ENGINEERING",
    description:
      "A Python accommodation management application exploring object-oriented programming, command-line interaction, application models and JSON-based file storage.",
    technologies: [
      "Python",
      "Object-Oriented Programming",
      "JSON",
      "Unit Testing",
    ],
    repository:
      "https://github.com/bawumia23/AirBnB_clone",
  },
  {
    number: "06",
    slug: "airbnb-clone-v2",
    name: "AirBnB Clone v2",
    category: "DATABASE & DEPLOYMENT",
    description:
      "An expanded backend engineering project involving relational database storage, SQLAlchemy integration and deployment workflows using Linux administration tools.",
    technologies: [
      "Python",
      "MySQL",
      "SQLAlchemy",
      "Fabric",
      "Nginx",
    ],
    repository:
      "https://github.com/bawumia23/AirBnB_clone_v2",
    contribution:
      "Collaborative course assignment completed with a peer. I took primary responsibility for much of the implementation, including substantial backend development, database integration and deployment tasks.",
  },
];

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="grid gap-5 border-t border-[var(--border)] py-8 md:grid-cols-[72px_1fr] md:gap-8">

      {/* PROJECT NUMBER */}
      <div>
        <span className="text-sm font-medium tabular-nums text-[var(--text-subtle)]">
          {project.number}
        </span>
      </div>

      {/* PROJECT DETAILS */}
      <div>

        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.12em] text-[var(--accent-soft)]">
            {project.category}
          </span>

          {project.liveDemo ? (
            <span className="text-xs text-[var(--status-success)]">
              Live application
            </span>
          ) : (
            <span className="text-xs text-[var(--text-muted)]">
              Course project
            </span>
          )}
        </div>

        {/* PROJECT TITLE */}
        <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          {project.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          {project.description}
        </p>

        {/* CONTRIBUTION */}
        {project.contribution && (
          <div className="mt-5 max-w-3xl border-l-2 border-[var(--accent-bg)] pl-4">
            <p className="mb-2 text-xs font-semibold tracking-wide text-[var(--accent)]">
              MY CONTRIBUTION
            </p>

            <p className="text-sm leading-7 text-[var(--text-muted)]">
              {project.contribution}
            </p>
          </div>
        )}

        {/* TECHNOLOGIES */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-xs text-[var(--text-high)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* PROJECT LINKS */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-white"
          >
            View case study
            <span aria-hidden="true">↗</span>
          </Link>

          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-white"
          >
            GitHub source
            <span aria-hidden="true">↗</span>
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-white"
            >
              Live demonstration
              <span aria-hidden="true">↗</span>
            </a>
          )}

        </div>

      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* PAGE INTRODUCTION */}
        <section className="border-b border-[var(--border)] py-20 md:py-24">

          <p className="mb-6 text-xs font-semibold tracking-[0.16em] text-[var(--accent-soft)]">
            PORTFOLIO / SELECTED WORK
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Work built through
            <span className="block text-[var(--accent-bg)]">
              learning and practice.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
            A collection of frontend applications, backend systems
            and database engineering projects developed through
            independent learning and software engineering coursework.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <a
              href="#frontend"
              className="rounded-lg bg-[var(--accent-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Explore selected work ↓
            </a>

            <Link
              href="/"
              className="rounded-lg border border-[var(--border-strong)] px-6 py-3.5 text-sm font-medium text-[var(--text-high)] transition-colors hover:border-[var(--accent-bg)] hover:text-white"
            >
              Back to home
            </Link>

          </div>

        </section>

        {/* PROJECT OVERVIEW */}
        <section className="grid grid-cols-1 border-b border-[var(--border)] py-8 sm:grid-cols-3">

          <div className="py-3 sm:py-1 sm:pr-6">
            <p className="text-3xl font-semibold tabular-nums">06</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Featured projects
            </p>
          </div>

          <div className="border-y border-[var(--border)] py-4 sm:border-x sm:border-y-0 sm:px-8 sm:py-1">
            <p className="text-3xl font-semibold tabular-nums">04</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Live applications
            </p>
          </div>

          <div className="py-4 sm:py-1 sm:pl-8">
            <p className="text-3xl font-semibold tabular-nums">02</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Backend projects
            </p>
          </div>

        </section>

        {/* FRONTEND PROJECTS */}
        <section
          id="frontend"
          className="scroll-mt-24 border-b border-[var(--border)] py-20 md:py-24"
        >

          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">

            <div>

              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
                SELECTED WORK / 01
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Frontend & web applications.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                Practical applications exploring user interfaces,
                external APIs, frontend logic and everyday digital needs.
              </p>

            </div>

            <span className="text-sm text-[var(--text-subtle)]">
              04 projects
            </span>

          </div>

          <div>
            {frontendProjects.map((project) => (
              <ProjectEntry
                key={project.slug}
                project={project}
              />
            ))}
          </div>

        </section>

        {/* BACKEND PROJECTS */}
        <section
          id="backend"
          className="scroll-mt-24 border-b border-[var(--border)] py-20 md:py-24"
        >

          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">

            <div>

              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
                SELECTED WORK / 02
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Backend & systems engineering.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                Course projects exploring Python, object-oriented
                programming, relational databases and deployment workflows.
              </p>

            </div>

            <span className="text-sm text-[var(--text-subtle)]">
              02 projects
            </span>

          </div>

          <div>
            {backendProjects.map((project) => (
              <ProjectEntry
                key={project.slug}
                project={project}
              />
            ))}
          </div>

        </section>

        {/* CONTACT */}
        <section className="py-20 md:py-24">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

            <div className="max-w-2xl">

              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
                LET&apos;S CONNECT
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Interested in working together?
              </h2>

              <p className="mt-5 leading-8 text-[var(--text-muted)]">
                I am open to internship opportunities, collaboration
                and opportunities to grow through meaningful
                software engineering work.
              </p>

            </div>

            <a
              href="mailto:bawumia91@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-lg bg-[var(--accent-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Contact me
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}

