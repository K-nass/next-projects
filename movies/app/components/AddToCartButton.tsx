"use client";

import { useCart } from "../context/CartContext";
import { Movie } from "../types/movie";
import { useState } from "react";

export default function AddToCartButton({ movie }: { movie: Movie }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(movie);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <button
            onClick={handleAddToCart}
            className={`py-2 px-4 font-bold text-white rounded-sm cursor-pointer capitalize transition-colors ${added ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-800"
                }`}
        >
            {added ? "Added to Cart" : "Add to Cart ($10)"}
        </button>
    );
}
