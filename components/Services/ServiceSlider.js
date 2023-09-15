import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3>
                  최고 품질의 <b>서비스</b>를 제공합니다
                </h3>
                <p>
                  엑스모아는 사용자의 다양한 요구에 맞추어 최고 품질의 서비스를
                  제공합니다. 사용자의 피드백을 즉시 반영하며 빠르게 변화하는
                  시장에 맞추어 유연하고 다양한 서비스를 제공합니다.
                </p>
                <div className="services-section-btn">
                  <Link href="/services/services">
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-1.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>공유 포스트잇</a>
                        </Link>
                      </h3>
                      <p>
                        의견을 공유하고 아이디어를 모아 팀원들과 쉽게 협업하고
                        커뮤니케이션을 이어가세요.
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-2.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>서바이벌 퀴즈쇼</a>
                        </Link>
                      </h3>
                      <p>
                        여러분의 지식을 테스트해 보세요! 직접 참여하여 경쟁하고,
                        상품을 획득하세요.
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-3.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>실시간 모니터링</a>
                        </Link>
                      </h3>
                      <p>지연시간 없는 고화질의 양방향 소통을 제공합니다</p>
                      <Link href="/services/service-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-4.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>Analytic Solutions</a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet con setetur sadipscing elitr
                        sed…
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
