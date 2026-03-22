"use client";

import { useState } from "react";

const mockInquiries = [
  {
    id: "1",
    learner: "Maria Clara S. Santos",
    gradeLevel: "Grade 7",
    guardian: "Juan Santos",
    guardianPhone: "+63 912 345 6789",
    preferredYear: "2025-2026",
    status: "CONTACTED",
    submittedAt: "2026-03-15",
  },
  {
    id: "2",
    learner: "Pedro M. Reyes",
    gradeLevel: "Grade 11",
    guardian: "Elena Reyes",
    guardianPhone: "+63 915 678 9012",
    preferredYear: "2025-2026",
    status: "PENDING",
    submittedAt: "2026-03-18",
  },
  {
    id: "3",
    learner: "Ana L. Cruz",
    gradeLevel: "Grade 8",
    guardian: "Carlos Cruz",
    guardianPhone: "+63 917 789 0123",
    preferredYear: "2025-2026",
    status: "ENROLLED",
    submittedAt: "2026-03-10",
  },
];

const statusConfig: Record<string, { label: string; class: string }> = {
  PENDING: { label: "Pending", class: "bg-amber-100 text-amber-700" },
  CONTACTED: { label: "Contacted", class: "bg-blue-100 text-blue-700" },
  ENROLLED: { label: "Enrolled", class: "bg-green-100 text-green-700" },
  REJECTED: { label: "Rejected", class: "bg-red-100 text-red-700" },
};

export default function AdminInquiriesPage() {
  const [inquiries] = useState(mockInquiries);
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL"
    ? inquiries
    : inquiries.filter(i => i.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">Enrollment Inquiries</h1>
          <p className="text-gray-500 text-sm">Manage incoming enrollment inquiries and applications</p>
        </div>
        <div className="text-sm text-gray-500">
          {inquiries.length} total inquiries
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Pending", value: "5" },
          { label: "Contacted", value: "3" },
          { label: "Enrolled", value: "12" },
          { label: "Rejected", value: "1" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
            <div className="text-xs text-gray-400">{stat.label}</div>
            <div className="text-2xl font-bold text-[var(--sanhs-green)]">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["ALL", "PENDING", "CONTACTED", "ENROLLED", "REJECTED"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === f
                ? "bg-[var(--sanhs-green)] text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-[var(--sanhs-green)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {["Learner", "Grade", "Guardian", "Phone", "Year", "Status", "Date", ""].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((inq) => {
              const cfg = statusConfig[inq.status] || statusConfig.PENDING;
              return (
                <tr key={inq.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-900">{inq.learner}</td>
                  <td className="px-4 py-3 text-gray-600">{inq.gradeLevel}</td>
                  <td className="px-4 py-3 text-gray-600">{inq.guardian}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{inq.guardianPhone}</td>
                  <td className="px-4 py-3 text-gray-600">{inq.preferredYear}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${cfg.class}`}>
                      {cfg.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400">
                    {new Date(inq.submittedAt).toLocaleDateString("en-PH", {
                      month: "short", day: "numeric"
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-xs text-[var(--sanhs-green)] hover:underline">
                      View →
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
