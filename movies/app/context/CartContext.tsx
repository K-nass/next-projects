"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Movie } from "../types/movie";

export interface CartItem {
  movie: Movie;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: number) => void;
  updateQuantity: (movieId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart items from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (movie: Movie) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.movie.id === movie.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.movie.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { movie, quantity: 1 }];
    });
  };

  const removeFromCart = (movieId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.movie.id !== movieId));
  };

  const updateQuantity = (movieId: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.movie.id === movieId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * 10, 0); // Mock price $10

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
