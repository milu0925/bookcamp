import React, { useState } from "react";
import Link from "next/link";
import style from "./navbar.module.scss";

import { SiBackendless } from "react-icons/si";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
export default function MNavbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <SiBackendless />
        <span>CAMP SYSTEM</span>
      </div>

      <div className={style.title}>
        <FaUserLarge />
        個人中心
      </div>
      <ul>
        <li>
          <Link href="#">
            <FaUserPen />
            個人資料
          </Link>
        </li>
        <li>
          <Link href="#">薪資單</Link>
        </li>
        <li>
          <Link href="#">打卡系統</Link>
        </li>
        <li>
          <Link href="#">請假系統</Link>
        </li>
        <li>
          <Link href="#">加班系統</Link>
        </li>
        <li>
          <Link href="#">訂餐系統</Link>
        </li>
        <li>
          <Link href="#">離職單</Link>
        </li>
      </ul>

      <div className={style.title}>人資部門</div>
      <ul>
        <li>
          <Link href="#">員工管理</Link>
        </li>
        <li>
          <Link href="#">部門異動</Link>
        </li>
        <li>
          <Link href="#">薪資異動</Link>
        </li>
        <li>
          <Link href="#">入職註冊</Link>
        </li>
        <li>
          <Link href="#">離職申請</Link>
          {/* 告知人資離職後，人資給權限打開線上填寫離職單 */}
        </li>
      </ul>

      <div className={style.title}>產品部門</div>
      <ul>
        <li>
          <Link href="#">新增產品</Link>
        </li>
        <li>
          <Link href="#">產品管理</Link>
        </li>
        <li>
          <Link href="#">訂單管理</Link>
        </li>
        <li>
          <Link href="#">討論區管理</Link>
        </li>
      </ul>
    </div>
  );
}
