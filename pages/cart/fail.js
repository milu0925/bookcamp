import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function CartFail() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <div>fail</div>;
}
