import Link from "next/link";

// Placeholder data — will be replaced with DB queries
const announcements = [
  {
    id: "1",
    title: "Mid-Year Enrollment Now Open for SY 2025-2026",
    excerpt: "Enroll now for second semester SY 2025-2026",
    isPinned: true,
    target: "ALL",
  },
  {
    id: "2",
    title: "Grand Alumni Homecoming — December 5, 2025",
    excerpt: "Calling all alumni! Join us on December 5, 2025",
    isPinned: true,
    target: "ALL",
  },
];

const events = [
  {
    id: "1",
    title: "Intramurals 2025",
    date: "July 30, 2025",
    type: "SPORTS",
    location: "SANHS Annex Grounds",
  },
  {
    id: "2",
    title: "Grand Alumni Homecoming",
    date: "December 5, 2025",
    type: "CULTURAL",
    location: "SANHS Annex",
  },
];

const stats = [
  { value: "500+", label: "Enrolled Students" },
  { value: "25+", label: "Teachers & Staff" },
  { value: "10+", label: "Years of Service" },
  { value: "6", label: "SHS Tracks Offered" },
];

const shsTracks = [
  {
    name: "ABM",
    fullName: "Accountancy, Business & Management",
    description: "Prepares students for business, accounting, and entrepreneurship careers.",
    icon: "📊",
  },
  {
    name: "HUMSS",
    fullName: "Humanities and Social Sciences",
    description: "Develops critical thinking, communication, and social awareness.",
    icon: "📚",
  },
  {
    name: "HE",
    fullName: "Home Economics",
    description: "Equips students with skills in food service, hospitality, and tourism.",
    icon: "🍳",
  },
  {
    name: "SPA",
    fullName: "Special Program in the Arts",
    description: "Nurtures artistic talent in music, visual arts, dance, and theater.",
    icon: "🎨",
  },
];

