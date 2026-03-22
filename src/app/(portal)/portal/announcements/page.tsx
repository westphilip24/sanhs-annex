"use client";

import { useState } from "react";

const mockAnnouncements = [
  {
    id: "1",
    title: "Mid-Year Enrollment Now Open for SY 2025-2026",
    excerpt: "Enroll now for second semester SY 2025-2026. New students and transferees are welcome.",
    target: "ALL",
    isPinned: true,
    publishedAt: "2026-03-01",
    isNew: true,
  },
  {
    id: "2",
    title: "Intramurals 2025 — July 30",
    excerpt: "Annual school intramurals will be held on July 30, 2025 at the school grounds.",
    target: "ALL",
    isPinned: false,
    publishedAt: "2026-02-15",
    isNew: false,
  },
  {
    id: "3",
    title: "Grand Alumni Homecoming — December 5, 2025",
    excerpt: "Calling all alumni! Join us on December 5, 2025 for the Grand Alumni Homecoming.",
    target: "ALL",
    isPinned: true,
    publishedAt: "2025-11-01",
    isNew: false,
  },
];

export default function PortalAnnouncementsPage() {
  const [selected, setSelected] = useState<typeof mockAnnouncements[0] | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">Announcements</h1>
        <p className="text-gray-500 text-sm mt-1">
          Stay updated with the latest news from SANHS Annex
        </p>
      </div>

      <div className="space-y-4">
        {mockAnnouncements.map((a) => (
          <div
            key={a.id}
            onClick={() => setSelected(a)}
            className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[var(--sanhs-green)]/30 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-3">
              {a.isPinned && (
                <span className="text-xs bg-[var(--sanhs-gold)]/10 text-[var(--sanhs-gold-dark)] px-2 py-0.5 rounded flex-shrink-0">
                  📌 Pinned
                </span>
              )}
              {a.isNew && (
                <span className="text-xs bg-[var(--sanhs-green)]/10 text-[var(--sanhs-green)] px-2 py-0.5 rounded flex-shrink-0">
                  New
                </span>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{a.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{a.excerpt}</p>
                <p className="text-xs text-gray-400">
                  {new Date(a.publishedAt).toLocaleDateString("en-PH", {
                    year: "numeric", month: "long", day: "numeric"
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selected.title}</h2>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(selected.publishedAt).toLocaleDateString("en-PH", {
                      year: "numeric", month: "long", day: "numeric"
                    })}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed text-sm">{selected.excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
