import React from "react";
import Link from "next/link";

const AllServicesCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years. lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/postit">
                    <a>
                      <img src="/images/services/services-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/postit">
                      <a>공유 포스트잇</a>
                    </Link>
                  </h3>
                  <p>
                    의견을 공유하고 아이디어를 모아 팀원들과 쉽게 협업하고
                    커뮤니케이션을 이어가세요.
                  </p>
                  <Link href="/services/postit">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/monitoring">
                    <a>
                      <img src="/images/services/services-2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/monitoring">
                      <a>실시간 모니터링</a>
                    </Link>
                  </h3>
                  <p>지연시간 없는 고화질의 양방향 소통을 제공합니다</p>
                  <Link href="/services/monitoring">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/quiz">
                    <a>
                      <img src="/images/services/services-3.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/quiz">
                      <a>서바이벌 퀴즈쇼</a>
                    </Link>
                  </h3>
                  <p>
                    여러분의 지식을 테스트해 보세요! 직접 참여하여 경쟁하고,
                    상품을 획득하세요.
                  </p>
                  <Link href="/services/quiz">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/survey">
                    <a>
                      <img src="/images/services/services-4.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/survey">
                      <a>설문조사</a>
                    </Link>
                  </h3>
                  <p>
                    의견을 수집하여 더 나은 서비스 제공을 위해 노력합니다. 통계
                    로그 제공을 통해 더욱 풍부한 정보를 제공합니다.
                  </p>
                  <Link href="/services/survey">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/slotmachine">
                    <a>
                      <img src="/images/services/services-5.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/slotmachine">
                      <a>슬롯머신</a>
                    </Link>
                  </h3>
                  <p>
                    사용자 중 1명을 무작위로 추첨하여 이벤트를 진행할 수
                    있습니다.
                  </p>
                  <Link href="/services/slotmachine">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/roulette">
                    <a>
                      <img src="/images/services/services-6.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/roulette">
                      <a>룰렛</a>
                    </Link>
                  </h3>
                  <p>
                    사용자가 즐길 수 있는 다양한 선택지를 제공합니다. 선택지와
                    확률을 설정하여 더욱 다양한 이벤트를 진행할 수 있습니다.
                  </p>
                  <Link href="/services/roulette">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllServicesCard;
