import React, { useState } from "react";
import Link from "next/link";
import style from "./login.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/auth-context";
export default function UserLogin() {
  const [error, setError] = useState(false);
  const { handleLogin, handleGoogleLogin, handleLineLogin } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleUserData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // 快速登入
  const handlequickData = (e) => {
    e.preventDefault();
    setUser({ email: "ff@gmail.com", password: "123456" });
  };
  // 檢查空格
  const checkForm = async () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (user.email === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請填寫您的信箱",
      });
      return false;
    }
    if (!emailPattern.test(user.email)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請輸入有效的信箱格式",
      });
      return false;
    }
    if (user.password === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "密碼不可以空白",
      });
      return false;
    }
    return true;
  };
  return (
    <div className={style.l_login}>
      <form
        action="#"
        method="POST"
        className={`${style.r_login} pixel-border-yellow bg-yellow`}
      >
        <div className={style.r_login_title}>
          <FaUser />
          <h4>會員登入</h4>
          <button className={style.quick_write} onClick={handlequickData}>
            快速登入
          </button>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="email">信箱</label>
          <input
            type="email"
            id="email"
            placeholder="電子郵件地址"
            autoComplete="off"
            name="email"
            value={user.email}
            onChange={handleUserData}
          />
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            id="password"
            placeholder="密碼"
            name="password"
            value={user.password}
            onChange={handleUserData}
            autoComplete="current-password"
          />
          <Link href="/user/forget-password" className="font-sm ms-3">
            忘記密碼？
          </Link>
        </div>
        <div className={`${error ? style.error_message : style.error_disable}`}>
          請輸入有效的電子郵件地址。 密碼錯誤 ...之類的
        </div>
        <div className={style.r_login_btn_group}>
          <button
            className="pixel-border-purple bg-color-purple"
            onClick={() => {
              handleLogin(checkForm, user);
            }}
          >
            登入
          </button>
          <Link href="/user/register" className="pixel-border-orange bg-orange">
            <span>還不是會員？ 立即</span>註冊<span>!</span>
          </Link>
        </div>
        <div>如登入，即代表同意本站隱私權政策和使用條款。</div>
      </form>
      <div className={`${style.r_quick_login} pixel-border-black bg-black`}>
        <div className={style.quick_login_text}>快速登入</div>
        <div className={style.quick_login_logo}>
          <FaLine
            onClick={() => {
              handleLineLogin("login");
            }}
          />
          <FcGoogle
            onClick={() => {
              handleGoogleLogin("login");
            }}
          />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}
