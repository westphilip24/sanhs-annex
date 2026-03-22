"use client";

import { useState } from "react";

const mockStudents = [
  { id: "1", lrn: "314926123456", name: "Ana M. Belmonte", grade: "Grade 10", section: "Balik-Hand 10-A", gender: "Female", enrollmentStatus: "ENROLLED" },
  { id: "2", lrn: "314926123457", name: "Carlo R. Reyes", grade: "Grade 10", section: "Balik-Hand 10-A", gender: "Male", enrollmentStatus: "ENROLLED" },
  { id: "3", lrn: "314926123458", name: "Diana K. Garcia", grade: "Grade 9", section: "Balik-Hand 9-A", gender: "Female", enrollmentStatus: "ENROLLED" },
  { id: "4", lrn: "314926123459", name: "Eduardo S. Cruz", grade: "Grade 11", section: "ABM 11-A", gender: "Male", enrollmentStatus: "ENROLLED" },
  { id: "5", lrn: "314926123460", name: "Fiona L. Aquino", grade: "Grade 11", section: "HUMSS 11-A", gender: "Female", enrollmentStatus: "ENROLLED" },
];

export default function AdminStudentsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockStudents.filter(
    s => s.name.toLowerCase().includes(search.toLowerCase()) ||
         s.lrn.includes(search)
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">Students</h1>
          <p className="text-gray-500 text-sm">Manage student records and enrollment</p>
        </div>
        <button className="rounded-lg bg-[var(--sanhs-green)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)]">
          + Add Student
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or LRN..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Students", value: "245" },
          { label: "JHS", value: "180" },
          { label: "SHS", value: "65" },
          { label: "Enrolled", value: "240" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
            <div className="text-xs text-gray-400">{stat.label}</div>
            <div className="text-2xl font-bold text-[var(--sanhs-green)]">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {["LRN", "Name", "Grade & Section", "Gender", "Status", ""].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-4 py-3 font-mono text-xs text-gray-600">{s.lrn}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{s.name}</td>
                <td className="px-4 py-3 text-gray-600">{s.grade} — {s.section}</td>
                <td className="px-4 py-3 text-gray-600">{s.gender}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {s.enrollmentStatus}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-xs text-[var(--sanhs-green)] hover:underline">
                    View →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
