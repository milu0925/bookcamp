import React from "react";
import { useAuth } from "/hooks/auth-context";
import NotLogin from "@/components/st/user/login/not-login";
import UserAside from "@/components/st/user/user-aside";
import UserCard from "@/components/st/user/user-card";
import UserDaily from "@/components/st/user/user-daily";
import MainLayout from "@/components/layout/main-layout";
export default function User() {
  const { auth } = useAuth();

  if (!auth.isAuth) {
    return <NotLogin />;
  } else {
    return (
      <MainLayout>
        <div className="l-user">
          <UserAside />
          <UserCard />
          <UserDaily />
        </div>
      </MainLayout>
    );
  }
}
