
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tajudeen Bawumia",
  description:
    "Learn about Tajudeen Bawumia's journey from education into software engineering, professional experience, technical skills and passion for building digital solutions.",
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

const technicalSkills = [
  {
    category: "Programming languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend development",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend and databases",
    skills: ["MySQL", "SQLAlchemy", "REST APIs"],
  },
  {
    category: "Development tools",
    skills: ["Git", "GitHub", "Linux", "Fabric", "Nginx"],
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I believe good software starts with understanding the people, needs and problems behind a project.",
  },
  {
    number: "02",
    title: "Build with purpose",
    description:
      "I focus on practical solutions, readable code and applications that offer genuine value.",
  },
  {
    number: "03",
    title: "Learn continuously",
    description:
      "I approach new technologies with curiosity, experimentation and a willingness to improve.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* PAGE INTRODUCTION */}
        <section className="border-b border-[var(--border)] py-20 md:py-24">

          <p className="mb-6 text-xs font-semibold tracking-[0.16em] text-[var(--accent-soft)]">
            ABOUT / MY STORY
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            A background in education.
            <span className="block text-[var(--accent-bg)]">
              A future in engineering.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
            I&apos;m Tajudeen Bawumia, an aspiring full-stack developer
            from Ghana. My journey into technology is driven by curiosity,
            problem-solving and a desire to build useful digital solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-[var(--accent-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Explore my projects →
            </Link>

            <a
              href="/resume.pdf"
              download="Tajudeen_Bawumia_CV.pdf"
              className="rounded-lg border border-[var(--border-strong)] px-6 py-3.5 text-sm font-medium text-[var(--text-high)] transition-colors hover:border-[var(--accent-bg)] hover:text-white"
            >
              Download my CV ↓
            </a>
          </div>

        </section>

        {/* PERSONAL STORY */}
        <section className="grid gap-12 border-b border-[var(--border)] py-20 md:grid-cols-[0.75fr_1.25fr] md:gap-20 md:py-24">

          {/* PROFILE */}
          <div>

            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-xl border border-[var(--chip-border)] bg-[var(--surface-raised)] md:mx-0">
              <Image
                src="/profile.jpg"
                alt="Tajudeen Bawumia"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 380px"
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-xs tracking-wide text-[var(--text-subtle)]">
              TAJUDEEN BAWUMIA / SOFTWARE DEVELOPMENT
            </p>

          </div>

          {/* STORY */}
          <div>

            <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
              THE JOURNEY
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Different experiences. One continuous learning journey.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-[var(--text-muted)]">

              <p>
                My professional background is in education, where I
                developed experience in teaching, physical education,
                health and sports coaching.
              </p>

              <p>
                Working in education taught me the importance of
                communication, patience, accountability and adapting
                to different learning needs. These experiences continue
                to influence how I approach challenges and collaborate
                with others.
              </p>

              <p>
                Over time, my interest in technology developed into
                a commitment to learning software engineering.
                I began building my programming knowledge and applying
                what I learned through practical projects.
              </p>

              <p>
                Today, I am developing my capabilities across frontend
                development, backend engineering and database systems.
                I enjoy understanding how applications work as complete
                systems, from the user interface to the data behind it.
              </p>

              <p className="text-[var(--text-high)]">
                My goal is to become a well-rounded software engineer
                who builds dependable, accessible and useful applications.
              </p>

            </div>

          </div>

        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="border-b border-[var(--border)] py-20 md:py-24">

          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-20">

            <div>
              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
                PROFESSIONAL BACKGROUND
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What education taught me.
              </h2>
            </div>

            <div>

              <p className="text-lg leading-8 text-[var(--text-high)]">
                Working as an educator and sports coach has helped me
                develop skills that remain relevant as I move into
                software engineering.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {[
                  {
                    title: "Communication",
                    description:
                      "Explaining ideas clearly and working with different people.",
                  },
                  {
                    title: "Problem-solving",
                    description:
                      "Breaking challenges into manageable steps and finding practical solutions.",
                  },
                  {
                    title: "Collaboration",
                    description:
                      "Working with colleagues, learners and teams towards shared goals.",
                  },
                  {
                    title: "Accountability",
                    description:
                      "Taking responsibility for tasks, progress and continuous improvement.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-t border-[var(--chip-border)] pt-4"
                  >
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* TECHNICAL SKILLS */}
        <section className="border-b border-[var(--border)] py-20 md:py-24">

          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
              TECHNICAL DEVELOPMENT
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technologies I work with.
            </h2>

            <p className="mt-5 leading-7 text-[var(--text-muted)]">
              Technologies I have been learning and applying through
              coursework, practical projects and independent development.
            </p>
          </div>

          <div>
            {technicalSkills.map((group, index) => (
              <div
                key={group.category}
                className="grid gap-4 border-t border-[var(--border)] py-6 sm:grid-cols-[220px_1fr] sm:gap-10"
              >

                <div className="flex items-start gap-3">
                  <span className="text-xs tabular-nums text-[#778293]">
                    0{index + 1}
                  </span>

                  <h3 className="text-sm font-semibold text-[var(--text-high)]">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[#abb5c3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* DEVELOPMENT PRINCIPLES */}
        <section className="border-b border-[var(--border)] py-20 md:py-24">

          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
              HOW I APPROACH MY WORK
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Principles behind the process.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-t border-[var(--chip-border)] pt-5"
              >

                <span className="text-sm tabular-nums text-[var(--accent-bg)]">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                  {principle.description}
                </p>

              </article>
            ))}

          </div>

        </section>

        {/* CONTACT */}
        <section className="py-20 md:py-24">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

            <div className="max-w-2xl">

              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[var(--accent-soft)]">
                WHAT&apos;S NEXT
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-5 leading-8 text-[var(--text-muted)]">
                I am open to internship opportunities, collaborations
                and opportunities to grow through meaningful software
                engineering work.
              </p>

            </div>

            <a
              href="mailto:bawumia91@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-lg bg-[var(--accent-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Contact me ↗
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)]">

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

            <Link
              href="/projects"
              className="hover:text-white transition-colors"
            >
              Explore projects →
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}

