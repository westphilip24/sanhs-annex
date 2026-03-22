"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent! We will get back to you within 2 business days.");
        e.currentTarget.reset();
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
            placeholder="Juan"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
            placeholder="Dela Cruz"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
          placeholder="juan@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
          placeholder="+63 9XX XXX XXXX"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <select
          name="subject"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
        >
          <option value="Enrollment Inquiry">Enrollment Inquiry</option>
          <option value="Academic Concern">Academic Concern</option>
          <option value="Financial / Billing">Financial / Billing</option>
          <option value="Facility / Maintenance">Facility / Maintenance</option>
          <option value="Feedback / Suggestion">Feedback / Suggestion</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--sanhs-green)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
