import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SANHS Annex — our history, mission, vision, and the dedicated team behind our school.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--sanhs-green)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">About SANHS Annex</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Building brighter futures for the youth of Kadingilan since 2015
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-6">Our History</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              San Andres National High School — Cabadiangan Annex was established in 2015 
              as an extension of San Andres National High School, serving the growing 
              educational needs of Cabadiangan and nearby barangays in the municipality 
              of Kadingilan, Province of Bukidnon.
            </p>
            <p>
              Recognizing the increasing population of students in the area, the 
              Department of Education approved the annex to provide accessible 
              secondary education without requiring students to travel long distances 
              to the main campus. Since then, SANHS Annex has grown from strength 
              to strength, now serving over 500 students from Grades 7 to 12.
            </p>
            <p>
              In SY 2025-2026, the school offers comprehensive Junior High School 
              (Grades 7-10) and Senior High School (Grades 11-12) programs with 
              specialized tracks in ABM, HUMSS, Home Economics, and the Special 
              Program in the Arts (SPA).
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--sanhs-green)] mb-3">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A public school that nurtures holistic development, producing 
                morally upright, academically competent, and socially responsible 
                individuals ready to serve their communities and nation.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--sanhs-gold)]/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--sanhs-green)] mb-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide inclusive, relevant, and quality secondary education 
                that empowers students with knowledge, skills, and values necessary 
                for lifelong learning and meaningful participation in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-8 text-center">
            School Leadership
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-[var(--sanhs-green)] mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MVB</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Michael V. Beliganio</h3>
              <p className="text-[var(--sanhs-gold-dark)] font-medium text-sm mb-2">School Head</p>
              <p className="text-sm text-gray-500">
                Lead Teacher III | DepEd Division of Bukidnon
              </p>
              <div className="mt-3 text-sm text-gray-500">
                📱 +63 917 586 6617
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DepEd Alignment */}
      <section className="py-12 bg-[var(--sanhs-green-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/70 text-sm">
            DepEd Region X — Northern Mindanao | District II, Kadingilan | School ID: 314926
          </p>
        </div>
      </section>
    </div>
  );
}
