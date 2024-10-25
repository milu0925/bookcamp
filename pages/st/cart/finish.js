import React from "react";
import CartPart from "@/components/st/cart/cart-part";
import CartFinish from "@/components/st/cart/cart-finish";
import MainLayout from "@/components/layout/main-layout";
export default function Finish() {
  return (
    <MainLayout>
      <CartPart active="ok" />
      <div className="l-cart">
        <CartFinish />
      </div>
    </MainLayout>
  );
}
