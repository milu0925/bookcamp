import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
export default function SignupFail() {
  const router = useRouter();
  const showAlert = async () => {
    await Swal.fire({
      position: "center",
      icon: "error",
      title: "已有此會員，請選擇登入",
      showConfirmButton: false,
      timer: 1000,
    });
    router.push("/user/login");
  };
  useEffect(() => {
    showAlert();
  }, [router]);
  return <></>;
}
