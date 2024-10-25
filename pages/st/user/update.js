import UserAside from "@/components/st/user/user-aside";
import React from "react";
import EditInformation from "@/components/st/user/information/edit-information";
import MainLayout from "@/components/layout/main-layout";
export default function UserUpdate() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <EditInformation />
      </div>
    </MainLayout>
  );
}
