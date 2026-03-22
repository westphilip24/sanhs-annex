"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/enrollment", label: "Enrollment" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--sanhs-silver)]/30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Top bar */}
      <div className="bg-[var(--sanhs-green)] text-white text-xs px-4 py-1.5 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📍 Sayre Highway, Kadingilan, Bukidnon, Philippines</span>
          <span>📞 +63 954 885 2407 | ✉️ cabadiangannex@gmail.com</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[var(--sanhs-green)] leading-tight text-sm">
                SANHS Annex
              </div>
              <div className="text-[10px] text-[var(--sanhs-silver-dark)] leading-tight">
                Cabadiangan, Kadingilan
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--sanhs-green)] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/portal"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-green)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--sanhs-green-dark)]"
            >
              Parent / Student Portal
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--sanhs-green)] hover:bg-gray-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/portal"
              className="block mx-3 mt-2 px-4 py-2 text-sm font-semibold text-center bg-[var(--sanhs-green)] text-white rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Parent / Student Portal
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
