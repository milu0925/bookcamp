import React from "react";
import UserAside from "@/components/st/user/user-aside";
import OrderList from "@/components/st/user/order/order-list";
import MainLayout from "@/components/layout/main-layout";
export default function UserOrder() {
  return (
    <MainLayout>
      <div className="l-user">
        <UserAside />
        <OrderList />
      </div>
    </MainLayout>
  );
}
