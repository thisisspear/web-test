import React, { useState, useEffect, useRef } from "react"; // <--- import the hook
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import ProjectsDetailsContent from "@/components/Projects/ProjectsDetailsContent";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function ProjectsDetails() {
  const iframeRef = useRef(null);
  const [docs, setDocs] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.text())
      .then((html) => {
        setDocs(html);
        function handleResize(event) {
          if (iframeRef.current && event.data.height) {
            iframeRef.current.style.height = `${event.data.height + 80}px`;
          }
        }

        window.addEventListener("message", handleResize);
        return () => {
          window.removeEventListener("message", handleResize);
        };
      });
  }, []);

  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>문서</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>홈</a>
                </Link>
              </li>
              <li>문서</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-details-area ptb-100">
        <iframe
          ref={iframeRef}
          srcDoc={docs}
          style={{ width: "100%", border: "none" }}
          sandbox="allow-scripts"
        />
      </div>

      <Footer />
    </>
  );
}

// 클라이언트에 추가할 코드
/*
  <script>
    function reportHeight() {
        window.parent.postMessage({ height: document.body.offsetHeight }, '*');
    }
    
    reportHeight(); // initial report
    window.addEventListener('resize', reportHeight); // report again if window size changes
  </script>
*/
