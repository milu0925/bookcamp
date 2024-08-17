import React, { useState } from "react";
import { useAuth } from "/hooks/auth-context";
import Link from "next/link";
import style from "./header.module.scss";
import { FaCartShopping } from "react-icons/fa6";
export default function Header() {
  // 沒會員暫時寫
  const { user, setUser } = useAuth();

  // 登入按鈕滑入顯示
  const [isHovered, setIsHovered] = useState(false);
  // 登出
  const handleLogout = async () => {
    logoutFirebase();
    localStorage.removeItem("birthdayNotified");

    const res = await axios.post(
      "http://localhost:3002/member/auth-jwt/logout",
      {},
      {
        withCredentials: true, // save cookie in browser
      }
    );

    if (res.data.message === "success") {
      setAuthJWT({
        isAuth: false,
        userData: {
          id: 0,
          name: "",
          username: "",
          r_date: "",
          avatar: "",
        },
      });
      setCartItem([]);
      setCollect([]);
    }
    router.push("/");
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={style.header}>
      <Link className={style.logo} href="/">
        <img src="/images/logo.jpg" alt="logo" width="100%" />
      </Link>
      <div className={style.header_btn_group}>
        <div>
          <Link
            href="/cart"
            className={`${style.header_btn_cart} pixel-border-white`}
          >
           <FaCartShopping />
            <span className={style.header_btn_cart_count}>
              99
            </span>
          </Link>
        </div>
        <div>
          <Link
            href="/member/login"
            className={`${style.header_btn_login} pixel-border-yellow`}
          >
            登入/註冊
          </Link>
          {/* {user ? (
            <Link
              href="/member/"
              className="main-btn pixel-border-yellow-s login-btn d-md-flex p-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="px-3">歡迎!</span>

              <div className="header-member-avatar m-0">
                會員兔向
                <img
                  src={`http://localhost:3002/public/img/member/default.png`}
                  alt="avatar"
                />
              </div>
            </Link>
          ) : (
            <Link
              href="/member/login"
              className="main-btn pixel-border-yellow-s login-btn d-md-block"
            >
              登入/註冊
            </Link>
          )} */}
          {/* <div
            className={`loginbtn-optionblock ${
              isHovered ? "d-block" : "d-none"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="w-auto">
              <li>
                <Link className="pixel-border-yellow-s" href="/member/">
                  會員中心
                </Link>
              </li>
              <li>
                <button
                  className="pixel-border-yellow-s"
                  onClick={handleLogout}
                >
                  登出
                </button>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
