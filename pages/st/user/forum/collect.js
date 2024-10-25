import UserAside from "@/components/st/user/user-aside";
import React from "react";
import MyCollect from "@/components/st/user/forum/mycollect";
import MainLayout from "@/components/layout/main-layout";
export default function ForumCollect() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <MyCollect />
      </div>
    </MainLayout>
  );
}
