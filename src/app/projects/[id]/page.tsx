
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  learning: string[];
  repository: string;
  liveDemo?: string;
  contribution?: string;
};

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const projects: Project[] = [
  {
    id: "portfolio",
    number: "01",
    name: "Developer Portfolio",
    category: "PERSONAL WEBSITE",
    description:
      "A personal website built with HTML, CSS and JavaScript to showcase my professional background, technical skills and software development journey.",
    overview:
      "This project introduced me to building and organizing a personal web presence. It provides visitors with a central place to explore my professional background, technical skills and selected work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive personal website",
      "Professional introduction and background",
      "Project showcase",
      "Contact and social media links",
      "Personal branding",
    ],
    learning: [
      "Structuring pages using HTML",
      "Creating layouts and styling with CSS",
      "Adding interactions with JavaScript",
      "Organizing frontend project files",
      "Publishing a website using GitHub Pages",
    ],
    repository: "https://github.com/bawumia23/developer-portfolio",
    liveDemo: "https://bawumia23.github.io/developer-portfolio/",
  },
  {
    id: "weather-dashboard",
    number: "02",
    name: "WeatherNow",
    category: "WEB APPLICATION",
    description:
      "A weather dashboard that retrieves and presents weather forecasts and climate information through a clean, user-friendly interface.",
    overview:
      "WeatherNow explores how external weather information can be retrieved and presented through a web application. The project provides practical experience working with dynamic data and user-facing interfaces.",
    technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
    features: [
      "Weather information dashboard",
      "External weather data integration",
      "Climate information presentation",
      "User-friendly interface",
    ],
    learning: [
      "Working with external APIs",
      "Handling asynchronous requests",
      "Displaying dynamic information",
      "JavaScript application development",
      "Building interactive frontend experiences",
    ],
    repository: "https://github.com/bawumia23/weather-dashboard",
    liveDemo: "https://weathernow-phi-five.vercel.app/",
  },
  {
    id: "ecommerce-store",
    number: "03",
    name: "ShopEase",
    category: "E-COMMERCE APPLICATION",
    description:
      "An online shopping application featuring product listings and shopping cart functionality, built around external product data.",
    overview:
      "ShopEase explores the foundations of an online shopping experience. It focuses on presenting product information and implementing shopping-related interactions using frontend technologies.",
    technologies: ["JavaScript", "FakeStore API", "HTML", "CSS"],
    features: [
      "Product listing interface",
      "External product data integration",
      "Shopping cart functionality",
      "Online shopping experience",
    ],
    learning: [
      "Working with product APIs",
      "JavaScript DOM manipulation",
      "Managing application data",
      "Building interactive interfaces",
      "Organizing frontend application code",
    ],
    repository: "https://github.com/bawumia23/ecommerce-store",
    liveDemo: "https://bawumia23.github.io/ecommerce-store/",
  },
  {
    id: "task-manager",
    number: "04",
    name: "TaskFlow",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A responsive task management application built with HTML, CSS and JavaScript to help users organize their daily activities.",
    overview:
      "TaskFlow is a productivity-focused web application. It demonstrates how frontend technologies can be combined to create a practical interface for organizing everyday tasks.",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: [
      "Responsive task management interface",
      "Task organization functionality",
      "JavaScript-driven interactions",
      "Clean and accessible layout",
    ],
    learning: [
      "Building interactive applications with JavaScript",
      "Working with HTML and CSS",
      "Creating responsive interfaces",
      "Structuring application functionality",
      "Using Git and GitHub for source control",
    ],
    repository: "https://github.com/bawumia23/task-manager",
    liveDemo: "https://bawumia23.github.io/task-manager/",
  },
  {
    id: "airbnb-clone",
    number: "05",
    name: "AirBnB Clone",
    category: "BACKEND ENGINEERING",
    description:
      "A Python accommodation management application exploring object-oriented programming, command-line interaction, application models and JSON-based file storage.",
    overview:
      "This software engineering course project applies object-oriented programming and modular Python development to build the foundations of an accommodation management application. A command interpreter provides a way to interact with application objects, while JSON-based file storage supports data persistence.",
    technologies: [
      "Python",
      "Object-Oriented Programming",
      "JSON",
      "Unit Testing",
    ],
    features: [
      "Interactive command-line console",
      "Object creation, retrieval, updating and deletion",
      "Object-oriented application models",
      "JSON file-based persistence",
      "Unit testing of application components",
    ],
    learning: [
      "Object-oriented programming with Python",
      "Designing classes and inheritance",
      "Serialization and file storage",
      "Building command interpreters",
      "Writing and organizing unit tests",
      "Structuring multi-module Python applications",
    ],
    repository: "https://github.com/bawumia23/AirBnB_clone",
  },
  {
    id: "airbnb-clone-v2",
    number: "06",
    name: "AirBnB Clone v2",
    category: "DATABASE & DEPLOYMENT",
    description:
      "An expanded backend engineering project involving relational database storage, SQLAlchemy integration and deployment workflows using Linux administration tools.",
    overview:
      "This project extends the AirBnB Clone learning experience into database engineering and deployment. It explores relational data storage with MySQL, ORM-based application models using SQLAlchemy, and deployment automation using Fabric and Nginx.",
    technologies: [
      "Python",
      "MySQL",
      "SQLAlchemy",
      "Fabric",
      "Nginx",
      "Linux",
    ],
    features: [
      "Relational database integration with MySQL",
      "SQLAlchemy ORM models",
      "Database storage implementation",
      "Application model relationships",
      "Automated deployment workflows with Fabric",
      "Nginx web server configuration",
    ],
    learning: [
      "Relational database design and MySQL",
      "Using SQLAlchemy for object-relational mapping",
      "Connecting Python applications to databases",
      "Managing application configuration",
      "Automating deployment with Fabric",
      "Configuring Nginx and Linux environments",
    ],
    repository: "https://github.com/bawumia23/AirBnB_clone_v2",
    contribution:
      "Collaborative course assignment completed with a peer. I took primary responsibility for much of the implementation, including substantial backend development, database integration and deployment tasks.",
  },
];

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `/projects/${project.id}`;

  return {
    title: `${project.name} | ${project.category}`,
    description: project.description,
    keywords: [
      "Tajudeen Bawumia",
      "Software Engineering",
      "Full Stack Development",
      ...project.technologies,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title: `${project.name} | Tajudeen Bawumia`,
      description: project.description,
      url: canonicalUrl,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Tajudeen Bawumia`,
      description: project.description,
      images: ["/twitter-image.png"],
    },
  };
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-[#f0f0eb] sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default async function ProjectDetails({
  params,
}: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#111315] text-[#f0f0eb]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* BREADCRUMB */}
        <div className="border-b border-[#303740] py-6">
          <Link
            href="/projects"
            className="text-sm text-[#a5abb4] transition-colors hover:text-white"
          >
            ← All projects
          </Link>
        </div>

        {/* PROJECT INTRODUCTION */}
        <section className="border-b border-[#303740] py-16 md:py-20">

          <div className="flex flex-wrap items-center gap-4 mb-7">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
              PROJECT / {project.number}
            </span>
            <span className="text-xs text-[#77818e]">
              {project.category}
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            {project.name}
            <span className="text-[#91aff5]">.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#a8adb5]">
            {project.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#91aff5] px-6 py-3.5 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#b1c5fa]"
              >
                Open live application ↗
              </a>
            )}

            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#485568] px-6 py-3.5 text-sm font-medium text-[#e0e4eb] transition-colors hover:border-[#91aff5] hover:text-white"
            >
              View source code ↗
            </a>

          </div>

        </section>

        {/* PROJECT INFORMATION */}
        <section className="grid gap-12 border-b border-[#303740] py-16 md:grid-cols-[1.4fr_0.6fr] md:gap-20 md:py-20">

          <div>
            <SectionHeading
              eyebrow="01 / OVERVIEW"
              title="Understanding the project."
            />

            <p className="max-w-3xl text-base leading-8 text-[#aeb4bd]">
              {project.overview}
            </p>
          </div>

          <aside className="h-fit border-l border-[#3a4552] pl-6">

            <p className="text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
              PROJECT DETAILS
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-xs text-[#77818e]">Project</p>
                <p className="mt-1 text-sm font-medium text-[#e8e9e6]">
                  {project.number} / 06
                </p>
              </div>

              <div>
                <p className="text-xs text-[#77818e]">Category</p>
                <p className="mt-1 text-sm font-medium text-[#e8e9e6]">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#77818e]">Source code</p>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-[#a8c1ff] hover:text-white"
                >
                  GitHub repository ↗
                </a>
              </div>

              <div>
                <p className="text-xs text-[#77818e]">Demonstration</p>
                <p className="mt-1 text-sm font-medium text-[#e8e9e6]">
                  {project.liveDemo ? "Live application available" : "Source code available"}
                </p>
              </div>

            </div>
          </aside>

        </section>

        {/* TECHNOLOGY STACK */}
        <section className="border-b border-[#303740] py-16 md:py-20">

          <SectionHeading
            eyebrow="02 / TECHNOLOGY"
            title="Tools and technologies."
          />

          <p className="mb-8 max-w-2xl text-sm leading-7 text-[#a5abb4]">
            Technologies used in this project and explored through its implementation.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-[#303740] py-6">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-sm font-medium text-[#d4d9e1]"
              >
                {technology}
              </span>
            ))}
          </div>

        </section>

        {/* PROJECT FEATURES */}
        <section className="border-b border-[#303740] py-16 md:py-20">

          <SectionHeading
            eyebrow="03 / IMPLEMENTATION"
            title="Project capabilities."
          />

          <div className="grid gap-x-12 md:grid-cols-2">

            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="flex gap-5 border-t border-[#303740] py-6"
              >
                <span className="text-xs tabular-nums text-[#91aff5]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-[#d0d4da]">
                  {feature}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* COLLABORATIVE CONTRIBUTION */}
        {project.contribution && (
          <section className="border-b border-[#303740] py-16 md:py-20">

            <SectionHeading
              eyebrow="04 / COLLABORATION"
              title="My contribution."
            />

            <div className="max-w-3xl border-l-2 border-[#91aff5] pl-6">
              <p className="text-base leading-8 text-[#c4cad3]">
                {project.contribution}
              </p>
            </div>

          </section>
        )}

        {/* LEARNING OUTCOMES */}
        <section className="border-b border-[#303740] py-16 md:py-20">

          <SectionHeading
            eyebrow={project.contribution ? "05 / LEARNING" : "04 / LEARNING"}
            title="What I learned."
          />

          <p className="mb-8 max-w-2xl text-sm leading-7 text-[#a5abb4]">
            Skills and concepts explored through developing and working on this project.
          </p>

          <div className="grid gap-x-12 md:grid-cols-2">

            {project.learning.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border-t border-[#303740] py-5"
              >
                <span className="text-xs tabular-nums text-[#91aff5]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-[#d0d4da]">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* PROJECT ACTIONS */}
        <section className="py-16 md:py-20">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

            <div className="max-w-2xl">

              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[#9db5e8]">
                CONTINUE EXPLORING
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Interested in this work?
              </h2>

              <p className="mt-5 leading-8 text-[#a5abb4]">
                Explore the source code, try the live application
                where available, or discover my other software projects.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#485568] px-5 py-3 text-sm font-medium text-[#e0e4eb] transition-colors hover:border-[#91aff5] hover:text-white"
              >
                GitHub ↗
              </a>

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#91aff5] px-5 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#b1c5fa]"
                >
                  Live demo ↗
                </a>
              )}

            </div>

          </div>

          <div className="mt-12 flex flex-wrap justify-between gap-5 border-t border-[#303740] pt-6">

            <Link
              href="/projects"
              className="text-sm text-[#a8c1ff] hover:text-white transition-colors"
            >
              ← Return to all projects
            </Link>

            <Link
              href="/#contact"
              className="text-sm text-[#a5abb4] hover:text-white transition-colors"
            >
              Contact me ↗
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}

