"use client";

import { useRouter } from "next/navigation";

export default function Button({ label }: { label: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex-1 bg-gray-100 text-center text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-200 transition-colors"
    >
        {label}
    </button>
  );
}
