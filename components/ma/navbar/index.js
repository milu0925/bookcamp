import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./navbar.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import {
  FaUserPen,
  FaArrowsDownToPeople,
  FaPersonCirclePlus,
  FaPersonCircleXmark,
} from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { RiGlobalFill, RiFileList3Fill } from "react-icons/ri";
import {
  FaHome,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaUsersCog,
} from "react-icons/fa";
import { TbCalendarPin } from "react-icons/tb";
import {
  MdAddAPhoto,
  MdTimeToLeave,
  MdCurrencyExchange,
  MdOutlineAddBox,
  MdOutlineForum,
  MdMoreTime,
} from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { IoFastFoodOutline, IoArrowRedo } from "react-icons/io5";

import { get_manage } from "@/hooks/call-ma-api";

function NavLink({ href, children }) {
  const router = useRouter();
  // 選擇到的按鈕加上css
  const isActive = router.pathname === href ? style.active : "";
  // 假設沒有此身分時鎖住按鈕
  // const lockbtn = user ? style.locked : "";

  return (
    <li className={isActive}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function MNavbar(props) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const { i18n, t } = useTranslation("common");
  // 後台主頁
  const handleHome = () => {
    router.push("/ma/manage");
  };
  // 變換背景色
  const handleBgColor = () => {
    if (props.bgw) {
      props.setbgw(false);
      localStorage.setItem("bgw", JSON.stringify(false));
    } else {
      props.setbgw(true);
      localStorage.setItem("bgw", JSON.stringify(true));
    }
  };
  // 更換語言
  const handleLang = () => {
    if (locale === "zh") {
      router.push({ pathname, query }, asPath, { locale: "en" });
      i18n.changeLanguage("en");
    } else if (locale === "en") {
      router.push({ pathname, query }, asPath, { locale: "zh" });
      i18n.changeLanguage("zh");
    }
  };
  // 返回賣場
  const handleReturnStore = () => {
    router.push("/");
  };
  // 此刻登入的會員
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await get_manage();
    if (data?.state === "success") {
      setEmployee(data.data);
    }
  };

  return (
    <div className={`${style.navbar} ${props.bgw ? style.navbar_w : ""}`}>
      <div className={style.user_image}>
        <img
          src={`${domain}${
            employee ? employee.u_img : "/images/user/user.svg"
          }`}
        />
        <button>
          <MdAddAPhoto />
        </button>
      </div>
      <div className={style.user_info}>
        <div>{employee ? employee.u_name : "沒有使用者"}</div>
        <div>{employee ? employee.department : "沒有組別"}</div>
      </div>
      <div className={style.navbar_arg}>
        <button onClick={handleHome}>
          <FaHome />
        </button>
        <button className={style.navbar_lightness} onClick={handleBgColor}>
          {props.bgw ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={handleLang}>
          <RiGlobalFill />
        </button>
        <button onClick={handleReturnStore}>
          <IoArrowRedo />
        </button>
      </div>
      <ul>
        <NavLink href="/ma/manage/checkin">
          <TbCalendarPin />
          {t("checkin_system")}
        </NavLink>
        <NavLink href="/ma/manage/list">
          <GiNightSleep />
          {t("list_system")}
        </NavLink>
        <NavLink href="/ma/manage/orderin">
          <IoFastFoodOutline />
          {t("orderin_system")}
        </NavLink>
        {employee ? (
          employee.d_auth == 1 ? (
            <NavLink href="/ma/manage/verify">
              <MdTimeToLeave />
              {t("verify_system")}
            </NavLink>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {employee ? (
          (employee.d_auth <= 2 && employee.department === "HR") ||
          employee.department === "BOSS" ? (
            <NavLink href="/ma/manage/hr">
              <FaUsersCog />
              {t("HR_system")}
            </NavLink>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {employee ? (
          (employee.d_auth <= 2 && employee.department === "PM") ||
          employee.department === "BOSS" ? (
            <NavLink href="/ma/manage/pm">
              <MdOutlineForum />
              {t("PM_system")}
            </NavLink>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
