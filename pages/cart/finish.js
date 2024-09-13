import React from "react";
import CartPart from "@/components/cart/cart-part";
import CartFinish from "@/components/cart/cart-finish";

export default function Finish() {

  return (
    <>
      <CartPart active="ok" />
      <div className="l-cart">
        <CartFinish />
      </div>
    </>
  );
}
