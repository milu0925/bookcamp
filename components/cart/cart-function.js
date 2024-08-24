import React from "react";
import style from "./cart.module.scss";
import CartPoint from "./cart-function-point";
import CartData from "./cart-function-data";
import CartTotal from "./cart-function-total";
import CartButton from "./cart-button";

import { useRouter } from "next/router";
export default function CartFunction() {
  const router = useRouter();
  const handlePay = () => {
    router.push("/cart/finish")
  };
  return (
    <div className={style.col_cart_function}>
      <CartPoint />
      <CartData />
      <CartTotal />
      <CartButton name="確認訂單" handlePay={handlePay} />
    </div>
  );
}
