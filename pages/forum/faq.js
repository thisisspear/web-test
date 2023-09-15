import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import FaqContent from "@/components/FAQ/FaqContent";
import Footer from "@/components/Layout/Footer";

export default function Faq() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>자주 묻는 질문</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>홈</a>
                </Link>
              </li>
              <li>자주 묻는 질문</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqContent />

      <Footer />
    </>
  );
}
