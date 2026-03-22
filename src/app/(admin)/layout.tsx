import { auth } from "@/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin top bar */}
      <header className="bg-[var(--sanhs-green-dark)] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xs font-bold">SA</span>
            </div>
            <span className="font-bold text-sm">SANHS Annex Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60">
              {session?.user?.email}
            </span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
              {(session?.user as any)?.role || "ADMIN"}
            </span>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </div>
    </div>
  );
}
