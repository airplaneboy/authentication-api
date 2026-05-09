import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <ThemeToggle />

      <section className="mx-auto flex min-h-[85vh] max-w-5xl items-center justify-center">
        <div
          className="w-full overflow-hidden rounded-[2rem] border p-8 shadow-2xl backdrop-blur-xl md:p-14"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="mb-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              Backend Project 1
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Authentication API
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              A modern authentication system built with Next.js, MongoDB, JWT,
              secure cookies, and Tailwind CSS.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-xl px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1"
                style={{
                  background: "var(--primary)",
                }}
              >
                Create Account
              </Link>

              <Link
                href="/login"
                className="rounded-xl border px-7 py-3 font-bold backdrop-blur transition hover:-translate-y-1"
                style={{
                  borderColor: "var(--card-border)",
                  color: "var(--foreground)",
                }}
              >
                Login
              </Link>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                "JWT Authentication",
                "MongoDB Database",
                "Protected Routes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border p-5 text-sm font-semibold shadow-sm"
                  style={{
                    background: "var(--input)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}