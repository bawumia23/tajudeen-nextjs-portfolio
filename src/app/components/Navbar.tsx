
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#303740] bg-[#111315]/95 backdrop-blur-md text-[#f0f0eb]">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[76px] flex-col justify-between gap-4 py-3 sm:flex-row sm:items-center">

          <Link
            href="/"
            aria-label="Tajudeen Bawumia - Home"
            className="flex w-fit items-center gap-3"
          >
            <span className="text-3xl font-black italic tracking-[-0.12em] text-[#a8c1ff]">
              TB
            </span>

            <span className="border-l border-[#454d58] pl-3">
              <span className="block text-sm font-semibold tracking-tight text-[#f0f0eb] sm:text-base">
                Tajudeen Bawumia
              </span>
              <span className="mt-0.5 block text-[10px] tracking-[0.12em] text-[#9ca6b4]">
                ASPIRING FULL-STACK DEVELOPER
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          >
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors ${
                    isActive
                      ? "font-semibold text-[#a8c1ff]"
                      : "text-[#a5abb4] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/#contact"
              className="rounded-lg border border-[#485568] px-4 py-2.5 font-medium text-[#e0e4eb] transition-colors hover:border-[#91aff5] hover:text-white"
            >
              Let&apos;s Connect →
            </Link>
          </nav>

        </div>
      </div>

    </header>
  );
}

