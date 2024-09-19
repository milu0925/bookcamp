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
  const [img,setImg] = useState("");

  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = ["/user","/user/update","/user/reset-password"];
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
        error.response.data.message === "未登入" &&
        error.response.status === 401
      ) {
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
        setAuth({
          isAuth: true,
          user: parseJwt(data.token),
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
        }).then(() => {
          router.push("/");
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
      });
    }
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
      }}
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
