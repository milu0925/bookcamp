import React from "react";
import UserAside from "@/components/st/user/user-aside";
import OrderListID from "@/components/st/user/order/order-list-id";
import MainLayout from "@/components/layout/main-layout";
export default function UserOrderID() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <OrderListID />
      </div>
    </MainLayout>
  );
}
