import React from "react";
import OrderPoint from "@/components/user/order/order-point";
import UserAside from "@/components/user/user-aside";

export default function PointRecord() {
  return (
    <div className="l-user">
      <UserAside />
      <OrderPoint />
    </div>
  );
}
