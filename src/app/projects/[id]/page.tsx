
import Link from "next/link";
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
  gradient: string;
  symbol: string;
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
    category: "PERSONAL PROJECT",
    description:
      "A personal developer portfolio showcasing my technical skills, professional experience, projects, and software development journey.",
    overview:
      "This project presents my professional background and transition into software engineering. It provides visitors with a central place to explore my skills, experience, projects, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive portfolio interface",
      "Professional introduction and experience sections",
      "Project showcase",
      "Contact and social media links",
      "Professional personal branding",
    ],
    learning: [
      "Structuring web pages with HTML",
      "Styling responsive interfaces with CSS",
      "Adding interactivity with JavaScript",
      "Organizing frontend project files",
      "Publishing projects using GitHub",
    ],
    repository: "https://github.com/bawumia23/developer-portfolio",
    liveDemo: "https://bawumia23.github.io/developer-portfolio/",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    symbol: "</>",
  },
  {
    id: "weather-dashboard",
    number: "02",
    name: "WeatherNow",
    category: "WEB APPLICATION",
    description:
      "A real-time weather dashboard designed to present weather forecasts and climate information through a user-friendly interface.",
    overview:
      "WeatherNow explores how weather information can be retrieved and presented through a web application. The project demonstrates practical frontend development and working with external weather data.",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    features: [
      "Weather information dashboard",
      "Integration with weather data services",
      "Climate information presentation",
      "User-friendly interface",
    ],
    learning: [
      "JavaScript application development",
      "Working with external APIs",
      "Handling asynchronous requests",
      "Displaying dynamic information",
      "Frontend application development",
    ],
    repository: "https://github.com/bawumia23/weather-dashboard",
    liveDemo: "https://weathernow-phi-five.vercel.app/",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    symbol: "☁",
  },
  {
    id: "ecommerce-store",
    number: "03",
    name: "ShopEase",
    category: "E-COMMERCE APPLICATION",
    description:
      "An online shopping application featuring product listings and shopping cart functionality.",
    overview:
      "ShopEase explores the foundations of an online shopping experience. It focuses on presenting products and implementing shopping-related functionality using frontend development technologies.",
    technologies: ["JavaScript", "HTML", "CSS", "FakeStore API"],
    features: [
      "Product listing interface",
      "Product data integration",
      "Shopping cart functionality",
      "Online shopping interface",
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
    gradient: "from-fuchsia-600 via-purple-600 to-pink-600",
    symbol: "🛍",
  },
  {
    id: "task-manager",
    number: "04",
    name: "TaskFlow",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A responsive task management application built with HTML, CSS, and JavaScript to help users organize their daily activities.",
    overview:
      "TaskFlow is a productivity-focused web application that demonstrates how frontend technologies can be used to create a task management experience. Its responsive interface makes the application suitable for different screen sizes.",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: [
      "Responsive task management interface",
      "Task organization experience",
      "JavaScript-driven application interactions",
      "Clean and accessible layout",
    ],
    learning: [
      "Building interactive applications with JavaScript",
      "Working with HTML and CSS",
      "Creating responsive web interfaces",
      "Structuring application functionality",
      "Using Git and GitHub for source control",
    ],
    repository: "https://github.com/bawumia23/task-manager",
    liveDemo: "https://bawumia23.github.io/task-manager/",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    symbol: "✓",
  },
  {
    id: "airbnb-clone",
    number: "05",
    name: "AirBnB Clone",
    category: "BACKEND ENGINEERING",
    description:
      "A Python-based accommodation management application developed as part of software engineering coursework, featuring object-oriented models, a command-line interface, and file storage.",
    overview:
      "This project applies object-oriented programming and modular Python development to build the foundations of an accommodation management application. It uses a command interpreter to interact with application objects and JSON-based file storage to persist data.",
    technologies: [
      "Python",
      "Object-Oriented Programming",
      "JSON",
      "Unit Testing",
    ],
    features: [
      "Interactive command-line console",
      "Object creation, retrieval, updating, and deletion",
      "Object-oriented data models",
      "JSON file-based persistence",
      "Unit testing for application components",
    ],
    learning: [
      "Object-oriented programming with Python",
      "Designing classes and inheritance",
      "Working with serialization and file storage",
      "Building a command interpreter",
      "Writing and organizing unit tests",
      "Structuring a multi-module Python application",
    ],
    repository: "https://github.com/bawumia23/AirBnB_clone",
    gradient: "from-orange-500 via-red-600 to-rose-700",
    symbol: "⌂",
  },
  {
    id: "airbnb-clone-v2",
    number: "06",
    name: "AirBnB Clone v2",
    category: "DATABASE & DEPLOYMENT",
    description:
      "An expanded backend engineering project introducing relational database storage, SQLAlchemy integration, and deployment workflows using Linux administration tools.",
    overview:
      "This project extends the AirBnB Clone learning experience into database engineering and deployment. It explores relational data storage with MySQL, ORM-based models using SQLAlchemy, and deployment automation using Fabric and Nginx.",
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
    gradient: "from-violet-600 via-purple-700 to-indigo-800",
    symbol: "DB",
    contribution:
      "Collaborative course assignment completed with a peer. I took primary responsibility for most of the implementation work, including substantial backend development, database integration, and deployment tasks.",
  },
];

