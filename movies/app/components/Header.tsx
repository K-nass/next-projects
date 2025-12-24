"use client";

import { Heart, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <nav className="py-4">
      <ul className="flex justify-between items-center">
        <li>
          <Logo width={50} height={50} />
        </li>
        <li>
          <div className="flex justify-between items-center gap-5">
            <Link href="/cart" className="cursor-pointer relative">
              <ShoppingBag />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="cursor-pointer">
              <Heart />
            </button>
            <span>
              <input
                className="border py-1 pl-2 box-border rounded-sm placeholder-gray-300 focus:placeholder-gray-500"
                type="text"
                name="movie-name"
                placeholder="search..."
              />
            </span>
            <span>
              <Button label="search" />
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
