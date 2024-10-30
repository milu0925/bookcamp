import React from "react";
import Header from "@/components/st/header";
import Navbar from "@/components/st/navbar";
import Loading from "@/components/loading/loading";
export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>{children}</main>
      <video autoPlay muted loop id="bgVideo">
        <source src="/images/bg1.mp4" type="video/mp4" />
      </video>
    </>
  );
}
