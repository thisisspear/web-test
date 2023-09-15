import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import GoogleMap from "@/components/Common/GoogleMap";

export default function Contact() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-5.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>문의</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>홈</a>
                </Link>
              </li>
              <li>문의</li>
            </ul>
          </div>
        </div>
      </div>

      <ContactForm />

      <GoogleMap />

      <CTO />

      <Footer />
    </>
  );
}
