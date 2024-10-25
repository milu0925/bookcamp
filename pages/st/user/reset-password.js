import React from "react";
import UserAside from "@/components/st/user/user-aside";
import EditPassword from "@/components/st/user/information/edit-password";
import MainLayout from "@/components/layout/main-layout";
export default function ResetPassword() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <EditPassword />
      </div>
    </MainLayout>
  );
}
