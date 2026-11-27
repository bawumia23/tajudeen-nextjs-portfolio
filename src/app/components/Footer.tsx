import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t text-center transition-colors duration-200"
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--text-muted)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-10 sm:px-8 lg:px-10">

        {/* COPYRIGHT */}
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          © {new Date().getFullYear()} Tajudeen Bawumia. All rights reserved.
        </p>

        {/* DESCRIPTION */}
        <p
          className="text-xs"
          style={{ color: "var(--text-subtle)" }}
        >
          Designed and built with Next.js, React and Tailwind CSS.
        </p>

        {/* SOCIAL LINKS */}
        <nav
          aria-label="Footer navigation"
          className="mt-2 flex flex-wrap items-center justify-center gap-8 text-sm"
        >
          <Link
            href="https://github.com/bawumia23"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            GitHub ↗
          </Link>

          <Link
            href="https://www.linkedin.com/in/adamu-tajudeen-bawumia-557a3876/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            LinkedIn ↗
          </Link>
        </nav>

        {/* BRAND SIGNATURE */}
        <p
          className="mt-3 text-xs tracking-wide"
          style={{ color: "var(--text-subtle)" }}
        >
          Build. Learn. Innovate.
        </p>

      </div>
    </footer>
  );
}
