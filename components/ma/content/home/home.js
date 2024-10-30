import React from "react";
import style from "../content.module.scss";
import Checkin_Quickly from "./checkin_quickly";
export default function Manage_Home() {
  return (
    <div className={style.l_content}>
      <Checkin_Quickly />
      <div>工作內容BLOCK</div>
      <div>日期</div>
      <div>當日銷售數據統計圖表</div>
    </div>
  );
}