export default async function ProjectDetails({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-16">

        {/* BACK TO PROJECTS */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition mb-10"
        >
          ← Back to Projects
        </Link>

        {/* PROJECT HERO */}
        <section className="mb-16">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-5">
            PROJECT {project.number} / {project.category}
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-7">
            {project.name}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              .
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            {project.description}
          </p>

        </section>

        {/* PROJECT PREVIEW */}
        <section
          className={`relative overflow-hidden h-64 md:h-80 rounded-3xl bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center shadow-2xl mb-16`}
        >
          <span className="text-white text-8xl font-black mb-5 drop-shadow-lg">
            {project.symbol}
          </span>

          <h2 className="text-white text-3xl md:text-4xl font-bold">
            {project.name}
          </h2>

          <p className="text-white/80 mt-3">
            Project {project.number}
          </p>

          <div className="absolute -bottom-24 -right-12 w-72 h-72 border border-white/20 rounded-full" />

          <div className="absolute -bottom-16 -right-6 w-52 h-52 border border-white/20 rounded-full" />
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 mb-10">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            THE PROJECT
          </p>

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg">
            {project.overview}
          </p>

        </section>

        {/* MY CONTRIBUTION */}
        {project.contribution && (
          <section className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8 md:p-10 mb-10">

            <p className="text-purple-300 text-sm font-semibold tracking-widest mb-4">
              COLLABORATIVE PROJECT
            </p>

            <h2 className="text-3xl font-bold mb-5">
              My Contribution
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              {project.contribution}
            </p>

          </section>
        )}

        {/* TECHNOLOGY STACK */}
        <section className="mb-10">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            TECHNOLOGY STACK
          </p>

          <h2 className="text-3xl font-bold mb-7">
            Tools & Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="bg-blue-500/10 border border-blue-500/30 text-blue-300 px-5 py-3 rounded-xl font-semibold"
              >
                {technology}
              </span>
            ))}
          </div>

        </section>

        {/* KEY FEATURES */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 mb-10">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            WHAT IT OFFERS
          </p>

          <h2 className="text-3xl font-bold mb-8">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 bg-slate-800/70 border border-slate-700 rounded-xl p-5"
              >
                <span className="text-emerald-400 text-xl">
                  ✓
                </span>

                <p className="text-slate-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* LEARNING OUTCOMES */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 mb-12">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            MY DEVELOPMENT JOURNEY
          </p>

          <h2 className="text-3xl font-bold mb-8">
            What I Learned
          </h2>

          <div className="space-y-5">
            {project.learning.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>

                <p className="text-slate-300 pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* PROJECT ACTIONS */}
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            EXPLORE THIS PROJECT
          </p>

          <h2 className="text-3xl font-bold mb-5">
            Interested in My Work?
          </h2>

          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Explore the source code, discover my other projects,
            or get in touch to discuss opportunities and collaboration.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-3 rounded-xl font-semibold transition hover:-translate-y-1"
              >
                Live Demo ↗
              </a>
            )}

            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-cyan-400 px-6 py-3 rounded-xl font-semibold transition"
            >
              View Source Code ↗
            </a>

            <Link
              href="/projects"
              className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl font-semibold transition"
            >
              More Projects
            </Link>

            <a
              href="mailto:bawumia91@gmail.com"
              className="border border-slate-600 hover:border-purple-400 px-6 py-3 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>

          </div>

        </section>

      </div>
    </main>
  );
}

