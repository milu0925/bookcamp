import React, { useState, useEffect } from "react";
import MNavbar from "@/components/ma/navbar";
import Loading from "../loading/loading";
export default function ManageLayout({ children }) {
  const [bgw, setbgw] = useState(false);

  // 明暗度設定
  useEffect(() => {
    let savedTheme = JSON.parse(localStorage.getItem("bgw"));
    if (savedTheme !== null) {
      setbgw(savedTheme);
    } else if (savedTheme) {
      setbgw(true);
    }
  }, []);

  return (
    <>
      <Loading />
      <main className={`manage ${bgw ? "manage-w" : ""}`}>
        <MNavbar bgw={bgw} setbgw={setbgw} />
        {children}
      </main>
    </>
  );
}
