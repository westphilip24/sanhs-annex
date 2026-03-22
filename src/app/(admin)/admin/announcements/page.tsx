"use client";

import { useState } from "react";

const mockAnnouncements = [
  {
    id: "1",
    title: "Mid-Year Enrollment Now Open for SY 2025-2026",
    excerpt: "Enroll now for second semester SY 2025-2026",
    target: "ALL",
    isPinned: true,
    isPublished: true,
    publishedAt: "2026-03-01",
  },
  {
    id: "2",
    title: "Intramurals 2025 — July 30",
    excerpt: "Annual school intramurals will be held on July 30, 2025",
    target: "ALL",
    isPinned: false,
    isPublished: true,
    publishedAt: "2026-02-15",
  },
  {
    id: "3",
    title: "Grand Alumni Homecoming — December 5, 2025",
    excerpt: "Calling all alumni! Join us on December 5, 2025",
    target: "ALL",
    isPinned: true,
    isPublished: true,
    publishedAt: "2025-11-01",
  },
  {
    id: "4",
    title: "Q3 Exam Schedule — Draft",
    excerpt: "Quarterly examination schedule for Q3",
    target: "STUDENTS",
    isPinned: false,
    isPublished: false,
    publishedAt: null,
  },
];

const targets = ["ALL", "STUDENTS", "PARENTS", "TEACHERS", "PUBLIC"];

export default function AdminAnnouncementsPage() {
  const [announcements] = useState(mockAnnouncements);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("ALL");

  const filtered = announcements.filter(
    a => filter === "ALL" || a.target === filter
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">Announcements</h1>
          <p className="text-gray-500 text-sm">Create and manage school announcements</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-[var(--sanhs-green)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)]"
        >
          + New Announcement
        </button>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["ALL", "PUBLISHED", "DRAFT"].map((f) => (
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
              {["Title", "Target", "Pinned", "Status", "Published", ""].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{a.title}</div>
                  <div className="text-xs text-gray-400">{a.excerpt}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {a.target}
                  </span>
                </td>
                <td className="px-4 py-3">{a.isPinned ? "📌" : "—"}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    a.isPublished
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {a.isPublished ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {a.publishedAt
                    ? new Date(a.publishedAt).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" })
                    : "—"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    <button className="text-xs text-[var(--sanhs-green)] hover:underline">Edit</button>
                    <button className="text-xs text-red-500 hover:underline">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">New Announcement</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Title *</label>
                <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Announcement title" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Content *</label>
                <textarea rows={5} required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]" placeholder="Write your announcement..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Target Audience</label>
                  <select className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]">
                    {targets.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="flex items-end gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Pin this
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Publish now
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full rounded-lg bg-[var(--sanhs-green)] py-2.5 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)]">
                Create Announcement
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
