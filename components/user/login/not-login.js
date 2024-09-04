import React from "react";
import Link from "next/link";
import style from "./login.module.scss"
export default function NotLogin() {
  return (
    <div className={style.l_not_login}>
        <img alt="dead" src="/images/dead.png" />
      <Link
        href="/user/login"
        className=" pixel-border-yellow bg-yellow"
        type="button"
      >
        請先登入會員
      </Link>
    </div>
  );
}
