import React from "react";
import { useAuth } from "/hooks/auth-context";
import NotLogin from "@/components/user/login/not-login";
import UserAside from "@/components/user/user-aside";
import UserCard from "@/components/user/user-card";
import UserDaily from "@/components/user/user-daily";
export default function User() {
  const { auth } = useAuth();

  if (!auth.isAuth) {
    return <NotLogin />;
  } else {
    return (
      <div className="l-user">
        <UserAside />
        <UserCard />
        <UserDaily />
      </div>
    );
  }
}
