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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};
// 每日簽到檢查
export const get_daily = async () => {
  try {
    const { data } = await axios.get(`${domain}/user/get-checkin`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
// 每日簽到檢查
export const check_daily = async () => {
  try {
    const { data } = await axios.get(`${domain}/user/check-checkin`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};
// 送出訂單-linepay結帳
export const checkout_linepay = async (datas) => {
  try {
    const { data } = await axios.post(`${domain}/cart/linepay`, datas, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};
