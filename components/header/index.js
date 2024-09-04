import React, { useState } from "react";
import { useAuth } from "/hooks/auth-context";
import Link from "next/link";
import style from "./header.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/router";

export default function Header() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  // 登出
  const handleLogout = async () => {
    const { data } = await axios.post(
      `${domain}/user/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    if (data.message === "success") {
      setAuth({
        isAuth: false,
        user: {
          id: 0,
          name: "",
          email: "",
          avatar: "",
          birthday: "",
          phone: "",
        },
      });
    }
    router.push("/");
  };
  // 登入按鈕滑入顯示
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={style.header}>
        <Link className={style.logo} href="/">
          <img src="/images/logo.jpg" alt="logo" width="100%" />
        </Link>
        <div className={style.header_btn_group}>
          <div>
            <Link
              href="/cart"
              className={`${style.header_btn_cart} pixel-border-white bg-white`}
            >
              <FaCartShopping />
              <span className={style.header_btn_cart_count}>99</span>
            </Link>
          </div>
          <div className={style.member}>
            {auth.isAuth === true ? (
              <Link
                href="/user"
                className={`${style.header_btn_login} pixel-border-yellow bg-yellow`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                歡迎,{auth.user.name}
              </Link>
            ) : (
              <Link
                href="/user/login"
                className={`${style.header_btn_login} pixel-border-yellow bg-yellow`}
              >
                登入/註冊
              </Link>
            )}
            <div
              className={`${style.member_center} ${
                isHovered ? style.block : style.none
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                <li>
                  <Link href="/user">會員中心</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>登出</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
