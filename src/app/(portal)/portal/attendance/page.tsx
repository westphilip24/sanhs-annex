"use client";

const mockAttendance = [
  { date: "2026-03-21", status: "PRESENT", remarks: "" },
  { date: "2026-03-20", status: "PRESENT", remarks: "" },
  { date: "2026-03-19", status: "PRESENT", remarks: "" },
  { date: "2026-03-18", status: "LATE", remarks: "Arrived 8:15 AM" },
  { date: "2026-03-17", status: "PRESENT", remarks: "" },
  { date: "2026-03-14", status: "PRESENT", remarks: "" },
  { date: "2026-03-13", status: "ABSENT", remarks: "Excused — medical" },
  { date: "2026-03-12", status: "PRESENT", remarks: "" },
  { date: "2026-03-11", status: "PRESENT", remarks: "" },
  { date: "2026-03-10", status: "PRESENT", remarks: "" },
];

const statusConfig: Record<string, { label: string; class: string; icon: string }> = {
  PRESENT: { label: "Present", class: "bg-green-100 text-green-700", icon: "✅" },
  ABSENT: { label: "Absent", class: "bg-red-100 text-red-700", icon: "❌" },
  LATE: { label: "Late", class: "bg-amber-100 text-amber-700", icon: "⏰" },
  EXCUSED: { label: "Excused", class: "bg-blue-100 text-blue-700", icon: "📋" },
};

export default function AttendancePage() {
  const records = mockAttendance;
  const present = records.filter(r => r.status === "PRESENT").length;
  const absent = records.filter(r => r.status === "ABSENT").length;
  const late = records.filter(r => r.status === "LATE").length;
  const rate = Math.round((present / records.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">My Attendance</h1>
        <p className="text-gray-500 text-sm mt-1">
          School Year 2025-2026 · March 2026
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Present", value: present, icon: "✅", color: "text-green-600" },
          { label: "Absent", value: absent, icon: "❌", color: "text-red-600" },
          { label: "Late", value: late, icon: "⏰", color: "text-amber-600" },
          { label: "Rate", value: `${rate}%`, icon: "📊", color: "text-[var(--sanhs-green)]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
            <div className={`text-2xl mb-1 ${stat.color}`}>{stat.icon}</div>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Attendance table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Date</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-600">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => {
              const cfg = statusConfig[r.status] || statusConfig.PRESENT;
              return (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 text-gray-700 font-mono text-xs">
                    {new Date(r.date).toLocaleDateString("en-PH", {
                      weekday: "short", month: "short", day: "numeric"
                    })}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.class}`}>
                      {cfg.icon} {cfg.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    {r.remarks || "—"}
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
