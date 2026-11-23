
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-5">

        {/* BRAND LOGO */}
        <Link
          href="/"
          aria-label="Tajudeen Bawumia Home"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Tajudeen Bawumia - Full Stack Developer"
            width={340}
            height={100}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-wrap items-center gap-5 md:gap-8">

          <Link
            href="/"
            className="text-blue-400 font-semibold hover:text-cyan-300 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-5 py-2.5 rounded-full font-semibold transition"
          >
            Let&apos;s Connect →
          </Link>

        </div>
      </div>
    </nav>
  );
}

