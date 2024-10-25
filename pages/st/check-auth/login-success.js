import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/auth-context";
import MainLayout from "@/components/layout/main-layout";
export default function LoginSuccess() {
  const router = useRouter();
  const { token } = router.query;
  const { loginSuccess } = useAuth(token);
  useEffect(() => {
    if (token) {
      loginSuccess(token);
    }
  }, [router.query]);

  return <MainLayout></MainLayout>;
}
