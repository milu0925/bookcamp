import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const CreateAuth = createContext([]);

export const AuthContext = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();

  const [user, setUser] = useState({
    isAuth: false,
    user: {
      user_id: 0,
      user_name: "",
      email: "",
      avatar: "",
    },
  });
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = ["/member/login-status-jwt", "/xxxx/xxxx"];
  // 檢驗會員身分
  const checkAuth = async () => {
    const { data } = await axios.get(`${domain}/user/check-login`, {
      ithCredentials: true,
    });
    if (data.message === "authorized") {
      // 驗證成功，把資料寫入
      setUser({ isAuth: true, user: data.user });
    } else {
      // study
      if (protectedRoutes.includes(router.pathname)) {
        router.push(loginRoute);
      }
    }
  };


    // didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
    // useEffect(() => {
    //     if (router.isReady && !user.isAuth) {
    //       checkAuth()
    //     }
    //   }, [router.isReady, router.pathname])

  return (
    <CreateAuth.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
