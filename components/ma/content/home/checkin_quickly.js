import React from "react";
import style from "../content.module.scss";
export default function Checkin_Quickly() {
  return (
    <div className={style.col_checkinQuickly}>
      <div>當日日期</div>
      <div>目前時間</div>
      <div>8:00</div>
      <div>
        <button>上班</button>
      </div>
    </div>
  );
}
