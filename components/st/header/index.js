import React, { useEffect, useState } from "react";
import { useAuth } from "/hooks/auth-context";
import Link from "next/link";
import style from "./header.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@/hooks/cart-context";

export default function Header() {
  const { auth, userData, handleLogout } = useAuth();
  const { cart } = useCart();

  // 登入按鈕滑入顯示
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 購物車的數量顯示
  const [count, setCount] = useState(0);
  const renderCount = () => {
    if (auth.isAuth) {
      setCount(cart?.length);
    } else {
      const data = sessionStorage.getItem("cart");
      const countdata = JSON.parse(data);
      countdata?.length > 0 ? setCount(countdata.length) : setCount(0);
    }
  };
  useEffect(() => {
    renderCount();
  }, [auth, cart]);

  return (
    <>
      <div className={style.header}>
        <Link className={style.logo} href="/">
          <img src="/images/logo.jpg" alt="logo" width="100%" />
        </Link>
        <div className={style.header_btn_group}>
          <div>
            <Link
              href="/st/cart"
              className={`${style.header_btn_cart} pixel-border-white bg-white`}
            >
              <FaCartShopping />
              <span className={style.header_btn_cart_count}>{count}</span>
            </Link>
          </div>
          <div className={style.member}>
            {auth.isAuth ? (
              <Link
                href="/st/user"
                className={`${style.header_btn_login} pixel-border-yellow bg-yellow`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                歡迎,{auth.isAuth ? userData?.u_name : "未登入"}
              </Link>
            ) : (
              <Link
                href="/st/user/login"
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
                {auth.isAuth && userData?.m_id ? (
                  <li>
                    <Link href="/ma/manage">管理中心</Link>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <Link href="/st/user">會員中心</Link>
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
