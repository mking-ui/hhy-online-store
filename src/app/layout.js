"use client";
import { useEffect } from "react";

import "./globals.css";

import Header from "@/components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";



//export const metadata = {
//title: "Create Next App",
//description: "Generated by create next app",
//};

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  });
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
