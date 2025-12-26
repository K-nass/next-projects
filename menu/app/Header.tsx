"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("s") || "");
  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/?s=${value}`);
  }
  return (
    <nav className="flex justify-between items-center mb-10">
      <Link href="/" className="flex items-center">
        <Image src="./logo.svg" width={100} height={100} alt="website logo" />
        <span className="text-2xl font-bold text-green-500">Food</span>
      </Link>
      <form onSubmit={onSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-400 transition"
        />
        <button className="px-6 py-2 bg-green-500 text-white rounded cursor-pointer font-bold hover:bg-green-800">
          Search
        </button>
      </form>
    </nav>
  );
}
