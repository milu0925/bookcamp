import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import style from "./hot-list.module.scss";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import { MdAttachMoney } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
export default function HotList(props) {
  // 熱銷榜的書
  const [hotList, setHotList] = useState([]);
  // 抓到資料
  useEffect(() => {
    const data = async () => {
      try {
        await axios
          .get("http://localhost:3002/share/hotList")
          .then((res) => {
            setHotList(res.data.hot);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  const [slidesToShow, setSlidesToShow] = useState(1.2); // 初始值為 1

  useEffect(() => {
    // 監聽螢幕寬度的變化
    const handleResize = () => {
      // 根據螢幕寬度設置展示的張數
      if (window.innerWidth >= 1400) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2.5);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(1.7);
      } else {
        setSlidesToShow(1.2);
      }
    };

    // 監聽窗口大小變化事件
    window.addEventListener("resize", handleResize);

    // 初始調用一次以設置初始值
    handleResize();

    // 清除事件監聽
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div className={style.l_hotlist}>
      <div
        className={`${style.hotlist_side} ${style.side_left} bg-purple border-pixel`}
      >
        <div className={`${style.line_block}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        <div className={`${style.line_block} ${style.line_block_bottom}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </div>
      <div className={`${style.col_hotlist}`}>
        <Slider {...settings} className={style.custom_slider}>
          {hotList.map((item, index) => {
            return (
              <div key={index} className={style.hotlist_card}>
                <div>
                  <span className={style.hotlist_card_rank}>
                    <img alt="rank" src="/images/icon-pixel/no1_1.svg" />
                    <span className="border-pixel-w">
                      <div className="font-s">No.</div>
                      {index + 1}
                    </span>
                  </span>

                  <div
                    className={`${style.hotlist_card_content} pixel-border-purple bg-bright-purple`}
                  >
                    <Link href="/">
                      <img alt="book" src="/images/book/lover.png" />
                    </Link>
                    <div className={style.hotlist_btn_group}>
                      <div className={style.sale_block}>
                        銷售量<span>100</span>本
                      </div>
                      <div className="price-area">
                        <div className="pixel-d-purple bg-dark-purple">
                          <MdAttachMoney />
                          999元
                        </div>
                        <button className="pixel-border-add">
                          <FaCartPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        className={`${style.hotlist_side} ${style.side_right} bg-purple border-pixel`}
      >
        <div className={`${style.line_block}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        <div className={`${style.line_block} ${style.line_block_bottom}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </div>
    </div>
  );
}
