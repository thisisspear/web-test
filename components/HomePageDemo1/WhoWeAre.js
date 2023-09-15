import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                  모든 기능을 한곳에 <b>모아</b> 제공합니다
                </h3>
                <p>
                  엑스모아는 다양한 업계와 분야에서 미래를 선도하는
                  파트너입니다. 필요한 모든 기능을 하나의 SDK와 관리자 페이지로
                  제공하여 편리함과 효율성을 극대화합니다
                </p>
                <p>
                  엑스모아의 퀴즈쇼와 설문조사 기능은 교육을 한 단계
                  업그레이드하며, 포스트잇 기능은 협업 효율성을 향상시킵니다.
                  실시간 모니터링은 참여자의 반응을 신속하게 파악하여 소통의
                  역할을 하며, 이 모든 것은 엑스모아의 유연성과 다양성을
                  보여줍니다. 엑스모아와 함께라면 성장과 변화가 기다리고
                  있습니다.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="/images/about/about-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
