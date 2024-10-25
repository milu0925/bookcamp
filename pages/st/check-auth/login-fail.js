import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import MainLayout from "@/components/layout/main-layout";
export default function GoogleFail() {
  const router = useRouter();
  useEffect(() => {
    const showAlert = async () => {
      await Swal.fire({
        position: "center",
        icon: "error",
        title: "查無此會員，請重新登入",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/user/login");
    };

    showAlert();
  }, [router]);
  return <MainLayout></MainLayout>;
}
