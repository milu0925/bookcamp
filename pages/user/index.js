import React from "react";
import { useAuth } from "/hooks/auth-context";
import { useRouter } from "next/router";
import NotLogin from "@/components/user/login/not-login";
import UserAside from "@/components/user/user-aside";
import UserCard from "@/components/user/user-card";
import UserDailyCheckin from "@/components/user/user-daily-checkin";
export default function User() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  if (!auth.isAuth) {
    return <NotLogin />;
  } else {
    return (
      <div className="l-user">
        <UserAside />
        <UserCard />
        <UserDailyCheckin />
      </div>
    );
  }
}
