"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ============================================================
   HERO CAROUSEL
   ============================================================ */
const heroSlides = [
  {
    id: "1",
    title: "Enrollment Open — SY 2025-2026",
    subtitle: "New students and transferees welcome. Secure your slot today.",
    cta: "Enroll Now",
    ctaHref: "/enrollment",
    badge: "Announcement",
    badgeColor: "bg-[var(--sanhs-gold)]",
    textColor: "text-white",
    bgColor: "bg-[var(--sanhs-green)]",
  },
  {
    id: "2",
    title: "Grand Alumni Homecoming",
    subtitle: "December 5, 2025 — Calling all SANHS alumni!",
    cta: "Learn More",
    ctaHref: "/events",
    badge: "Event",
    badgeColor: "bg-[var(--sanhs-gold)]",
    textColor: "text-white",
    bgColor: "bg-[var(--sanhs-green-dark)]",
  },
  {
    id: "3",
    title: "JERU Team Wins 1st Place",
    subtitle: "Municipal Olympics 2025 — Making our school proud!",
    cta: "Read More",
    ctaHref: "/news",
    badge: "News",
    badgeColor: "bg-[var(--sanhs-gold)]",
    textColor: "text-white",
    bgColor: "bg-[var(--sanhs-green)]",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className={`relative overflow-hidden ${slide.bgColor} ${slide.textColor}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
        <span className={`inline-block mb-4 ${slide.badgeColor} text-[var(--sanhs-green-dark)] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full`}>
          {slide.badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-xl mx-auto mb-8">
          {slide.subtitle}
        </p>
        <Link
          href={slide.ctaHref}
          className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold shadow-lg transition-transform hover:scale-105 ${
            slide === heroSlides[0]
              ? "bg-[var(--sanhs-gold)] text-[var(--sanhs-green-dark)]"
              : "bg-white text-[var(--sanhs-green)]"
          }`}
        >
          {slide.cta} →
        </Link>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   ANNOUNCEMENT BANNER STRIP
   ============================================================ */
const bannerAnnouncements = [
  {
    id: "1",
    title: "Mid-Year Enrollment Now Open — SY 2025-2026",
    href: "/enrollment",
    pinned: true,
  },
  {
    id: "2",
    title: "Grand Alumni Homecoming — December 5, 2025",
    href: "/events",
    pinned: true,
  },
];

export function AnnouncementBanner() {
  const pinned = bannerAnnouncements.filter(a => a.pinned);

  if (pinned.length === 0) return null;

  return (
    <section className="bg-[var(--sanhs-gold)]/10 border-b border-[var(--sanhs-gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--sanhs-gold-dark)]">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--sanhs-gold)] animate-pulse" />
            Live
          </span>
          <div className="flex-1 space-y-0.5">
            {pinned.map((a) => (
              <Link
                key={a.id}
                href={a.href}
                className="block text-sm font-medium text-[var(--sanhs-green-dark)] hover:text-[var(--sanhs-green)] transition-colors truncate"
              >
                📌 {a.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COUNTDOWN TIMER
   ============================================================ */
// targetDate for countdown — set to school year 2025-2026 start
// const targetDate = new Date("2025-06-02T00:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return timeLeft;
}

interface CountdownProps {
  title: string;
  subtitle: string;
  target: Date;
  cta?: string;
  ctaHref?: string;
}

export function CountdownBanner({ title, subtitle, target, cta, ctaHref }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section className="bg-[var(--sanhs-green-dark)] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
        <div className="flex justify-center gap-4 sm:gap-6">
          {[
            { value: days, label: "Days" },
            { value: hours, label: "Hours" },
            { value: minutes, label: "Minutes" },
            { value: seconds, label: "Seconds" },
          ].map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="bg-white/10 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-1">
                <span className="text-2xl sm:text-3xl font-bold">{String(unit.value).padStart(2, "0")}</span>
              </div>
              <span className="text-xs text-white/60 uppercase tracking-wider">{unit.label}</span>
            </div>
          ))}
        </div>
        {cta && ctaHref && (
          <div className="text-center mt-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-gold)] px-6 py-2.5 text-sm font-bold text-[var(--sanhs-green-dark)] hover:bg-[var(--sanhs-gold-light)] transition-colors"
            >
              {cta} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   WELCOME MAT (First-time visitor overlay)
   Shown once per session via sessionStorage
   ============================================================ */
interface WelcomeMatProps {
  schoolName: string;
  message: string;
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function WelcomeMat({ schoolName, message, cta, ctaHref, secondaryCta, secondaryHref }: WelcomeMatProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("sanhs_welcome_shown");
    if (!hasSeen) {
      setVisible(true);
    }
  }, []);

  function handleDismiss() {
    sessionStorage.setItem("sanhs_welcome_shown", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[var(--sanhs-green)] mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">SA</span>
        </div>
        <h2 className="text-xl font-bold text-[var(--sanhs-green)] mb-2">
          Welcome to {schoolName}!
        </h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{message}</p>
        <div className="flex flex-col gap-3">
          <Link
            href={ctaHref}
            className="rounded-lg bg-[var(--sanhs-green)] py-2.5 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)] transition-colors"
            onClick={handleDismiss}
          >
            {cta} →
          </Link>
          {secondaryCta && secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:border-[var(--sanhs-green)] hover:text-[var(--sanhs-green)] transition-colors"
              onClick={handleDismiss}
            >
              {secondaryCta}
            </Link>
          )}
          <button
            onClick={handleDismiss}
            className="text-xs text-gray-400 hover:text-gray-600 mt-2"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CTA SECTION
   ============================================================ */
interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  bgColor?: string;
  textColor?: string;
}

export function CTASection({
  title, description,
  primaryCta, primaryHref,
  secondaryCta, secondaryHref,
  bgColor = "bg-[var(--sanhs-green)]",
  textColor = "text-white",
}: CTASectionProps) {
  return (
    <section className={`${bgColor} ${textColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className={`${textColor === "text-white" ? "text-white/80" : "text-gray-500"} max-w-xl mx-auto mb-8`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-gold)] px-6 py-3 text-base font-bold text-[var(--sanhs-green-dark)] shadow-lg hover:bg-[var(--sanhs-gold-light)] transition-colors"
          >
            {primaryCta} →
          </Link>
          {secondaryCta && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[var(--sanhs-green)] transition-colors"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
