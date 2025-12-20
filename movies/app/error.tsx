"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>

      <p className="text-gray-600 text-center">Please try again later.</p>

      <div className="flex gap-2">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Try Again
        </button>
        <Link href="/" className="px-4 py-2 bg-gray-200 rounded">
          Home
        </Link>
      </div>
    </div>
  );
}
