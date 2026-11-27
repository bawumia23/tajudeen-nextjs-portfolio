"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="flex min-h-[76px] flex-col justify-between gap-4 py-3 sm:flex-row sm:items-center">

          {/* BRAND */}
          <Link
            href="/"
            aria-label="Tajudeen Bawumia - Home"
            className="flex w-fit items-center gap-3"
          >
            <span className="text-3xl font-black italic tracking-[-0.12em] text-[var(--accent)]">
              TB
            </span>

            <span className="border-l border-[var(--border-strong)] pl-3">
              <span className="block text-sm font-semibold tracking-tight text-[var(--foreground)] sm:text-base">
                Tajudeen Bawumia
              </span>

              <span className="mt-0.5 block text-[10px] tracking-[0.12em] text-[var(--text-subtle)]">
                ASPIRING FULL-STACK DEVELOPER
              </span>
            </span>
          </Link>

          {/* NAVIGATION AND THEME TOGGLE */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">

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
                        ? "font-semibold text-[var(--accent)]"
                        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/#contact"
                className="rounded-lg border border-[var(--border-strong)] px-4 py-2.5 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
              >
                Let&apos;s Connect →
              </Link>
            </nav>

            {/* DAY / NIGHT MODE BUTTON */}
            <ThemeToggle />

          </div>
        </div>
      </div>
    </header>
  );
}
