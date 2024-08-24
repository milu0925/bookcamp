import React from "react";
import Link from "next/link";
import style from "./login.module.scss";

import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export default function UserLogin() {
  return (
    <div className={style.l_login}>
      <div className={`${style.r_login} pixel-border-yellow bg-yellow`}>
        <div className={style.r_login_title}>
          <FaUser />
          <h4>會員登入</h4>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" id="email" placeholder="電子郵件地址" />
            <div className={`${style.error_message}`}>
              請輸入有效的電子郵件地址。
            </div>
          </div>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="password">密碼</label>
          <div>
            <input type="password" id="password" placeholder="電子郵件地址" />
            <div className={`${style.error_message}`}>請輸入密碼。</div>
            <Link href="/member/forget-password" className="font-sm ms-3">
              忘記密碼？
            </Link>
          </div>
        </div>
        <div className={style.r_login_btn_group}>
            <button>登入</button>
            <Link href="/user/register">還不是會員？ 立即註冊!</Link>
        </div>
        <div>如登入，即代表同意本站隱私權政策和使用條款。</div>
      </div>
      <div className={`${style.r_quick_login} pixel-border-black bg-black`}>
        <div className="quick-login mb-3">快速登入</div>
        <div>
          <FaLine />
          <BsGoogle />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}
