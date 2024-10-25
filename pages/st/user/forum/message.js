import React from "react";
import Mymessage from "@/components/st/user/forum/mymessage";
import UserAside from "@/components/st/user/user-aside";
import MainLayout from "@/components/layout/main-layout";
export default function ForumMessage() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <Mymessage />
      </div>
    </MainLayout>
  );
}
