import UserAside from "@/components/st/user/user-aside";
import React from "react";
import MyForum from "@/components/st/user/forum/myforum";
import MainLayout from "@/components/layout/main-layout";
export default function Forum() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <MyForum />
      </div>
    </MainLayout>
  );
}
