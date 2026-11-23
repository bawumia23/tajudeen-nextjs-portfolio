import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-blue-400 mb-4">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-4">
        Page Not Found
      </h2>

      <p className="text-slate-300 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        Return Home
      </Link>
    </main>
  );
}
