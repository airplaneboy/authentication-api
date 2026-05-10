"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();

        if (!res.ok) {
          router.push("/login");
          return;
        }

        setUser(data.user);
      } catch {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [router]);

  async function handleLogout() {
    setMessage("");

    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (!res.ok) {
        setMessage("Logout failed");
        return;
      }

      router.push("/login");
    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <p className="text-lg font-semibold">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <ThemeToggle />

      <section className="mx-auto flex min-h-[85vh] max-w-4xl items-center justify-center">
        <div
          className="w-full rounded-4xl border p-8 shadow-2xl backdrop-blur-xl md:p-12"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className="mb-3 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                Protected Route
              </p>

              <h1 className="text-3xl font-black md:text-5xl">Dashboard</h1>

              <p className="mt-3" style={{ color: "var(--muted)" }}>
                You can only see this page after logging in.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-xl px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1"
              style={{
                background: "var(--primary)",
              }}
            >
              Logout
            </button>
          </div>

          {message && (
            <p
              className="mb-5 rounded-xl border p-3 text-sm font-medium"
              style={{
                background: "var(--accent-soft)",
                borderColor: "var(--card-border)",
              }}
            >
              {message}
            </p>
          )}

          <div className="grid gap-5 md:grid-cols-3">
            <div
              className="rounded-2xl border p-5"
              style={{
                background: "var(--input)",
                borderColor: "var(--card-border)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
                Name
              </p>
              <p className="mt-2 text-lg font-bold">{user?.name}</p>
            </div>

            <div
              className="rounded-2xl border p-5"
              style={{
                background: "var(--input)",
                borderColor: "var(--card-border)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
                Email
              </p>
              <p className="mt-2 break-all text-lg font-bold">{user?.email}</p>
            </div>

            <div
              className="rounded-2xl border p-5"
              style={{
                background: "var(--input)",
                borderColor: "var(--card-border)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
                Role
              </p>
              <p className="mt-2 text-lg font-bold">{user?.role}</p>
            </div>
          </div>

       
        </div>
      </section>
    </main>
  );
}