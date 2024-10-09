const domain = process.env.NEXT_PUBLIC_DOMAIN;
import axios from "axios";

/*  產品  */

// 讀全部書籍/單一類別書籍
export const readbooks = async (datas, tag) => {
  try {
    const { data } = await axios.get(`${domain}/product/read`, {
      params: { b_genre: datas, tag: tag },
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

/*  會員  */
// 未登入會員狀態，註冊或登入後把資料寫進去。
export const pushInUserCartItems = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/cart/notauth/add`, datas, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 讀取會員資料
export const get_user = async () => {
  try {
    const { data } = await axios.get(`${domain}/user/get-data`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 每日簽到檢查
export const get_daily = async () => {
  try {
    const { data } = await axios.get(`${domain}/point/get-checkin`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 每日簽到檢查
export const check_daily = async () => {
  try {
    const { data } = await axios.get(`${domain}/point/check-checkin`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 上傳會員圖片
export const user_img_upload = async (file) => {
  try {
    const { data } = await axios.post(`${domain}/user/upload/avatar`, file, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 更新會員資料
export const user_information_update = async (datas) => {
  try {
    const { data } = await axios.patch(
      `${domain}/user/update/information`,
      datas,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 檢查會員密碼
export const user_password_check = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/user/check/password`, datas, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 更新會員密碼
export const user_password_update = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/user/update/password`, datas, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 讀取會員點數清單
export const user_point_list = async () => {
  try {
    const { data } = await axios.get(`${domain}/point/user-point-list`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 驗證信
export const user_verify_mail = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/user/verify-mail`, datas);
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

/*  購物車  */
// 送出訂單-一般結帳
export const checkout = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/order/checkout`, datas, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 送出訂單-linepay結帳
export const checkout_linepay = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/cart/linepay`, datas, {
      withCredentials: true,
    });
    console.log(data, "沒抓到嗎??");

    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 送出訂單-藍新結帳
export const checkout_bluepay = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/cart/bluepay`, datas, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

/*  訂單  */
// 讀取全部訂單資訊
export const read_all_order = async () => {
  try {
    const { data } = await axios.get(`${domain}/order/read`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
// 讀取單一訂單資訊
export const read_one_order = async (datas) => {
  try {
    const { data } = await axios.post(
      `${domain}/order/readone`,
      { o_id: datas },
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    return error.response?.data;
  }
};
