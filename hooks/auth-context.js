import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { get_user } from "@/hooks/call-api";
import { pushInUserCartItems } from "@/hooks/call-api";
import Swal from "sweetalert2";
export const CreateAuth = createContext(null);

export const AuthContext = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();

  // 會員資訊
  const [auth, setAuth] = useState({
    isAuth: false,
    user: {
      id: 0,
      name: "",
      email: "",
      avatar: "",
      birthday: "",
      phone: "",
    },
  });
  // 會員點數
  const [point, setPoint] = useState(0);
  // 會員圖片
  const [img, setImg] = useState("");

  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = [
    "/user",
    "/user/update",
    "/user/reset-password",
    "/user/order",
    "/user/point-record",
    "/user/forum",
    "/user/forum/message",
    "/user/forum/collect",
  ];
  // 檢驗會員身分
  const checkAuth = async () => {
    try {
      const { data } = await axios.get(`${domain}/user/check-auth`, {
        withCredentials: true,
      });

      if (data.message === "success") {
        // 驗證成功，把資料寫入
        setAuth({ isAuth: true, user: data.user });
        setPoint(data.point);
      }
    } catch (error) {
      if (
        error.response?.data.message === "未登入" &&
        error.response?.status === 401
      ) {
        setAuth({
          isAuth: false,
          user: {
            id: 0,
            name: "",
            email: "",
            birthday: "",
            phone: "",
            address: "",
          },
        });
        if (protectedRoutes.includes(router.pathname)) {
          router.push("/user/login");
        }
      } else {
        console.error(error);
      }
    }
  };
  // 轉譯JWT
  const parseJwt = (token) => {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    return JSON.parse(payload.toString());
  };

  // 登入
  const handleLogin = async (checkForm, user) => {
    if (!(await checkForm())) {
      return;
    }

    try {
      const { data } = await axios.post(`${domain}/user/login`, user, {
        withCredentials: true,
      });

      if (data.message === "success") {
        await loginSuccess(data.token);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.server;
      if (errorMessage) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
        });
      }
    }
  };
  const loginSuccess = async (token) => {
    setAuth({
      isAuth: true,
      user: await parseJwt(token),
    });
    // 假如未登入狀態下購物車有東西
    const cartitem = JSON.parse(sessionStorage.getItem("cart"));
    await pushInUserCartItems(cartitem).then((v) => {
      if (v?.message === "success") {
        // 清除session資料
        sessionStorage.removeItem("cart");
      }
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "登入成功，即將導向至首頁。",
      showConfirmButton: false,
      timer: 1000,
    });
    router.push("/");
  };
  // 登出
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        `${domain}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (data.message === "success") {
        setAuth({
          isAuth: false,
          user: {
            id: 0,
            name: "",
            email: "",
            avatar: "",
            birthday: "",
            phone: "",
          },
        });
        sessionStorage.removeItem("cart");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  // google登陸
  const handleGoogleLogin = async (code) => {
    try {
      const { data } = await axios.get(`${domain}/google/login?code=${code}`);
      if (data.message === "success") {
        router.push(data.data);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.server;
      if (errorMessage) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
        });
      }
    }
  };
  // line登陸
  const handleLineLogin = async (code) => {
    try {
      const { data } = await axios.get(`${domain}/line/login?code=${code}`, {
        withCredentials: true,
      });
      console.log(data, "line的資料");

      if (data.message === "success") {
        router.push(data.data);
        // window.location.href = data.data;
      } else {
        let url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=2006387080&redirect_uri=https://back-camp.up.railway.app/line/callback&state=隨機碼&scope=profile%20openid&nonce=隨機碼`;
        router.push(url);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.server;
      if (errorMessage) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
        });
      }
    }
  };

  // didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
  useEffect(() => {
    checkAuth();
  }, [router.isReady, router.pathname]);
  // 重新取得會員資料
  const handleUserData = async () => {
    const { data } = await get_user();
    setPoint(data[0].point);
    setImg(data[0].u_img);
  };
  console.log(img);

  return (
    <CreateAuth.Provider
      value={{
        img,
        point,
        setPoint,
        auth,
        setAuth,
        handleLogin,
        handleLogout,
        handleUserData,
        handleGoogleLogin,
        handleLineLogin,
        loginSuccess,
      }}
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
