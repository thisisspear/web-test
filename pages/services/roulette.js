import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import RouletteDetailsContent from "@/components/Services/RouletteDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function Roulette() {
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
            <h2>룰렛</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>홈</a>
                </Link>
              </li>
              <li>룰렛</li>
            </ul>
          </div>
        </div>
      </div>

      <RouletteDetailsContent />

      <Footer />
    </>
  );
}
