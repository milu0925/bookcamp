import React, { useEffect, useState } from "react";
import style from "../user.module.scss";
import { FaUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FaPhone, FaChildren } from "react-icons/fa6";
import { useAuth } from "@/hooks/auth-context";
import { FaMapMarkedAlt, FaBirthdayCake } from "react-icons/fa";
import { MdBoy, MdGirl } from "react-icons/md";
import Link from "next/link";
export default function EditInformation() {
  const { auth } = useAuth();
  const [newFrom, setNewFrom] = useState({});

  // 寫入性別
  useEffect(() => {
    if (auth.user.gender == "女") {
      setNewFrom((prev) => ({ ...prev, gender: "女" }));
    } else if (auth.user.gender == "男") {
      setNewFrom((prev) => ({ ...prev, gender: "男" }));
    }
  }, [auth.user]);
  // 寫入
  const handleWriteInformation = (e) => {
    let { name, value } = e.target;
    setNewFrom((prev) => ({ ...prev, [name]: value }));
  };
  // 確認變更
  const handleSave = () => {};


  return (
    <div
      className={`${style.col_user_edit_information} bg-color-purple pixel-border-purple`}
    >
      <div
        className={`${style.user_title_block} ${style.user_edit_information_title}`}
      >
        <div>
          <FaUser />
          <span>修改資料</span>
        </div>
        <div></div>
      </div>
      <div className={`${style.user_edit_information_content}`}>
        <div>
          <label>
            <MdMailOutline />
            電子信箱
          </label>
          <div>
            <input
              defaultValue={auth.isAuth ? auth.user.email : ""}
              name="email"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div>
          <label htmlFor="name">
            <TfiWrite />
            姓名
          </label>
          <div>
            <input
              id="name"
              defaultValue={auth.isAuth ? auth.user.name : ""}
              name="name"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div className={style.user_edit_gender}>
          <label>
            <FaChildren />
            性別
          </label>
          <div>
            <input
              id="male"
              name="gender"
              value="男"
              type="radio"
              onChange={handleWriteInformation}
              checked={newFrom.gender == "男"}
            />
            <label
              htmlFor="male"
              className={newFrom.gender == "男" ? style.active : ""}
            >
              <MdBoy />男
            </label>
            <input
              id="female"
              name="gender"
              value="女"
              type="radio"
              onChange={handleWriteInformation}
              checked={newFrom.gender == "女"}
            />
            <label
              htmlFor="female"
              className={newFrom.gender == "女" ? style.active : ""}
            >
              <MdGirl />女
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="birthday">
            <FaBirthdayCake />
            生日
          </label>
          <div>
            <input
              id="birthday"
              type="date"
              defaultValue={auth.isAuth ? auth.user.birthday : ""}
              name="birthday"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone">
            <FaPhone />
            電話
          </label>
          <div>
            <input
              id="phone"
              type="number"
              defaultValue={auth.isAuth ? auth.user.phone : ""}
              pattern="\d{9}"
              maxLength="9"
              name="phone"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div>
          <label htmlFor="address">
            <FaMapMarkedAlt />
            住址
          </label>
          <div>
            <input
              id="address"
              type="text"
              defaultValue={auth.isAuth ? auth.user.address : ""}
              name="address"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div className={style.user_edit_btn}>
          <Link href="/user" className="pixel-border-yellow bg-yellow">
            回上一頁
          </Link>
          <button
            onClick={handleSave}
            className="pixel-border-yellow bg-yellow"
          >
            確認變更
          </button>
        </div>
      </div>
    </div>
  );
}
