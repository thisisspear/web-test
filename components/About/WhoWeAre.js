import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-tilt>
                <img
                  src="/images/about/about-2.png"
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
                <h3>성장과 신뢰를 위한 엑스모아의 전문 IT 솔루션</h3>
                <p>
                  신뢰할 수 있는 IT 솔루션 및 기술 파트너로서 다양한 서비스를
                  제공하고 있습니다. 20년 이상의 경험을 토대로 엑스모아는
                  글로벌에서 선도적인 기술 솔루션 제공 업체로 알려지고 있습니다.
                </p>
                <p>
                  우리의 전문가 팀은 최신 기술 동향을 선도하며, 고객의 요구에
                  맞춰 맞춤형 솔루션을 제공합니다. 또한, 실시간 서비스를 통해
                  업무 프로세스를 효율적으로 관리하고 의사결정에 신속하게 반응할
                  수 있도록 돕습니다. 엑스모아는 고객의 생산성 향상과 경쟁력
                  강화를 위해 최선을 다하고 있습니다.
                </p>
                <p>
                  엑스모아와 함께하여 비즈니스 성장을 이루어나가세요. 우리의
                  다양한 서비스로 고객 여러분의 비즈니스를 더욱 성장시키고
                  발전시킬 수 있습니다.
                </p>
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
