"use client";

import { useState } from "react";

const mockTeachers = [
  { id: "1", employeeId: "T-2024-001", name: "Maria Santos", department: "Mathematics", position: "Teacher I", gender: "Female", status: "Active" },
  { id: "2", employeeId: "T-2024-002", name: "Juan Cruz", department: "Science", position: "Teacher II", gender: "Male", status: "Active" },
  { id: "3", employeeId: "T-2024-003", name: "Elena Reyes", department: "English", position: "Teacher I", gender: "Female", status: "Active" },
  { id: "4", employeeId: "T-2024-004", name: "Pedro Aquino", department: "Araling Panlipunan", position: "Head Teacher III", gender: "Male", status: "Active" },
  { id: "5", employeeId: "T-2024-005", name: "Sofia Hernandez", department: "MAPEH", position: "Teacher I", gender: "Female", status: "Active" },
];

export default function AdminTeachersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockTeachers.filter(
    t => t.name.toLowerCase().includes(search.toLowerCase()) ||
         t.employeeId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">Teachers & Staff</h1>
          <p className="text-gray-500 text-sm">Manage faculty and staff records</p>
        </div>
        <button className="rounded-lg bg-[var(--sanhs-green)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)]">
          + Add Teacher
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or employee ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Faculty", value: "18" },
          { label: "JHS Teachers", value: "12" },
          { label: "SHS Teachers", value: "6" },
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
              {["Employee ID", "Name", "Department", "Position", "Gender", "Status", ""].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-4 py-3 font-mono text-xs text-gray-600">{t.employeeId}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                <td className="px-4 py-3 text-gray-600">{t.department}</td>
                <td className="px-4 py-3 text-gray-600">{t.position}</td>
                <td className="px-4 py-3 text-gray-600">{t.gender}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {t.status}
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
