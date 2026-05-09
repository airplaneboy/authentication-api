import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Backend Authentication API
        </h1>

        <p className="text-gray-300 text-lg">
          A full authentication system built with Next.js, MongoDB, JWT, and
          Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/signup"
            className="bg-white text-gray-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-950"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
} 