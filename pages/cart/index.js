import React from "react";

import CartPart from "@/components/cart/cart-part";
import CartItem from "@/components/cart/cart-item";
import CartFunction from "@/components/cart/cart-function";
export default function Cart() {
  return (
    <>
      <CartPart active="data" />
      <div className="l-cart">
        <CartItem />
        <CartFunction />
      </div>
    </>
  );
}
