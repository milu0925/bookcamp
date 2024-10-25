import React from "react";
import ForgetPasswordVerity from "@/components/st/user/login/forget-password-verity";
import MainLayout from "@/components/layout/main-layout";
export default function UserForgetPassword() {
  return (
    <MainLayout>
      <div className="l-user">
        <ForgetPasswordVerity />
      </div>
    </MainLayout>
  );
}
