import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-white">
      <h1 className="text-4xl font-bold text-blue-500">404</h1>

      <p className="text-gray-600 text-center max-w-md">
        The page you are looking for does not exist or has been removed.
      </p>

      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
