import { useState, useEffect } from "react";
import style from "./advertise.module.scss";
import Link from "next/link";
import axios from "axios";

export default function Advertise(props) {
  const [advertises, setAdvertises] = useState([]);
  const [book, setBook] = useState([]);
  const [low, setLow] = useState([]);

  // 輪播大圖廣告
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3002/advertise/ad_size`)
          .then((res) => {
            setAdvertises(res.data.adData.data);
            setBook(res.data.book.book_id);
            setLow(res.data.lowprice.book_id);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={style.l_advertise}>
      <div
        className={`${style.advertise_arrow} ${style.advertise_arrow_rotate}`}
      >
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <Link className={`${style.col_advertise}`} href="/forum">
        <div className={`${style.col_advertise_bright}`}>
          <img alt="adverdise" src="/images/adverdise-1.svg" />
        </div>
      </Link>

      <div className={style.advertise_arrow}>
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
}
