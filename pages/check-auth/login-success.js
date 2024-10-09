import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/auth-context";
export default function LoginSuccess() {
  const router = useRouter();
  const { token } = router.query;
  const { loginSuccess } = useAuth();
  useEffect(() => {
    if (token) {
      loginSuccess(token);
    }
  }, [router.query]);

  return <div></div>;
}
