const domain = process.env.NEXT_PUBLIC_DOMAIN;
import axios from "axios";

// 讀取公司同仁資料
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
