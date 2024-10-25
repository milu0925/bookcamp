import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import MainLayout from "@/components/layout/main-layout";
export default function ServerFail() {
  const router = useRouter();
  useEffect(() => {
    const showAlert = async () => {
      await Swal.fire({
        position: "center",
        icon: "error",
        title: "本服務失效，請重新在試！",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/");
    };

    showAlert();
  }, [router]);
  return <MainLayout></MainLayout>;
}
