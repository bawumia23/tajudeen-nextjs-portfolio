import type { Metadata } from "next";
import Link from "next/link";


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
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  repository: string;
  liveDemo?: string;
  gradient: string;
  symbol: string;
  contribution?: string;
};

const frontendProjects: Project[] = [
  {
    id: "01",
    slug: "portfolio",
    name: "Developer Portfolio",
    category: "PERSONAL PROJECT",
    description:
      "A personal developer portfolio showcasing my technical skills, experience, professional background, and software development journey.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/bawumia23/developer-portfolio",
    liveDemo: "https://bawumia23.github.io/developer-portfolio/",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    symbol: "</>",
  },
  {
    id: "02",
    slug: "weather-dashboard",
    name: "WeatherNow",
    category: "WEB APPLICATION",
    description:
      "A real-time weather dashboard designed to present weather forecasts and climate information through a user-friendly interface.",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    repository: "https://github.com/bawumia23/weather-dashboard",
    liveDemo: "https://weathernow-phi-five.vercel.app/",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    symbol: "☁",
  },
  {
    id: "03",
    slug: "ecommerce-store",
    name: "ShopEase",
    category: "E-COMMERCE APPLICATION",
    description:
      "An online shopping application featuring product listings and shopping cart functionality.",
    technologies: ["JavaScript", "HTML", "CSS", "FakeStore API"],
    repository: "https://github.com/bawumia23/ecommerce-store",
    liveDemo: "https://bawumia23.github.io/ecommerce-store/",
    gradient: "from-fuchsia-600 via-purple-600 to-pink-600",
    symbol: "🛍",
  },
  {
    id: "04",
    slug: "task-manager",
    name: "TaskFlow",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A responsive task management application built with HTML, CSS, and JavaScript to help users organize daily activities.",
    technologies: ["JavaScript", "HTML", "CSS"],
    repository: "https://github.com/bawumia23/task-manager",
    liveDemo: "https://bawumia23.github.io/task-manager/",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    symbol: "✓",
  },
];

