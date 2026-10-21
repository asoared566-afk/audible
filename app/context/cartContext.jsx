// app/context/CartContext.tsx  (or components/CartContext.tsx)
"use client";

import { createContext, useContext, useState } from "react";
import { products } from "@/data/audiophile-data";



const CartContext = createContext();

export function CartProvider({ children }) {
  const [carts, setCarts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (product, qty = 1) => {
    if (!product) return;

    setCarts((prev) => {
      const alreadyExists = prev.find(
        (item) => item.id === product.id
      );


      if (alreadyExists) {
        return prev.map(item => (
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        ));
      }

      return [...prev, { ...product, quantity: qty }];
    });

    setQuantity((prev) => prev + qty);
  };

  const removeAll = () => {
    setCarts([]);
    setQuantity(0);
  };


  const  quantityChange = (product, num) => {
    // let items = carts.find(item => item.id === id);

    if (!product) return;

    setCarts((prev) =>{
      const updatedCarts = prev
        .map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + num } : i
        )
        .filter(i => i.quantity > 0)

        return updatedCarts;
  })

  }

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    setQuantity((prev) => {
      if (prev <= 1) {
        setCarts([]);
        return 0;
      }
      return prev - 1;
    });
  };

  return (
    <CartContext.Provider
      value={{ carts, quantity, setCarts, addToCart, removeAll, increase, setQuantity, decrease, quantityChange }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}