import React from "react";
import OrderPoint from "@/components/st/user/order/order-point";
import UserAside from "@/components/st/user/user-aside";
import MainLayout from "@/components/layout/main-layout";
export default function PointRecord() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <OrderPoint />
      </div>
    </MainLayout>
  );
}
