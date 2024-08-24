import React, { useState, useRef, useEffect } from "react";
import style from "./cart.module.scss";
import { TbHttpDelete } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { MdHorizontalRule } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
export default function CartFinishItem() {
  const book = [
    {
      id: 1,
      title: "臺灣的勝算",
      img: "/images/book/lover.png",
      type: "台灣歷史",
      count: 5,
      price: 700,
    },
    {
      id: 2,
      title: "天才的人間力",
      img: "/images/book/lover.png",
      type: "人文生活",
      count: 2,
      price: 500,
    },
    {
      id: 3,
      title: "魔杖之外",
      img: "/images/book/lover.png",
      type: "自然科學",
      count: 1,
      price: 200,
    },
    {
      id: 4,
      title: "魔杖之外",
      img: "/images/book/lover.png",
      type: "自然科學",
      count: 1,
      price: 200,
    },
  ];
  const [closeContent, setCloseContent] = useState(false);

  return (
    <div className={`${style.col_cart_item} ${style.w100}`}>
      <button
        onClick={() => setCloseContent(!closeContent)}
        className={style.cart_item_header}
      >
        {closeContent ? <FaCaretUp /> : <FaCaretDown />}
        點擊後，收起下方內容
        {closeContent ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      <div
        className={`${style.cart_item_content} ${
          closeContent ? style.open : style.close
        }`}
      >
        {book.map((v) => (
          <div className={`${style.cart_item_content_book} `} key={v.id}>
            <img src={v.img} />
            <div className={style.cart_item_title}>
              <div>{v.title}</div>
              <div>{v.type}</div>
            </div>
            <div className={style.cart_item_price}>
              <MdAttachMoney />
              {v.price}
            </div>

            <div className={style.cart_item_quantity}>X2</div>
          </div>
        ))}
      </div>
    </div>
  );
}
