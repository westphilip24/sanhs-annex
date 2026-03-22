import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore our academic programs — Junior High School (Grades 7-10) and Senior High School (Grades 11-12) with specialized tracks.",
};

const jhsSubjects = [
  { grade: "Grade 7", subjects: ["Mathematics", "Science", "English", "Filipino", "Araling Panlipunan", "MAPEH", "TLE", "Edukasyon sa Pagpapakatao"] },
  { grade: "Grade 8", subjects: ["Mathematics", "Science", "English", "Filipino", "Araling Panlipunan", "MAPEH", "TLE", "Edukasyon sa Pagpapakatao"] },
  { grade: "Grade 9", subjects: ["Mathematics", "Science", "English", "Filipino", "Araling Panlipunan", "MAPEH", "TLE", "Edukasyon sa Pagpapakatao"] },
  { grade: "Grade 10", subjects: ["Mathematics", "Science", "English", "Filipino", "Araling Panlipunan", "MAPEH", "TLE", "Edukasyon sa Pagpapakatao"] },
];

const shsTracks = [
  {
    name: "ABM",
    fullName: "Accountancy, Business & Management",
    subjects: ["General Mathematics", "Business Mathematics", "Accounting", "Business Management", "Entrepreneurship", "Economics"],
    career: ["Accountant", "Business Manager", "Entrepreneur", "Financial Analyst", "Marketing Specialist"],
    icon: "📊",
  },
  {
    name: "HUMSS",
    fullName: "Humanities and Social Sciences",
    subjects: ["Humanities", "Social Science", "Philosophy", "Psychology", "Sociology", "World Literature"],
    career: ["Teacher", "Lawyer", "Journalist", "Counselor", "Government Worker"],
    icon: "📚",
  },
  {
    name: "HE",
    fullName: "Home Economics",
    subjects: ["Food and Beverage Services", "Bread and Pastry", "Household Services", "Tourism Concepts", "Hospitality Services"],
    career: ["Chef", "Pastry Chef", "Hotel Staff", "Tour Guide", "Caterer"],
    icon: "🍳",
  },
  {
    name: "SPA",
    fullName: "Special Program in the Arts",
    subjects: ["Music", "Visual Arts", "Dance", "Drama", "Creative Writing", "Media Arts"],
    career: ["Artist", "Musician", "Dancer", "Actor", "Art Teacher", "Graphic Designer"],
    icon: "🎨",
  },
];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--sanhs-green)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Academics</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Comprehensive K-12 programs designed to develop critical thinking, 
            character, and practical skills.
          </p>
        </div>
      </section>

      {/* JHS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center">
              <span className="text-lg">📖</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--sanhs-green)]">
              Junior High School (Grades 7–10)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jhsSubjects.map((grade) => (
              <div key={grade.grade} className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="bg-[var(--sanhs-green)] text-white px-4 py-3">
                  <h3 className="font-bold">{grade.grade}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-1.5">
                    {grade.subjects.map((subj) => (
                      <li key={subj} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[var(--sanhs-gold)] mt-0.5">•</span>
                        {subj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[var(--sanhs-gold)]/10 flex items-center justify-center">
              <span className="text-lg">🎓</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--sanhs-green)]">
              Senior High School (Grades 11–12)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shsTracks.map((track) => (
              <div key={track.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{track.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--sanhs-green)]">{track.name}</h3>
                      <p className="text-xs font-medium text-[var(--sanhs-gold-dark)] uppercase tracking-wide">
                        {track.fullName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Core Subjects</h4>
                    <ul className="space-y-1">
                      {track.subjects.map((s) => (
                        <li key={s} className="text-sm text-gray-600">• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Career Paths</h4>
                    <ul className="space-y-1">
                      {track.career.map((c) => (
                        <li key={c} className="text-sm text-gray-600">• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--sanhs-green)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-3">Ready to Enroll?</h2>
          <p className="text-white/80 mb-6">View enrollment requirements and submit your inquiry online.</p>
          <Link
            href="/enrollment"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--sanhs-gold)] px-6 py-3 font-bold text-[var(--sanhs-green-dark)] hover:bg-[var(--sanhs-gold-light)] transition-colors"
          >
            Go to Enrollment →
          </Link>
        </div>
      </section>
    </div>
  );
}
