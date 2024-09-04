import React from "react";
import style from "./user.module.scss";
import { useAuth } from "@/hooks/auth-context";
import Link from "next/link";
export default function UserAside() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const { setAuth, auth } = useAuth();
  console.log(auth);

  return (
    <div className={style.col_user_aside}>
      <div className={style.user_aside_title}>
        <div>
          <img alt="default" src={`${domain}/images/egg.jpg`} />
          <span>{auth.user.name},歡迎回到會員中心!</span>
        </div>
      </div>
      <div className={style.user_aside_content}>
        <button className={`${style.collapse_btn} pixel-purple bg-purple`}>
          會員資訊
          <i className="fa-solid fa-caret-down"></i>
        </button>
        <div
          className="collapse w-100"
          id="collapse"
          data-bs-parent="#accordion"
        >
          <div className="card card-body member-details">
            <ul>
              <li>
                <Link href="/member/update">修改資料</Link>
              </li>
              <li>
                <Link href="/member/reset-password">修改密碼</Link>
              </li>
              <li>
                <Link href="/member/mycollect">我的收藏</Link>
              </li>
            </ul>
          </div>
        </div>
        <button className={`${style.collapse_btn} pixel-purple bg-purple`}>
          消費紀錄
          <i className="fa-solid fa-caret-down"></i>
        </button>
        <div
          className="collapse w-100"
          id="collapse1"
          data-bs-parent="#accordion"
        >
          <div className="card card-body member-details">
            <ul>
              <li>
                <Link href="/member/order">訂單紀錄</Link>
              </li>
              <li>
                <Link href="/member/point-record">點數查詢</Link>
              </li>
            </ul>
          </div>
        </div>
        <button className={`${style.collapse_btn} pixel-purple bg-purple`}>
          文章資訊
          <i className="fa-solid fa-caret-down"></i>
        </button>
        <div
          className="collapse w-100"
          id="collapse4"
          data-bs-parent="#accordion"
        >
          <div className="card card-body member-details">
            <ul>
              <li>
                <Link href="/member/forum/forum-user-post">我的文章</Link>
              </li>
              <li>
                <Link href="/member/forum/forum-collect">收藏文章</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
