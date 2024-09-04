import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const CreateAuth = createContext(null);

export const AuthContext = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();

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
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = ["/user", "/cart"];
  // 檢驗會員身分
  const checkAuth = async () => {
    try {
      const { data } = await axios.get(`${domain}/user/check-auth`, {
        withCredentials: true,
      });

      if (data.message === "success") {
        // 驗證成功，把資料寫入
        setAuth({ isAuth: true, user: data });
      }
    } catch (error) {
      if (error.response.data.message === "未登入" && error.response.status === 401) {
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
  

  // didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
  useEffect(() => {
    checkAuth();
  }, [router.pathname]);

  return (
    <CreateAuth.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
