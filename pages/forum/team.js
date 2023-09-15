import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import TeamMembers from "@/components/Team/TeamMembers";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function Team() {
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
            <h2>팀 소개</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>홈</a>
                </Link>
              </li>
              <li>팀 소개</li>
            </ul>
          </div>
        </div>
      </div>

      <TeamMembers />

      <Footer />
    </>
  );
}
