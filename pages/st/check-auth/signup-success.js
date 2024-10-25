import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import MainLayout from "@/components/layout/main-layout";
export default function SignupSuccess() {
  const router = useRouter();
  useEffect(() => {
    const showAlert = async () => {
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "註冊成功！請前往登入",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/user/login");
    };

    showAlert();
  }, [router]);
  return <MainLayout></MainLayout>;
}
