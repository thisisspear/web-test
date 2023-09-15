import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>WHY CHOOSE US</span>
            <h2>
              인터랙티브한 실시간 서비스를 통해 <b>비즈니스 성장</b>을
              이끌어갑니다
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-1.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      <a>Mobile UI</a>
                    </Link>
                  </h3>
                  <p>
                    사용자의 행동 패턴과 선호도를 분석하여 사용자 친화적인
                    인터페이스를 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-2.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      <a>Branding Strategy</a>
                    </Link>
                  </h3>
                  <p>
                    언제나 새로운 것을 탐구하고, 도전하는 것을 브랜드의 핵심
                    가치로 두고 있습니다. 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-3.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      <a>Graphic Design</a>
                    </Link>
                  </h3>
                  <p>
                    명확하고 직관적으로 디자인함으로써 사용자가 서비스를
                    이해하고 사용하는 것을 최소의 노력으로 이룰 수 있도록
                    합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-4.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      <a>Real-time Optimization</a>
                    </Link>
                  </h3>
                  <p>
                    시스템의 반응 시간을 최소화하여 더욱 원활하고 편안한 경험을
                    누릴 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <img src="/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
