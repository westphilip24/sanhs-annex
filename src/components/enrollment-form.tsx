"use client";

export default function EnrollmentForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const payload = {
          firstName: data.get("firstName") as string,
          lastName: data.get("lastName") as string,
          dateOfBirth: data.get("dateOfBirth") as string,
          gender: data.get("gender") as string,
          lrn: (data.get("lrn") as string) || undefined,
          previousSchool: (data.get("previousSchool") as string) || undefined,
          guardianName: data.get("guardianName") as string,
          guardianPhone: data.get("guardianPhone") as string,
          guardianEmail: (data.get("guardianEmail") as string) || undefined,
          relationship: data.get("relationship") as string,
          address: data.get("address") as string,
          gradeLevel: data.get("gradeLevel") as string,
          academicTrack: (data.get("academicTrack") as string) || undefined,
          preferredSchoolYear: data.get("preferredSchoolYear") as string,
        };
        fetch("/api/inquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then((r) => r.json() as Promise<{ id?: string }>)
          .then((res) => {
            if (res.id) {
              alert("Inquiry submitted! We will contact you within 2-3 business days.");
              form.reset();
            } else {
              alert("Something went wrong. Please try again.");
            }
          })
          .catch(() => alert("Network error. Please try again."));
      }}
    >
      {/* Learner Info */}
      <fieldset className="border border-gray-100 rounded-xl p-5">
        <legend className="text-sm font-bold text-[var(--sanhs-green)] px-2">
          Learner Information
        </legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">First Name *</label>
            <input name="firstName" type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="First name" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Last Name *</label>
            <input name="lastName" type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Last name" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Date of Birth *</label>
            <input name="dateOfBirth" type="date" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Gender *</label>
            <select name="gender" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">LRN (if returning)</label>
            <input name="lrn" type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="12-digit LRN" maxLength={12} />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Previous School</label>
            <input name="previousSchool" type="text" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Name of previous school" />
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
            <input name="guardianName" type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Full name" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Relationship *</label>
            <select name="relationship" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
              <option value="">Select</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Grandparent">Grandparent</option>
              <option value="Sibling">Sibling</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number *</label>
            <input name="guardianPhone" type="tel" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="+63 9XX XXX XXXX" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
            <input name="guardianEmail" type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="optional@email.com" />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-500 mb-1">Complete Address *</label>
          <input name="address" type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="House No., Street, Barangay, Municipality" />
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
            <select name="gradeLevel" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
              <option value="">Select grade</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">SHS Track (for Grades 11-12)</label>
            <select name="academicTrack" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
              <option value="">N/A (JHS)</option>
              <option value="ABM">ABM — Accountancy, Business &amp; Management</option>
              <option value="HUMSS">HUMSS — Humanities and Social Sciences</option>
              <option value="HE">HE — Home Economics</option>
              <option value="SPA">SPA — Special Program in the Arts</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-gray-500 mb-1">Preferred School Year *</label>
            <select name="preferredSchoolYear" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
              <option value="2025-2026">2025-2026</option>
              <option value="2026-2027">2026-2027</option>
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
  );
}
