"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      router.push("/portal/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--sanhs-green)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[var(--sanhs-green)]">
            SANHS Annex
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Cabadiangan, Kadingilan, Bukidnon
          </p>
        </div>

        {/* Login card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Sign in to your account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sanhs-green)]"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-2.5 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[var(--sanhs-green)] py-2.5 text-sm font-bold text-white hover:bg-[var(--sanhs-green-dark)] transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-3">
              Demo credentials:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { role: "Admin", email: "admin@sanhs.edu.ph" },
                { role: "Teacher", email: "m.santos@sanhs.edu.ph" },
                { role: "Parent", email: "j.delacruz@email.com" },
                { role: "Student", email: "a.belmonte@sanhs.edu.ph" },
              ].map((cred) => (
                <button
                  key={cred.email}
                  type="button"
                  onClick={() => {
                    setEmail(cred.email);
                    setPassword(
                      cred.role === "Admin"
                        ? "Admin@2026!"
                        : cred.role === "Teacher"
                        ? "Teacher@2026!"
                        : cred.role === "Parent"
                        ? "Parent@2026!"
                        : "Student@2026!"
                    );
                  }}
                  className="rounded border border-gray-200 px-2 py-1.5 text-gray-600 hover:border-[var(--sanhs-green)] hover:text-[var(--sanhs-green)] transition-colors text-left"
                >
                  <span className="font-medium">{cred.role}</span>
                  <br />
                  <span className="text-gray-400">{cred.email}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          <a href="/" className="hover:text-[var(--sanhs-green)]">
            ← Back to home
          </a>
        </p>
      </div>
    </div>
  );
}
