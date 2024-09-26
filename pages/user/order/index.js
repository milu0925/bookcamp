import React from "react";
import UserAside from "@/components/user/user-aside";
import OrderList from "@/components/user/order/order-list";
export default function UserOrder() {
  return (
    <div className="l-user">
      <UserAside />
      <OrderList />
    </div>
  );
}
