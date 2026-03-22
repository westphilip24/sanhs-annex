import type { Metadata } from "next";
import EnrollmentForm from "@/components/enrollment-form";

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

            <EnrollmentForm />
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
