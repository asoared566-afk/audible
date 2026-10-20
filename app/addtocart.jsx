// components/AddToCartButton.tsx
"use client";

import { useCart } from "@/app/context/cartContext.jsx";
import { useState } from "react";

export default function AddToCartButton({product}) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1); // local quantity picker if you want one

  return (
    <div>
      {/* optional quantity controls */}
      <button onClick={() => addToCart(product, qty)}>
        ADD TO CART
      </button>
    </div>
  );
}