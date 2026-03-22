import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const role = (session.user as any)?.role;

  if (role !== "ADMIN") {
    redirect("/portal/dashboard");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--sanhs-green)] mb-2">
        Admin Dashboard
      </h1>
      <p className="text-gray-500 text-sm">School management overview.</p>

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {[
          { href: "/admin/students", label: "Students", icon: "👩‍🎓", count: "245" },
          { href: "/admin/teachers", label: "Teachers", icon: "👨‍🏫", count: "18" },
          { href: "/admin/grades", label: "Grade Management", icon: "📝", count: "" },
          { href: "/admin/announcements", label: "Announcements", icon: "📢", count: "" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[var(--sanhs-green)]/30 transition-all"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <h3 className="font-semibold text-gray-900">{item.label}</h3>
            {item.count && (
              <p className="text-xs text-gray-400 mt-1">{item.count} total</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