const news = [
  {
    id: "1",
    title: "JERU Team Wins 1st Place — Municipal Olympics 2025",
    excerpt: "Our student-athletes bring home gold from the Municipal Olympics.",
    slug: "jeru-team-municipal-olympics-2025",
    date: "March 2025",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[var(--sanhs-green)] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          {/* School badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-5 py-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-sm font-bold">SA</span>
            </div>
            <span className="text-sm font-medium">DepEd Region X — Northern Mindanao</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            San Andres National High School
            <br />
            <span className="text-[var(--sanhs-gold)]">Cabadiangan Annex</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Serving the youth of Kadingilan, Bukidnon with quality public education since 2015. 
            Nurturing minds, building futures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-gold)] px-6 py-3 text-base font-bold text-[var(--sanhs-green-dark)] shadow-lg transition-transform hover:scale-105"
            >
              Enroll Now — SY 2025-2026
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[var(--sanhs-green)]"
            >
              Student / Parent Portal
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Announcement Banner */}
      {announcements.filter(a => a.isPinned).length > 0 && (
        <section className="bg-[var(--sanhs-gold)]/10 border-b border-[var(--sanhs-gold)]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--sanhs-gold-dark)]">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--sanhs-gold)] animate-pulse" />
                Announcement
              </span>
              <div className="flex-1 space-y-1">
                {announcements.filter(a => a.isPinned).map((a) => (
                  <Link
                    key={a.id}
                    href="/news"
                    className="block text-sm font-medium text-[var(--sanhs-green-dark)] hover:text-[var(--sanhs-green)] transition-colors"
                  >
                    📌 {a.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--sanhs-green)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--sanhs-silver-dark)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--sanhs-green)] mb-4">
                Welcome to SANHS Annex
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  San Andres National High School — Cabadiangan Annex is a public secondary 
                  school committed to providing accessible, quality education to the youth 
                  of Kadingilan and surrounding barangays in Bukidnon Province.
                </p>
                <p>
                  As part of the DepEd K-12 program, we offer Grades 7–10 (Junior High School) 
                  and Grades 11–12 (Senior High School) with specialized tracks including 
                  ABM, HUMSS, HE, and our Special Program in the Arts (SPA).
                </p>
                <p>
                  Our dedicated teachers and staff work tirelessly to ensure every student 
                  receives the guidance and resources they need to succeed academically 
                  and become responsible citizens.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--sanhs-green-dark)]"
                >
                  Learn More About Us →
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--sanhs-green)] px-5 py-2.5 text-sm font-semibold text-[var(--sanhs-green)] transition-colors hover:bg-[var(--sanhs-green)] hover:text-white"
                >
                  View Academics
                </Link>
              </div>
            </div>

            {/* School info card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[var(--sanhs-green)] text-white px-6 py-4">
                <h3 className="font-bold">School Information</h3>
              </div>
              <div className="p-6 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--sanhs-gold)] mt-0.5">🏫</span>
                  <div>
                    <div className="font-medium text-gray-900">School ID</div>
                    <div className="text-gray-500">314926 | DepEd Division of Bukidnon</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--sanhs-gold)] mt-0.5">👨‍🏫</span>
                  <div>
                    <div className="font-medium text-gray-900">School Head</div>
                    <div className="text-gray-500">Michael V. Beliganio</div>
                    <div className="text-gray-400 text-xs">+63 917 586 6617</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--sanhs-gold)] mt-0.5">📍</span>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-500">Sayre Highway, Cabadiangan, Kadingilan, 8713 Bukidnon</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--sanhs-gold)] mt-0.5">⏰</span>
                  <div>
                    <div className="font-medium text-gray-900">Office Hours</div>
                    <div className="text-gray-500">Monday – Friday, 8:00 AM – 5:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--sanhs-gold)] mt-0.5">📱</span>
                  <div>
                    <div className="font-medium text-gray-900">Contact</div>
                    <div className="text-gray-500">+63 954 885 2407</div>
                    <div className="text-gray-400">cabadiangannex@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHS Tracks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--sanhs-green)] mb-3">
              Senior High School Tracks
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose from our four specialized tracks designed to prepare you for 
              college and career success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shsTracks.map((track) => (
              <div
                key={track.name}
                className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-[var(--sanhs-gold)]/30"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="font-bold text-[var(--sanhs-green)] mb-1">
                  {track.name}
                </h3>
                <div className="text-xs font-medium text-[var(--sanhs-gold-dark)] mb-3 uppercase tracking-wide">
                  {track.fullName}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 text-[var(--sanhs-green)] font-semibold hover:text-[var(--sanhs-gold-dark)] transition-colors"
            >
              Enroll in SHS → Learn about requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Events & News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[var(--sanhs-green)]">
                  Upcoming Events
                </h2>
                <Link href="/events" className="text-sm font-medium text-[var(--sanhs-gold-dark)] hover:text-[var(--sanhs-green)]">
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[var(--sanhs-gold)]/10 flex flex-col items-center justify-center">
                      <div className="text-xs font-bold text-[var(--sanhs-gold-dark)] uppercase">
                        {event.date.split(" ")[0]}
                      </div>
                      <div className="text-lg font-bold text-[var(--sanhs-green)]">
                        {event.date.split(" ")[1].replace(",", "")}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">
                        📍 {event.location}
                      </div>
                      <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--sanhs-gold)]/10 text-[var(--sanhs-gold-dark)]">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[var(--sanhs-green)]">
                  Latest News
                </h2>
                <Link href="/news" className="text-sm font-medium text-[var(--sanhs-gold-dark)] hover:text-[var(--sanhs-green)]">
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="block rounded-lg border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-xs font-medium text-[var(--sanhs-gold-dark)] mb-1">
                      {item.date}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--sanhs-green)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our School Community?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Enrollment for School Year 2025-2026 is now open. New students, 
            transferees, and shiftees are welcome!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-gold)] px-6 py-3 text-base font-bold text-[var(--sanhs-green-dark)] shadow-lg transition-transform hover:scale-105"
            >
              Start Enrollment Inquiry
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[var(--sanhs-green)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
