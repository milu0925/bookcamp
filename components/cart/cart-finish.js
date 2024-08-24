import React from "react";
import style from "./cart.module.scss";
import CartFinishTotal from "./cart-finish-total";
import CartButton from "./cart-button";
import CartFinishItem from "./cart-finish-item";
export default function CartFinish() {
  return (
    <div className={style.col_cart_function}>
      <CartFinishItem />
      <CartFinishTotal />
      <CartButton />
    </div>
  );
}
