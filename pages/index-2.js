import React from "react";
import Topbar from '@/components/Layout/Topbar';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import HeroSlider from "@/components/HomePageDemo2/HeroSlider";
import WhoWeAre from "@/components/HomePageDemo2/WhoWeAre";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Skills from "@/components/Common/Skills";
import ServicesCard from "@/components/Services/ServicesCard";
import ProjectsCard from "@/components/Projects/ProjectsCard";
import PricingTable from "@/components/Pricing/PricingTable";
import TestimonialSlider from "@/components/Common/TestimonialSlider";
import Partners from "@/components/Common/Partners";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";

export default function Home2() {
  return (
    <>
      <Topbar />

      <NavbarTwo />

      <HeroSlider />

      <WhoWeAre />

      <div className="bg-with-F5F5F5-color">
        <WhyChooseUs />
      </div>

      <Skills />

      <ServicesCard />

      <ProjectsCard />
    
      <PricingTable />

      <TestimonialSlider />

      <Partners />

      <Article />

      <Footer />
    </>
  )
}
