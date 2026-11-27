
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspiring Full Stack Developer",
  description:
    "Meet Tajudeen Bawumia, an aspiring full stack developer from Ghana building modern web applications and backend systems using Python, JavaScript, React, Next.js, TypeScript and MySQL.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Tajudeen Bawumia | Aspiring Full Stack Developer",
    description:
      "Explore my software engineering journey, six projects and four live application demonstrations.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tajudeen Bawumia | Aspiring Full Stack Developer",
    description:
      "Discover my software projects, technical skills and journey into full stack development.",
  },
};

type HomeProject = {
  number: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
};

const frontendProjects: HomeProject[] = [
  {
    number: "01",
    slug: "portfolio",
    name: "Developer Portfolio",
    category: "PERSONAL WEBSITE",
    description:
      "An earlier personal website built with HTML, CSS and JavaScript to present my professional background, skills and development journey.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://bawumia23.github.io/developer-portfolio/",
  },
  {
    number: "02",
    slug: "weather-dashboard",
    name: "WeatherNow",
    category: "WEB APPLICATION",
    description:
      "A weather dashboard that retrieves and presents weather forecasts and climate information through a user-friendly interface.",
    technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
    liveDemo: "https://weathernow-phi-five.vercel.app/",
  },
  {
    number: "03",
    slug: "ecommerce-store",
    name: "ShopEase",
    category: "E-COMMERCE",
    description:
      "An online shopping application featuring product listings and shopping cart functionality.",
    technologies: ["JavaScript", "FakeStore API", "HTML", "CSS"],
    liveDemo: "https://bawumia23.github.io/ecommerce-store/",
  },
  {
    number: "04",
    slug: "task-manager",
    name: "TaskFlow",
    category: "PRODUCTIVITY",
    description:
      "A responsive task management application built with HTML, CSS and JavaScript to help users organize daily activities.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://bawumia23.github.io/task-manager/",
  },
];

const backendProjects: HomeProject[] = [
  {
    number: "05",
    slug: "airbnb-clone",
    name: "AirBnB Clone",
    category: "BACKEND ENGINEERING",
    description:
      "A Python accommodation management application exploring object-oriented programming, a command-line interface and JSON-based file storage.",
    technologies: ["Python", "OOP", "JSON", "Unit Testing"],
  },
  {
    number: "06",
    slug: "airbnb-clone-v2",
    name: "AirBnB Clone v2",
    category: "DATABASE & DEPLOYMENT",
    description:
      "An expanded backend engineering project using MySQL, SQLAlchemy and deployment tools. This collaborative course assignment involved substantial backend, database and deployment implementation by me.",
    technologies: ["Python", "MySQL", "SQLAlchemy", "Fabric", "Nginx"],
  },
];

const technologyGroups = [
  {
    category: "Languages",
    technologies: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Data & tools",
    technologies: ["SQL", "MySQL", "Git", "GitHub"],
  },
];

