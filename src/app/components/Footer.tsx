import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 p-6 text-center mt-auto">
      <p>
        © {new Date().getFullYear()} Tajudeen. All rights reserved.
      </p>

      <p className="text-sm mt-2">
        Built with Next.js and Tailwind CSS.
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <Link
          href="https://github.com/bawumia23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/adamu-tajudeen-bawumia-557a3876"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}

