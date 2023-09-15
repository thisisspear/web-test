import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import NoticeDetailsContent from "@/components/Notice/NoticeDetailsContent";
import Footer from "@/components/Layout/Footer";

export default function NoticeDetails() {
  return (
    <>
      <NavbarTwo />

      <NoticeDetailsContent />

      <CTO />

      <Footer />
    </>
  );
}
