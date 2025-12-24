"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Your cart is empty</h1>
                <Link href="/" className="text-blue-600 hover:underline">
                    Go back to movies
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col gap-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.movie.id}
                            className="flex items-center justify-between border-b pb-6 last:border-b-0 last:pb-0"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w200/${item.movie.poster_path}`}
                                    alt={item.movie.title}
                                    width={80}
                                    height={120}
                                    className="rounded-md object-cover"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {item.movie.title}
                                    </h2>
                                    <p className="text-gray-600">Price: $10</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                                    <button
                                        onClick={() => updateQuantity(item.movie.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="font-medium w-8 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.movie.id, item.quantity + 1)}
                                        className="p-1 hover:bg-gray-100 rounded"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <p className="font-bold text-lg w-20 text-right">
                                    ${item.quantity * 10}
                                </p>
                                <button
                                    onClick={() => removeFromCart(item.movie.id)}
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t pt-6 flex flex-col items-end gap-4">
                    <div className="text-2xl font-bold text-gray-900">
                        Total: ${totalPrice}
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={clearCart}
                            className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition-colors"
                        >
                            Clear Cart
                        </button>
                        <button
                            onClick={() => alert("Checkout functionality coming soon!")}
                            className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
