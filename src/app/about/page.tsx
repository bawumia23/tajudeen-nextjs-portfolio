import type { Metadata } from "next";
import Link from "next/link";

const experiences = [
  {
    role: "Physical Education Teacher",
    organization: "Education Sector",
    period: "Previous Professional Experience",
    description:
      "Developed curriculum plans, assessed student performance, coached sports teams, and promoted teamwork, discipline, and leadership.",
    skills: ["Teaching", "Leadership", "Communication", "Teamwork"],
  },
  {
    role: "Full Stack Development Intern",
    organization: "Datheon IT Solutions",
    period: "2026",
    description:
      "Completed practical full-stack development training, working on web development concepts, application functionality, and software engineering practices.",
    skills: ["JavaScript", "React", "Next.js", "Web Development"],
  },
  {
    role: "Software Development Projects",
    organization: "Personal Projects",
    period: "Ongoing",
    description:
      "Building practical applications to strengthen my programming, frontend development, backend development, and problem-solving skills.",
    skills: ["Python", "JavaScript", "Next.js", "SQL", "Git"],
  },
];


export const metadata: Metadata = {
  title: "About Tajudeen Bawumia",
  description:
    "Learn about Tajudeen Bawumia's journey from education into software engineering, his technical skills, professional experience and passion for building digital solutions.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Tajudeen Bawumia | Developer Journey",
    description:
      "Discover my background, software engineering journey, skills and professional experience.",
    images: ["/opengraph-image.png"],
    url: "/about",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Tajudeen Bawumia",
    description:
      "Explore my journey into software engineering and my professional development.",
    images: ["/twitter-image.png"],
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* PAGE HEADING */}
        <section className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-4">
            GET TO KNOW ME
          </p>

          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h1>

          <p className="text-slate-400 text-lg">
            My journey, experience, and passion for technology.
          </p>
        </section>

        {/* MY STORY */}
        <section className="bg-slate-800 p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            My Story
          </h2>

          <p className="text-slate-300 leading-relaxed mb-4">
            I am Adamu Tajudeen Bawumia, an educator transitioning
            into software engineering. My background in education
            has helped me develop problem-solving, communication,
            teamwork, and leadership skills.
          </p>

          <p className="text-slate-300 leading-relaxed">
            My interest in technology has inspired me to explore
            software development and build practical applications.
            I enjoy learning new technologies and turning ideas
            into useful digital solutions.
          </p>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.role}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700"
              >
                <p className="text-blue-400 text-sm font-semibold mb-2">
                  {experience.period}
                </p>

                <h3 className="text-2xl font-bold mb-2">
                  {experience.role}
                </h3>

                <p className="text-slate-400 mb-4">
                  {experience.organization}
                </p>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-700 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL JOURNEY */}
        <section className="bg-slate-800 p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            My Technical Journey
          </h2>

          <p className="text-slate-300 leading-relaxed">
            I am developing my skills in Python, JavaScript,
            TypeScript, React, Next.js, SQL, MySQL, Git, and
            GitHub. I am particularly interested in building
            reliable backend systems and full-stack applications.
          </p>
        </section>

        {/* CAREER GOALS */}
        <section className="bg-slate-800 p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            My Career Goals
          </h2>

          <p className="text-slate-300 leading-relaxed">
            My goal is to become a skilled software engineer,
            contribute to meaningful technology projects,
            collaborate with other developers, and continuously
            grow through practical experience.
          </p>
        </section>

        {/* CONTACT AND RESUME */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-5">
            Let&apos;s Connect
          </h2>

          <p className="text-slate-300 mb-8">
            I am open to learning opportunities, internships,
            collaborations, and exciting projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:bawumia91@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>

            <Link
              href="/projects"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition"
            >
              Explore My Projects
            </Link>

            <a
              href="/resume.pdf"
              download="Tajudeen_Bawumia_CV.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
            >
              Download My CV
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

