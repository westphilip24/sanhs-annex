import { auth } from "@/auth";

export default async function PortalDashboardPage() {
  const session = await auth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">
          Welcome back{session?.user?.name ? `, ${session.user.name.split(" ")[0]}` : ""}!
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Here&apos;s an overview of your account.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Current Quarter", value: "Q3", icon: "📅", color: "bg-[var(--sanhs-green)]" },
          { label: "School Year", value: "2025-2026", icon: "🏫", color: "bg-[var(--sanhs-gold)]" },
          { label: "Attendance", value: "98%", icon: "✅", color: "bg-blue-500" },
          { label: "Avg. Grade", value: "1.5", icon: "📊", color: "bg-purple-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center text-lg`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-xs text-gray-400">{stat.label}</div>
                <div className="font-bold text-gray-900">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { href: "/portal/grades", label: "View Grades", icon: "📝", desc: "Check your quarterly and semester grades" },
          { href: "/portal/attendance", label: "Attendance Record", icon: "📋", desc: "View your attendance history" },
          { href: "/portal/schedule", label: "Class Schedule", icon: "🗓️", desc: "View your weekly class schedule" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[var(--sanhs-green)]/30 transition-all group"
          >
            <div className="text-2xl mb-2">{link.icon}</div>
            <h3 className="font-semibold text-gray-900 group-hover:text-[var(--sanhs-green)]">
              {link.label}
            </h3>
            <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
          </a>
        ))}
      </div>

      {/* Recent announcements */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-[var(--sanhs-green)] mb-4">
          Recent Announcements
        </h2>
        <div className="space-y-3">
          {[
            { title: "Mid-Year Enrollment Now Open", date: "March 2025", pinned: true },
            { title: "Intramurals 2025 — July 30", date: "March 2025", pinned: false },
          ].map((a, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center gap-2">
                {a.pinned && <span className="text-xs">📌</span>}
                <h3 className="text-sm font-medium text-gray-900">{a.title}</h3>
              </div>
              <p className="text-xs text-gray-400 mt-1">{a.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
