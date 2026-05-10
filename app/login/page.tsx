"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      setMessage("Login successful");
      router.push("/dashboard");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <ThemeToggle />

      <section className="mx-auto flex min-h-[85vh] max-w-md items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-4xl border p-8 shadow-2xl backdrop-blur-xl"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="mb-8 text-center">
            <p
              className="mb-3 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              Welcome back
            </p>

            <h1 className="text-3xl font-black">Login</h1>

            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Access your protected dashboard.
            </p>
          </div>

          {message && (
            <p
              className="mb-5 rounded-xl border p-3 text-center text-sm font-medium"
              style={{
                background: "var(--accent-soft)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)",
              }}
            >
              {message}
            </p>
          )}

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border p-3 outline-none transition focus:scale-[1.01]"
                style={{
                  background: "var(--input)",
                  borderColor: "var(--input-border)",
                  color: "var(--foreground)",
                }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border p-3 outline-none transition focus:scale-[1.01]"
                style={{
                  background: "var(--input)",
                  borderColor: "var(--input-border)",
                  color: "var(--foreground)",
                }}
                placeholder="Enter your password"
              />
            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl px-5 py-3 font-bold text-white shadow-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                background: "var(--primary)",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p
            className="mt-6 text-center text-sm"
            style={{ color: "var(--muted)" }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-bold underline"
              style={{ color: "var(--accent)" }}
            >
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}