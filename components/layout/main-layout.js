import React from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}
