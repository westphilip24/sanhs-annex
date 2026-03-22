"use client";

import { useState } from "react";

const mockGradeEntries = [
  { id: "1", subject: "Mathematics — Grade 10", teacher: "Maria Santos", classSection: "Balik-Hand 10-A", quarter: "Q3", status: "DRAFT" },
  { id: "2", subject: "Science — Grade 10", teacher: "Juan Cruz", classSection: "Balik-Hand 10-A", quarter: "Q3", status: "SUBMITTED" },
  { id: "3", subject: "English — Grade 10", teacher: "Elena Reyes", classSection: "Balik-Hand 10-A", quarter: "Q3", status: "APPROVED" },
  { id: "4", subject: "Filipino — Grade 10", teacher: "Pedro Aquino", classSection: "Balik-Hand 10-A", quarter: "Q3", status: "DRAFT" },
];

export default function AdminGradesPage() {
  const [entries] = useState(mockGradeEntries);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">Grade Management</h1>
          <p className="text-gray-500 text-sm">Q3 · School Year 2025-2026</p>
        </div>
        <button className="rounded-lg bg-[var(--sanhs-green)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)]">
          + New Grade Entry
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Draft", value: "12", color: "text-amber-600" },
          { label: "Submitted", value: "8", color: "text-blue-600" },
          { label: "Approved", value: "45", color: "text-green-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
            <div className="text-xs text-gray-400">{stat.label}</div>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {["Subject / Class", "Teacher", "Quarter", "Status", ""].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{e.subject}</div>
                  <div className="text-xs text-gray-400">{e.classSection}</div>
                </td>
                <td className="px-4 py-3 text-gray-600">{e.teacher}</td>
                <td className="px-4 py-3 text-gray-600">{e.quarter}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    e.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : e.status === "SUBMITTED"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {e.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-xs text-[var(--sanhs-green)] hover:underline">
                    {e.status === "DRAFT" ? "Enter Grades →" : "View →"}
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
