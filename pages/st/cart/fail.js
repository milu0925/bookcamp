import { useRouter } from "next/router";
import React, { useEffect } from "react";
import MainLayout from "@/components/layout/main-layout";
export default function CartFail() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <MainLayout>
      <div>fail</div>
    </MainLayout>
  );
}
