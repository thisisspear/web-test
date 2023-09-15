import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import SurveyDetailsContent from "@/components/Services/SurveyDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function Sruvey() {
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
            <h2>설문조사</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>홈</a>
                </Link>
              </li>
              <li>설문조사</li>
            </ul>
          </div>
        </div>
      </div>

      <SurveyDetailsContent />

      <Footer />
    </>
  );
}