const backendProjects: Project[] = [
  {
    id: "05",
    slug: "airbnb-clone",
    name: "AirBnB Clone",
    category: "BACKEND ENGINEERING",
    description:
      "A Python-based accommodation management application developed as part of software engineering coursework, featuring object-oriented models, a command-line interface, and file storage.",
    technologies: ["Python", "OOP", "JSON", "Unit Testing"],
    repository: "https://github.com/bawumia23/AirBnB_clone",
    gradient: "from-orange-500 via-red-600 to-rose-700",
    symbol: "⌂",
  },
  {
    id: "06",
    slug: "airbnb-clone-v2",
    name: "AirBnB Clone v2",
    category: "DATABASE & DEPLOYMENT",
    description:
      "An expanded backend engineering project introducing database storage, SQLAlchemy integration, and deployment workflows using Linux administration tools.",
    technologies: [
      "Python",
      "MySQL",
      "SQLAlchemy",
      "Fabric",
      "Nginx",
    ],
    repository: "https://github.com/bawumia23/AirBnB_clone_v2",
    gradient: "from-violet-600 via-purple-700 to-indigo-800",
    symbol: "DB",
    contribution:
      "Collaborative course assignment completed with a peer. I took primary responsibility for most of the implementation work, including substantial backend development, database integration, and deployment tasks.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:-translate-y-2 transition duration-300 shadow-xl shadow-black/10">

      {/* PROJECT VISUAL */}
      <div
        className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative flex justify-between items-center gap-2">
          <span className="text-white/80 text-xs font-bold tracking-widest">
            PROJECT {project.id}
          </span>

          <span className="text-white/90 text-xs border border-white/30 rounded-full px-3 py-1">
            {project.category}
          </span>
        </div>

        <div className="relative flex flex-col items-center justify-center h-40">
          <span className="text-white text-6xl font-black mb-3 drop-shadow-lg">
            {project.symbol}
          </span>

          <h3 className="text-white text-xl font-bold">
            {project.name}
          </h3>
        </div>

        <div className="absolute -bottom-20 -right-12 w-52 h-52 border border-white/20 rounded-full" />

        <div className="absolute -bottom-12 -right-5 w-36 h-36 border border-white/20 rounded-full" />
      </div>

      {/* PROJECT INFORMATION */}
      <div className="p-7">

        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
          {project.name}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed min-h-24">
          {project.description}
        </p>

        {/* MY CONTRIBUTION */}
        {project.contribution && (
          <div className="mt-5 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
            <p className="text-purple-300 text-xs font-semibold mb-2">
              MY CONTRIBUTION
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              {project.contribution}
            </p>
          </div>
        )}

        {/* TECHNOLOGY BADGES */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* PROJECT ACTIONS */}
        <div className="grid grid-cols-2 gap-3 mt-8 pt-5 border-t border-slate-800">

          {/* ALL SIX PROJECT DETAIL LINKS */}
          <Link
            href={`/projects/${project.slug}`}
            className="text-center bg-blue-600 hover:bg-blue-500 text-white px-3 py-3 rounded-lg font-semibold text-sm transition"
          >
            View Details
          </Link>

          {/* GITHUB REPOSITORY */}
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 px-3 py-3 rounded-lg font-semibold text-sm transition"
          >
            GitHub ↗
          </a>

          {/* LIVE DEMO */}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-3 rounded-lg font-semibold text-sm transition duration-300 hover:-translate-y-1"
            >
              Live Demo ↗
            </a>
          ) : (
            <p className="col-span-2 text-center text-slate-500 text-xs py-2">
              Source code available on GitHub
            </p>
          )}

        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* HERO SECTION */}
        <section className="text-center py-16">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            MY DEVELOPMENT PORTFOLIO
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            My Projects
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              .
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore my frontend applications, backend systems,
            database projects, and practical software engineering work.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <a
              href="#frontend-projects"
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold transition"
            >
              Explore Projects ↓
            </a>

            <Link
              href="/"
              className="border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl transition"
            >
              ← Back Home
            </Link>
          </div>
        </section>

        {/* PROJECT STATISTICS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <p className="text-4xl font-extrabold text-blue-400">06</p>
            <p className="text-slate-400 text-sm mt-2">
              Featured Projects
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <p className="text-4xl font-extrabold text-cyan-400">04</p>
            <p className="text-slate-400 text-sm mt-2">
              Live Applications
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <p className="text-4xl font-extrabold text-purple-400">02</p>
            <p className="text-slate-400 text-sm mt-2">
              Backend Projects
            </p>
          </div>

        </section>

        {/* FRONTEND PROJECTS */}
        <section
          id="frontend-projects"
          className="scroll-mt-24 mb-24"
        >

          <div className="mb-12">
            <p className="text-blue-400 text-sm font-semibold tracking-widest mb-3">
              WEB DEVELOPMENT
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Frontend & Full-Stack Applications
              <span className="text-blue-400">.</span>
            </h2>

            <p className="text-slate-400 mt-4">
              Interactive applications, user interfaces, and live projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </section>

        {/* BACKEND PROJECTS */}
        <section
          id="backend-projects"
          className="scroll-mt-24"
        >

          <div className="mb-12">
            <p className="text-purple-400 text-sm font-semibold tracking-widest mb-3">
              BACKEND & SYSTEMS ENGINEERING
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Backend Engineering Projects
              <span className="text-purple-400">.</span>
            </h2>

            <p className="text-slate-400 mt-4 max-w-2xl">
              Practical course projects exploring Python, object-oriented
              programming, database engineering, and deployment workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </section>

        {/* CONTACT SECTION */}
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 border border-blue-500/20 rounded-3xl p-10 md:p-14 text-center mt-24">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
            LET&apos;S COLLABORATE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Have an Interesting Idea?
          </h2>

          <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            I am open to internships, collaborations, and exciting
            software development opportunities.
          </p>

          <a
            href="mailto:bawumia91@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 hover:-translate-y-1"
          >
            Let&apos;s Work Together →
          </a>

        </section>

      </div>
    </main>
  );
}

