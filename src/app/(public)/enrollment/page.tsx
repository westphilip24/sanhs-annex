import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrollment",
  description: "Enroll at SANHS Annex for SY 2025-2026. New students, transferees, and shiftees welcome.",
};

const requirements = [
  { type: "New Students", items: ["Form 137 (SF10) from previous school", "PSA Birth Certificate", "2x2 ID photo (2 copies)", "Vaccination/Health Record", "Barangay Clearance"] },
  { type: "Transferees", items: ["Form 137 (SF10)", "PSA Birth Certificate", "2x2 ID photo (2 copies)", "Good Moral Certificate", "Vaccination/Health Record"] },
  { type: "SHS Shiftees", items: ["Form 137 (SF10) from JHS", "PSA Birth Certificate", "2x2 ID photo (2 copies)", "Previous report card"] },
];

const steps = [
  { step: 1, title: "Submit Inquiry", desc: "Fill out the online inquiry form below or visit the school registrar." },
  { step: 2, title: "Document Review", desc: "Submit required documents for evaluation by the admissions office." },
  { step: 3, title: "Interview", desc: "Parent/student interview with the school head or guidance counselor." },
  { step: 4, title: "Enrollment Confirmation", desc: "Receive your enrollment confirmation and class assignment." },
];

export default function EnrollmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--sanhs-green)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4 text-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--sanhs-gold)] animate-pulse" />
            Enrollment Open — SY 2025-2026
          </div>
          <h1 className="text-4xl font-bold mb-3">Enroll at SANHS Annex</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            New students, transferees, and shiftees are welcome. 
            Submit your inquiry below and our admissions team will contact you.
          </p>
        </div>
      </section>

      {/* Online Inquiry Form */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-2 text-center">
              Online Enrollment Inquiry
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              Fill out this form and our admissions team will contact you within 2–3 business days.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Learner Info */}
              <fieldset className="border border-gray-100 rounded-xl p-5">
                <legend className="text-sm font-bold text-[var(--sanhs-green)] px-2">
                  Learner Information
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">First Name *</label>
                    <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="First name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Last Name *</label>
                    <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Last name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Date of Birth *</label>
                    <input type="date" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Gender *</label>
                    <select required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
                      <option value="">Select gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">LRN (if returning)</label>
                    <input type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="12-digit LRN" maxLength={12} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Previous School</label>
                    <input type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Name of previous school" />
                  </div>
                </div>
              </fieldset>

              {/* Guardian Info */}
              <fieldset className="border border-gray-100 rounded-xl p-5">
                <legend className="text-sm font-bold text-[var(--sanhs-green)] px-2">
                  Parent / Guardian Information
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Guardian Name *</label>
                    <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Relationship *</label>
                    <select required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
                      <option value="">Select</option>
                      <option>Mother</option>
                      <option>Father</option>
                      <option>Grandparent</option>
                      <option>Sibling</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number *</label>
                    <input type="tel" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="+63 9XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                    <input type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="optional@email.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Complete Address *</label>
                  <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="House No., Street, Barangay, Municipality" />
                </div>
              </fieldset>

              {/* Enrollment Preference */}
              <fieldset className="border border-gray-100 rounded-xl p-5">
                <legend className="text-sm font-bold text-[var(--sanhs-green)] px-2">
                  Enrollment Preference
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Grade Level *</label>
                    <select required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
                      <option value="">Select grade</option>
                      <option>Grade 7</option>
                      <option>Grade 8</option>
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                      <option>Grade 11</option>
                      <option>Grade 12</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">SHS Track (for Grades 11-12)</label>
                    <select className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
                      <option value="">N/A (JHS)</option>
                      <option>ABM — Accountancy, Business & Management</option>
                      <option>HUMSS — Humanities and Social Sciences</option>
                      <option>HE — Home Economics</option>
                      <option>SPA — Special Program in the Arts</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Preferred School Year *</label>
                    <select required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
                      <option>2025-2026</option>
                      <option>2026-2027</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--sanhs-green)] px-4 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-[var(--sanhs-green-dark)]"
              >
                Submit Enrollment Inquiry
              </button>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you consent to SANHS Annex contacting you regarding your enrollment inquiry. 
                This is not a guarantee of enrollment.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-8 text-center">
            Enrollment Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {requirements.map((req) => (
              <div key={req.type} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-[var(--sanhs-green)] mb-3">{req.type}</h3>
                <ul className="space-y-2">
                  {req.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[var(--sanhs-gold)] flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-8 text-center">
            Enrollment Process
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)] text-white font-bold mx-auto mb-3 flex items-center justify-center">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-[var(--sanhs-gold)]/10 border-t border-[var(--sanhs-gold)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Need help with your enrollment inquiry?
          </p>
          <p className="text-sm text-gray-600">
            Call us at <span className="font-semibold">+63 954 885 2407</span> or 
            message us on <a href="https://facebook.com/cabadiangan.annex" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--sanhs-green)] hover:underline">Facebook</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
