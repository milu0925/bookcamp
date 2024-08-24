import React from "react";
import style from "./book.module.scss";
import { MdAttachMoney } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
export default function AllBook() {
  const books = [
    {
      id: 1,
      name: "旅遊小幫手",
      price: "300",
      image: "/images/book/lover.png",
    },
    {
      id: 2,
      name: "現代文學指南",
      price: "350",
      image: "/images/book/lover.png",
    },
    {
      id: 3,
      name: "快速學習技巧",
      price: "250",
      image: "/images/book/lover.png",
    },
    {
      id: 4,
      name: "健康生活方式",
      price: "400",
      image: "/images/book/lover.png",
    },
    {
      id: 5,
      name: "創意寫作指南",
      price: "320",
      image: "/images/book/lover.png",
    },
    {
      id: 6,
      name: "經典小說精選",
      price: "450",
      image: "/images/book/lover.png",
    },
    {
      id: 7,
      name: "城市建築探索",
      price: "380",
      image: "/images/book/lover.png",
    },
    {
      id: 8,
      name: "科幻小說冒險",
      price: "390",
      image: "/images/book/lover.png",
    },
    {
      id: 9,
      name: "歷史事件全覽",
      price: "500",
      image: "/images/book/lover.png",
    },
    {
      id: 10,
      name: "藝術設計基礎",
      price: "420",
      image: "/images/book/lover.png",
    },
    {
      id: 11,
      name: "心理學入門",
      price: "310",
      image: "/images/book/lover.png",
    },
    {
      id: 12,
      name: "金融投資策略",
      price: "520",
      image: "/images/book/lover.png",
    },
    {
      id: 13,
      name: "冒險故事集",
      price: "330",
      image: "/images/book/lover.png",
    },
    {
      id: 14,
      name: "全球美食之旅",
      price: "370",
      image: "/images/book/lover.png",
    },
    {
      id: 15,
      name: "家庭料理秘籍",
      price: "340",
      image: "/images/book/lover.png",
    },
    {
      id: 16,
      name: "現代詩歌選集",
      price: "280",
      image: "/images/book/lover.png",
    },
    {
      id: 17,
      name: "音樂理論與實踐",
      price: "450",
      image: "/images/book/lover.png",
    },
    {
      id: 18,
      name: "攝影藝術欣賞",
      price: "410",
      image: "/images/book/lover.png",
    },
    {
      id: 19,
      name: "編程語言入門",
      price: "390",
      image: "/images/book/lover.png",
    },
    {
      id: 20,
      name: "經濟學原理",
      price: "460",
      image: "/images/book/lover.png",
    },
    {
      id: 21,
      name: "環保意識提升",
      price: "300",
      image: "/images/book/lover.png",
    },
    {
      id: 22,
      name: "運動健身指南",
      price: "350",
      image: "/images/book/lover.png",
    },
    {
      id: 23,
      name: "兒童故事集",
      price: "290",
      image: "/images/book/lover.png",
    },
    {
      id: 24,
      name: "天文學入門",
      price: "370",
      image: "/images/book/lover.png",
    },
    {
      id: 25,
      name: "職場成功指南",
      price: "450",
      image: "/images/book/lover.png",
    },
    {
      id: 26,
      name: "自我提升手冊",
      price: "310",
      image: "/images/book/lover.png",
    },
    {
      id: 27,
      name: "數學概念與應用",
      price: "320",
      image: "/images/book/lover.png",
    },
    {
      id: 28,
      name: "自然科學探索",
      price: "490",
      image: "/images/book/lover.png",
    },
    {
      id: 29,
      name: "哲學思辨入門",
      price: "370",
      image: "/images/book/lover.png",
    },
    {
      id: 30,
      name: "語言學基礎",
      price: "430",
      image: "/images/book/lover.png",
    },
  ];
  return (
    <div className={style.l_all_book}>
      <div
        className={`${style.r_function} pixel-border-purple bg-bright-purple`}
      >
        <div>
          <span>篩選</span>
          <button>熱銷</button>
          <button>最新</button>
        </div>
        <div>
          <span>價格</span>
          <select className="pixel-border-black" autocomplete="off">
            <option>高到低</option>
            <option>低到高</option>
          </select>
        </div>
        <></>
      </div>
      <div className={style.r_books}>
        {books.map((v, i) => (
          <div key={i} data-id={v.id}>
            <div className={`${style.r_book} pixel-border-white bg-white`}>
              <img alt={`${v.name}-${i}`} src={v.image} />
              <div className={style.r_book_title}>{v.name}</div>
              <div className="price-area">
                <div className="pixel-d-purple bg-dark-purple">
                  <MdAttachMoney />
                  {v.price}元
                </div>
                <button className="pixel-border-add">
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.r_book_pagination}></div>
    </div>
  );
}