function ProjectEntry({ project }: { project: HomeProject }) {
  return (
    <article className="group border-t border-[#303740] py-7 md:py-8">
      <div className="grid gap-5 md:grid-cols-[72px_1fr]">

        {/* PROJECT NUMBER */}
        <p className="text-sm font-medium tabular-nums text-[#78818d]">
          {project.number}
        </p>

        <div>
          {/* PROJECT CATEGORY */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-medium tracking-wide text-[#9badd1]">
              {project.category}
            </span>

            {project.liveDemo && (
              <span className="text-xs text-[#a1a8b2]">
                Live application
              </span>
            )}
          </div>

          {/* PROJECT NAME */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block text-2xl md:text-3xl font-semibold tracking-tight text-[#f0f0eb] hover:text-[#a8c1ff] transition-colors"
          >
            {project.name}
          </Link>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-[#a5abb4]">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-xs text-[#b7bec9]"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* PROJECT LINKS */}
          <div className="flex flex-wrap items-center gap-5 mt-6">

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#a8c1ff] hover:text-white transition-colors"
            >
              View case study
              <span aria-hidden="true">↗</span>
            </Link>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#a5abb4] hover:text-white transition-colors"
              >
                Live demo
                <span aria-hidden="true">↗</span>
              </a>
            )}

          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111315] text-[#f0f0eb]">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* WORK-LED HERO */}
        <section className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* INTRODUCTION */}
          <div>

            <p className="mb-7 text-xs font-semibold tracking-[0.16em] text-[#9db5e8]">
              SOFTWARE DEVELOPMENT · GHANA
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              I build useful software.
              <span className="mt-3 block text-[#91aff5]">
                From interface to database.
              </span>
            </h1>

            <p className="mt-8 text-xl font-medium text-[#e0e1df]">
              I&apos;m Tajudeen Bawumia, an aspiring full-stack developer.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#a8adb5]">
              I am moving from education into software engineering.
              I enjoy turning practical problems into applications,
              exploring how systems work and building my skills across
              frontend development, backend engineering and databases.
            </p>

            {/* PRIMARY ACTIONS */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="#selected-work"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#91aff5] px-6 py-3.5 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#b1c5fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91aff5]"
              >
                Explore selected work
                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-[#454d58] px-6 py-3.5 text-sm font-medium text-[#e2e5eb] transition-colors hover:border-[#91aff5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91aff5]"
              >
                About my journey
              </Link>

            </div>

            {/* PROFESSIONAL LINKS */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#a5abb4]">

              <a
                href="https://github.com/bawumia23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/adamu-tajudeen-bawumia-557a3876/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn ↗
              </a>

              <a
                href="/resume.pdf"
                download="Tajudeen_Bawumia_CV.pdf"
                className="hover:text-white transition-colors"
              >
                Download CV ↓
              </a>

            </div>
          </div>

          {/* PROJECT WORKSPACE PREVIEW */}
          <div className="min-w-0">

            <div className="overflow-hidden rounded-2xl border border-[#353d47] bg-[#181c21] shadow-[0_24px_70px_rgba(0,0,0,0.22)]">

              {/* WINDOW HEADER */}
              <div className="flex items-center justify-between gap-3 border-b border-[#303741] px-5 py-4">

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#747d89]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#747d89]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#747d89]" />
                </div>

                <span className="text-[10px] font-medium tracking-[0.14em] text-[#929ba8]">
                  TAJUDEEN / WORK INDEX
                </span>

                <span className="text-xs text-[#8d96a2]">
                  2026
                </span>

              </div>

              <div className="p-5 sm:p-7">

                {/* FEATURED BACKEND PROJECT */}
                <div className="flex items-center justify-between gap-3">

                  <p className="text-xs font-semibold tracking-[0.12em] text-[#a7bde9]">
                    FEATURED CASE STUDY
                  </p>

                  <span className="text-xs tabular-nums text-[#8c95a0]">
                    PROJECT 06 / 06
                  </span>

                </div>

                <div className="mt-6 border-l-2 border-[#91aff5] pl-5">

                  <p className="text-xs text-[#9ca5b1]">
                    BACKEND ENGINEERING / DATABASE
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f1f1ed] sm:text-4xl">
                    AirBnB Clone v2
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#a9b0ba]">
                    A collaborative backend project involving database
                    integration, application models and deployment workflows.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Python", "MySQL", "SQLAlchemy", "Fabric", "Nginx"].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[#394554] px-2.5 py-1.5 text-xs text-[#c4d0e5]"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <Link
                    href="/projects/airbnb-clone-v2"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a8c1ff] hover:text-white transition-colors"
                  >
                    Explore this project
                    <span aria-hidden="true">↗</span>
                  </Link>

                </div>

                {/* OTHER WORK */}
                <div className="mt-9 border-t border-[#303741] pt-5">

                  <p className="mb-2 text-xs font-medium tracking-[0.12em] text-[#8f98a5]">
                    MORE SELECTED WORK
                  </p>

                  {[
                    {
                      name: "WeatherNow",
                      slug: "weather-dashboard",
                      type: "WEB APPLICATION",
                    },
                    {
                      name: "ShopEase",
                      slug: "ecommerce-store",
                      type: "E-COMMERCE",
                    },
                    {
                      name: "TaskFlow",
                      slug: "task-manager",
                      type: "PRODUCTIVITY",
                    },
                  ].map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="flex items-center justify-between gap-4 border-b border-[#2d343d] py-4 last:border-b-0 group"
                    >
                      <span className="text-sm font-medium text-[#e5e6e3] group-hover:text-[#a8c1ff] transition-colors">
                        {project.name}
                      </span>

                      <span className="flex items-center gap-3">
                        <span className="hidden text-[10px] tracking-wide text-[#848e9b] sm:inline">
                          {project.type}
                        </span>
                        <span className="text-[#8e9bb1] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}

                </div>

              </div>

              {/* PROJECT SUMMARY */}
              <div className="grid grid-cols-2 border-t border-[#303741] bg-[#14181d]">

                <div className="px-5 py-5 sm:px-7">
                  <p className="text-3xl font-semibold tabular-nums text-[#f1f1ed]">
                    06
                  </p>
                  <p className="mt-1 text-xs text-[#9ca4af]">
                    Featured projects
                  </p>
                </div>

                <div className="border-l border-[#303741] px-5 py-5 sm:px-7">
                  <p className="text-3xl font-semibold tabular-nums text-[#f1f1ed]">
                    04
                  </p>
                  <p className="mt-1 text-xs text-[#9ca4af]">
                    Live applications
                  </p>
                </div>

              </div>

            </div>

            <p className="mt-4 text-right text-xs text-[#7f8996]">
              A snapshot of projects and technologies in my portfolio.
            </p>

          </div>
        </section>

        {/* PROJECT SUMMARY STRIP */}
        <section className="grid grid-cols-1 border-y border-[#303740] py-7 sm:grid-cols-3">

          <div className="py-3 sm:py-1 sm:pr-6">
            <p className="text-2xl font-semibold text-[#f1f0eb]">06</p>
            <p className="mt-1 text-sm text-[#a2a9b2]">Featured projects</p>
          </div>

          <div className="border-y border-[#303740] py-4 sm:border-x sm:border-y-0 sm:px-8 sm:py-1">
            <p className="text-2xl font-semibold text-[#f1f0eb]">04</p>
            <p className="mt-1 text-sm text-[#a2a9b2]">Live demonstrations</p>
          </div>

          <div className="py-4 sm:py-1 sm:pl-8">
            <p className="text-2xl font-semibold text-[#f1f0eb]">02</p>
            <p className="mt-1 text-sm text-[#a2a9b2]">Backend projects</p>
          </div>

        </section>

        {/* BACKGROUND AND APPROACH */}
        <section className="grid gap-8 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
              MY APPROACH
            </p>

            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              From education to engineering.
            </h2>
          </div>

          <div className="max-w-2xl">

            <p className="text-lg leading-8 text-[#d7d9d8]">
              My background in education shaped how I communicate,
              organize ideas and approach problems. I now bring that
              mindset into software development.
            </p>

            <p className="mt-5 text-base leading-8 text-[#a5abb4]">
              I am developing my skills through practical projects,
              technical coursework and continuous experimentation.
              I enjoy understanding how an application works as a whole,
              from the user interface to the backend and the data behind it.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a8c1ff] hover:text-white transition-colors"
            >
              Read more about my journey
              <span aria-hidden="true">↗</span>
            </Link>

          </div>

        </section>

        {/* TECHNOLOGY TOOLKIT */}
        <section className="border-t border-[#303740] py-20">

          <div className="mb-10 max-w-xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
              TOOLS & TECHNOLOGIES
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The tools behind the work.
            </h2>

            <p className="mt-4 leading-7 text-[#a5abb4]">
              Technologies I am learning and applying through projects
              and hands-on development.
            </p>
          </div>

          <div>
            {technologyGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 border-t border-[#303740] py-5 sm:grid-cols-[180px_1fr] sm:gap-8"
              >
                <p className="text-sm font-medium text-[#9ca6b4]">
                  {group.category}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm text-[#e0e2df]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* SELECTED WEB PROJECTS */}
        <section id="selected-work" className="scroll-mt-20 border-t border-[#303740] py-20">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">

            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
                SELECTED WORK / 01
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Web applications.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#a5abb4]">
                Applications built to explore interfaces, API integration,
                application logic and everyday user problems.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-sm font-semibold text-[#a8c1ff] hover:text-white transition-colors"
            >
              View all projects ↗
            </Link>

          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {frontendProjects.map((project) => (
              <ProjectEntry key={project.slug} project={project} />
            ))}
          </div>

        </section>

        {/* BACKEND PROJECTS */}
        <section className="border-t border-[#303740] py-20">

          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
              SELECTED WORK / 02
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Backend and systems.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#a5abb4]">
              Course projects exploring Python, object-oriented
              programming, relational databases and deployment workflows.
            </p>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {backendProjects.map((project) => (
              <ProjectEntry key={project.slug} project={project} />
            ))}
          </div>

        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-[#303740] py-20"
        >

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

            <div className="max-w-2xl">

              <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
                GET IN TOUCH
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a problem worth solving?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[#a5abb4]">
                I am interested in internships, collaboration and
                opportunities to keep learning through meaningful
                software development work.
              </p>

              <p className="mt-5 text-sm text-[#d8dce3]">
                bawumia91@gmail.com
              </p>

            </div>

            <a
              href="mailto:bawumia91@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#91aff5] px-6 py-3.5 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#b1c5fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91aff5]"
            >
              Start a conversation
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}

