import { useAuth } from "@/hooks/auth-context";
import React, { useEffect } from "react";
import style from "./user.module.scss";
import { FaCamera } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { user_img_upload } from "@/hooks/call-api";
export default function UserCard() {
  const { auth, point, img, handleUserData } = useAuth();
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  // 上傳圖片
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    const data = await user_img_upload(formData);

    if (data.state === "success") {
      await handleUserData();
    }
  };
  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <div className={`${style.col_user_card}`}>
      <div className={style.user_card_block}></div>
      <div className={`${style.user_card} bg-color-purple pixel-border-purple`}>
        <div className={style.user_card_avatar}>
          <div className={style.user_card_avatar_block}>
            <img alt="user-avatar" src={`${domain}${img ? img : ""}`} />
            <input
              type="file"
              id="img-file"
              accept="image/*"
              name="avatar"
              onChange={handleFile}
            />
            <label htmlFor="img-file" className={style.upload_image_btn}>
              <FaCamera />
            </label>
          </div>
        </div>
        <div className={style.user_card_dark}>
          <div className={style.user_card_dark_block}>
            <div>
              <div>會員名稱</div>
              <span>{auth.isAuth ? auth.user.name : ""}</span>
            </div>
            <div>
              <div>可用點數</div>
              <span>{point ? point : 0}</span>
            </div>
          </div>
        </div>
        <div className={style.user_card_light}>
          <div className={style.user_card_light_block}>
            <h2>
              <FaUser />
              <span>基本資料</span>
            </h2>
            <div>
              <div>
                <div>生日</div>
                <span>{auth.isAuth ? auth.user.birthday : ""}</span>
              </div>
              <div>
                <div>電話</div>
                <span>{auth.isAuth ? auth.user.phone : ""}</span>
              </div>
              <div>
                <div>信箱</div>
                <span>{auth.isAuth ? auth.user.email : ""}</span>
              </div>
              <div>
                <div>收貨地址</div>
                <span>{auth.isAuth ? auth.user.address : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
