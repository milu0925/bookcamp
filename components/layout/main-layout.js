import React from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
