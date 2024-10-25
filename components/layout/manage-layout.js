import React from "react";
import MNavbar from "@/components/ma/navbar";
import MHeader from "@/components/ma/header";
export default function ManageLayout({ children }) {
  return (
    <main className="manage">
      <MNavbar />
      <MHeader />
      {children}
    </main>
  );
}
