
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    id: "01",
    slug: "portfolio",
    name: "Developer Portfolio",
    category: "PERSONAL PROJECT",
    description:
      "A modern personal portfolio showcasing my development journey, technical skills, and software engineering projects.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    symbol: "</>",
    previewTitle: "Tajudeen.dev",
    previewText: "Building digital experiences.",
  },
  {
    id: "02",
    slug: "weather-dashboard",
    name: "Weather Dashboard",
    category: "WEB APPLICATION",
    description:
      "A weather application designed to display weather information for different locations.",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    symbol: "☁",
    previewTitle: "Weather Dashboard",
    previewText: "Explore weather information.",
  },
  {
    id: "03",
    slug: "ecommerce-store",
    name: "E-commerce Store",
    category: "WEB APPLICATION",
    description:
      "An online shopping application featuring product listings and shopping cart functionality.",
    technologies: ["JavaScript", "HTML", "CSS", "FakeStore API"],
    gradient: "from-fuchsia-600 via-purple-600 to-pink-600",
    symbol: "🛍",
    previewTitle: "Online Shopping",
    previewText: "Discover products and shop.",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SQL",
  "MySQL",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 items-center gap-14 py-16">

          <div>
            <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Software Engineering Journey
            </div>

            <p className="text-blue-400 font-semibold tracking-widest mb-4">
              HELLO, WORLD! I&apos;M
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Tajudeen
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Bawumia.
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Aspiring Full Stack Developer
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              I am transitioning from education into software engineering.
              I enjoy building web applications, solving problems, and
              transforming ideas into useful digital experiences.
            </p>

            {/* MAIN BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1"
              >
                Explore My Work →
              </Link>

              <Link
                href="#contact"
                className="border border-slate-600 hover:border-blue-400 text-white px-6 py-3 rounded-xl transition duration-300 hover:-translate-y-1"
              >
                Let&apos;s Connect
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap items-center gap-6 mt-9">
              <a
                href="https://github.com/bawumia23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition font-medium"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/adamu-tajudeen-bawumia-557a3876/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition font-medium"
              >
                LinkedIn ↗
              </a>

              <a
                href="/resume.pdf"
                download="Tajudeen_Bawumia_CV.pdf"
                className="text-slate-400 hover:text-blue-400 transition font-medium"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110" />

              <div className="relative bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 p-1 rounded-full shadow-2xl shadow-blue-500/20">
                <div className="bg-slate-950 rounded-full p-2">
                  <Image
                    src="/profile.jpg"
                    alt="Professional profile photograph of Tajudeen Bawumia"
                    width={340}
                    height={340}
                    priority
                    className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 bg-slate-800 border border-slate-700 px-5 py-3 rounded-2xl shadow-xl">
                <p className="text-blue-400 font-bold text-sm">
                  BUILD. LEARN. GROW.
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Always improving.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-16" />

        {/* SKILLS SECTION */}
        <section className="py-12">

          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold tracking-widest mb-3">
              MY TOOLKIT
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Technologies I Work With
            </h2>

            <p className="text-slate-400 mt-4">
              Tools and technologies I am learning and using to build applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group bg-slate-900 border border-slate-800 hover:border-blue-500/60 rounded-xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                <span className="text-blue-400 font-semibold group-hover:text-cyan-300 transition">
                  {skill}
                </span>
              </div>
            ))}
          </div>

        </section>

        {/* PROJECTS SECTION */}
        <section className="py-20">

          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-widest mb-3">
                SELECTED WORK
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Projects<span className="text-blue-400">.</span>
              </h2>

              <p className="text-slate-400 mt-4 max-w-xl">
                A selection of applications and projects from my software
                development journey.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-blue-400 hover:text-cyan-300 font-semibold transition"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:-translate-y-2 transition duration-300 shadow-xl shadow-black/10"
              >

                {/* PROJECT VISUAL PREVIEW */}
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}>
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative flex justify-between items-start">
                    <span className="text-white/80 text-xs font-bold tracking-widest">
                      PROJECT {project.id}
                    </span>

                    <span className="text-white/80 text-xs border border-white/30 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative flex flex-col items-center justify-center h-32">
                    <span className="text-white text-5xl font-black mb-3 drop-shadow-lg">
                      {project.symbol}
                    </span>

                    <p className="text-white font-bold text-xl">
                      {project.previewTitle}
                    </p>

                    <p className="text-white/80 text-sm mt-1">
                      {project.previewText}
                    </p>
                  </div>

                  <div className="absolute -bottom-16 -right-12 w-48 h-48 border border-white/20 rounded-full" />
                  <div className="absolute -bottom-12 -right-8 w-36 h-36 border border-white/20 rounded-full" />
                </div>

                {/* PROJECT DETAILS */}
                <div className="p-7">

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                    {project.name}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed min-h-16">
                    {project.description}
                  </p>

                  {/* TECHNOLOGY TAGS */}
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

                  {/* PROJECT BUTTON */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 mt-7 text-blue-400 hover:text-cyan-300 font-semibold transition"
                  >
                    View Project Details
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </Link>

                </div>
              </article>
            ))}

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center my-16 scroll-mt-20"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="relative">

            <p className="text-blue-400 text-sm font-semibold tracking-widest mb-4">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Amazing Together.
              </span>
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              I am open to internships, learning opportunities,
              collaborations, and exciting software development projects.
              Let&apos;s connect and create something meaningful.
            </p>

            <a
              href="mailto:bawumia91@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1"
            >
              Send Me an Email →
            </a>

            <p className="text-slate-400 text-sm mt-6">
              bawumia91@gmail.com
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}

