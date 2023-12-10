import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarMobile from "../Navbar/mobileNav";
import MobileBar from "../Navbar/mobileBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <NavbarMobile />
        {children}
        <Footer />
        <MobileBar 
          activeTab="home"
        />
      </main>
    </>
  );
}

export default Layout;
