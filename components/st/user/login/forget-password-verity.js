import React, { useState, useEffect } from "react";
import style from "./login.module.scss";
import { FaKey } from "react-icons/fa6";
import { user_verify_mail, user_password_update } from "@/hooks/call-api";
export default function ForgetPasswordVerity() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //  延誤時間
  const [count, setCount] = useState(0); // 初始時間為60秒
  const [delay, setDelay] = useState(false); // 判斷重新發送
  useEffect(() => {
    let timer;
    if (count > 0) {
      setDelay(true); // 如果倒數中，不允許重新發送
      timer = setTimeout(() => setCount(count - 1), 1000); // 每1秒減1
    } else {
      setDelay(false); // 倒數結束，允許重新發送
    }

    return () => clearTimeout(timer); // 清理計時器
  }, [count]);
  // 寄送驗證信
  const handleResendEmail = () => {
    setCount(60);
    user_verify_mail();
  };

  return (
    <div className={style.l_login}>
      <div className={`${style.r_login} pixel-border-yellow bg-yellow`}>
        <div className={style.r_login_title}>
          <FaKey />
          <h4>忘記密碼</h4>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="email">信　箱</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            name="email"
            onChange={handleChange}
          />
          <button
            className="pixel-border-orange bg-orange"
            onClick={handleResendEmail}
            disabled={delay}
          >
            {delay ? count + "秒後,再次取得驗證碼" : "取得驗證碼"}
          </button>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="verification">驗證碼</label>
          <input type="verification" id="verification" name="verification" />
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="password">新密碼</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        <div className={style.r_login_btn_group}>
          <button className="pixel-border-purple bg-color-purple">
            重設密碼
          </button>
        </div>
        <div style={{ textAlign: "center", fontSize: "12px" }}>
          透過使用本網站的忘記密碼功能，您同意遵守條款和條件。
        </div>
      </div>
    </div>
  );
}