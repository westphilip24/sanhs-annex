"use client";

const schedule = [
  { time: "7:00 – 7:30", subject: "Flag Ceremony", room: "Ground Floor", days: "M-F" },
  { time: "7:30 – 8:30", subject: "Mathematics", room: "Room 201", days: "MWF" },
  { time: "7:30 – 8:30", subject: "Science", room: "Room 201", days: "TTh" },
  { time: "8:30 – 9:30", subject: "English", room: "Room 201", days: "MWF" },
  { time: "9:30 – 9:45", subject: "Snack Break", room: "—", days: "M-F" },
  { time: "9:45 – 10:45", subject: "Filipino", room: "Room 201", days: "MWF" },
  { time: "9:45 – 10:45", subject: "MAPEH", room: "Room 201", days: "TTh" },
  { time: "10:45 – 11:45", subject: "Araling Panlipunan", room: "Room 201", days: "MWF" },
  { time: "11:45 – 12:45", subject: "TLE", room: "Room 201", days: "TTh" },
  { time: "12:45 – 1:15", subject: "Lunch Break", room: "—", days: "M-F" },
  { time: "1:15 – 2:15", subject: "MAPEH", room: "Room 201", days: "MWF" },
  { time: "1:15 – 2:15", subject: "Araling Panlipunan", room: "Room 201", days: "TTh" },
];

export default function SchedulePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">My Class Schedule</h1>
        <p className="text-gray-500 text-sm mt-1">
          Grade 10 — Balik-Hand 10-A · School Year 2025-2026
        </p>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-6">
        {["MWF = Monday, Wednesday, Friday", "TTh = Tuesday, Thursday"].map((l) => (
          <span key={l} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {l}
          </span>
        ))}
      </div>

      {/* Schedule table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--sanhs-green)] text-white">
              <th className="text-left px-4 py-3 font-semibold">Time</th>
              <th className="text-left px-4 py-3 font-semibold">Subject</th>
              <th className="text-left px-4 py-3 font-semibold">Room</th>
              <th className="text-center px-4 py-3 font-semibold">Days</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((s, i) => (
              <tr
                key={i}
                className={`border-b border-gray-50 last:border-0 ${
                  s.subject.includes("Break") ? "bg-gray-50/50" : ""
                }`}
              >
                <td className="px-4 py-3 text-gray-600 font-mono text-xs whitespace-nowrap">
                  {s.time}
                </td>
                <td className={`px-4 py-3 font-medium ${
                  s.subject.includes("Break")
                    ? "text-gray-400 italic"
                    : "text-gray-900"
                }`}>
                  {s.subject}
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{s.room}</td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs font-medium text-[var(--sanhs-gold-dark)] bg-[var(--sanhs-gold)]/10 px-2 py-0.5 rounded">
                    {s.days}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
