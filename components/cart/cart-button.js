import React from "react";
import style from "./cart.module.scss";
export default function CartButton({ name, handlePay }) {
  return (
    <div className={style.r_cart_btn}>
      <button className="pixel-border-yellow bg-yellow">返回購物</button>
      {name && (
        <button className="pixel-border-yellow bg-yellow" onClick={handlePay}>
          {name}
        </button>
      )}
    </div>
  );
}
