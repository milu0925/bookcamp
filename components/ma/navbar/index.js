import React from "react";
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
import { GiMoneyStack, GiNightSleep } from "react-icons/gi";
import { IoFastFoodOutline, IoArrowRedo } from "react-icons/io5";

function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href ? style.active : "";
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

  return (
    <div className={`${style.navbar} ${props.bgw ? style.navbar_w : ""}`}>
      <div className={style.user_image}>
        <img src={`${domain}/images/user/user.svg`} />
        <button>
          <MdAddAPhoto />
        </button>
      </div>
      <div className={style.user_info}>
        <div>陳情賣</div>
        <div>UI/UX組</div>
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
        <NavLink href="/ma/manage/person">
          <FaUserPen />
          {t("user_data")}
        </NavLink>
        <NavLink href="/ma/manage/salary">
          <GiMoneyStack />
          {t("user_salary")}
        </NavLink>
        <NavLink href="/ma/manage/checkin">
          <TbCalendarPin />
          {t("user_checkin")}
        </NavLink>
        <NavLink href="/ma/manage/takeleave">
          <GiNightSleep />
          {t("user_take_leave")}
        </NavLink>
        <NavLink href="/ma/manage/overtime">
          <MdMoreTime />
          {t("user_overtime")}
        </NavLink>
        <NavLink href="/ma/manage/orderin">
          <IoFastFoodOutline />
          {t("user_orderin")}
        </NavLink>
        <NavLink href="/ma/manage/resignation">
          <MdTimeToLeave />
          {t("user_resignation")}
        </NavLink>
        <NavLink href="/ma/manage/ulist">
          <FaUsersCog />
          {t("HR_employee_list")}
        </NavLink>
        <NavLink href="/ma/manage/takeleave_review">
          <FaUsersCog />
          {t("HR_takeleave_review")}
        </NavLink>
        <NavLink href="/ma/manage/departmentC">
          <FaArrowsDownToPeople />
          {t("HR_department_transition")}
        </NavLink>
        <NavLink href="/ma/manage/salaryC">
          <MdCurrencyExchange />
          {t("HR_salary_transition")}
        </NavLink>
        <NavLink href="/ma/manage/registration">
          <FaPersonCirclePlus />
          {t("HR_registration")}
        </NavLink>
        <NavLink href="/ma/manage/quitApply">
          <FaPersonCircleXmark />
          {t("HR_resignation_review")}
        </NavLink>
        <NavLink href="/ma/manage/addp">
          <MdOutlineAddBox />
          {t("PD_add_product")}
        </NavLink>
        <NavLink href="/ma/manage/plist">
          <LuBaggageClaim />
          {t("PD_product_list")}
        </NavLink>
        <NavLink href="/ma/manage/olist">
          <RiFileList3Fill />
          {t("PD_order_list")}
        </NavLink>
        <NavLink href="/ma/manage/flist">
          <MdOutlineForum />
          {t("PD_forum_list")}
        </NavLink>
        <NavLink href="/ma/manage/salary_review">
          <MdOutlineForum />
          {t("BOSS_salary_review")}
        </NavLink>
        <NavLink href="/ma/manage/department_review">
          <MdOutlineForum />
          {t("BOSS_department_review")}
        </NavLink>
      </ul>
    </div>
  );
}
