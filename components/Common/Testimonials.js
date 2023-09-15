import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-section-content"
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>TESTIMONIALS</span>
                <h3>
                  행복한 고객의 달콤한 <b>이야기</b>
                </h3>
                <p>
                  엑스모아의 강력한 솔루션을 성공적으로 활용한 사례를
                  확인하세요! 매출 증대, 역량 강화, 인재 성장, 실시간 기능을
                  통한 업무 방식의 변화 등 다양한 사례를 확인할 수 있습니다.
                </p>

                <div className="testimonials-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-item"
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    엑스모아의 SDK를 이용하니 서비스 개발이 훨씬 편리해졌습니다.
                    특히 실시간 모니터링 기능으로 인해 사용자의 반응을 즉시
                    파악하고 서비스를 개선할 수 있어서 매우 만족스럽습니다.
                    엑스모아의 다양한 기능들이 저희 스타트업의 성장에 큰 도움이
                    되고 있습니다.
                  </p>
                  <h4>
                    김ㅇㅇ , <span>스타트업 대표</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    엑스모아의 퀴즈쇼와 설문조사 기능은 저희 교육 프로그램에
                    있어서 중요한 역할을 하고 있습니다. 이를 통해 학생들의
                    참여도를 높이고, 실시간으로 그들의 이해도를 체크할 수
                    있습니다. 사용이 간편해서, 엑스모아를 이용하게 된 이후로
                    교육 효과가 확실히 높아졌습니다.
                  </p>
                  <h4>
                    이ㅇㅇ, <span>교육기관 팀장</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    엑스모아의 포스트잇 기능은 저희 팀의 협업에
                    효과적이었습니다. 프로젝트를 진행하면서 중요한 아이디어나 할
                    일을 공유하고 관리하는 데 있어서 아주 유용했습니다.
                    엑스모아의 서비스 덕분에 팀원 모두의 생산성이 향상된 것을
                    느꼈습니다.
                  </p>
                  <h4>
                    박ㅇㅇ, <span>기업부서 매니저</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsbg-shape">
          <img src="/images/testimonials/testimonials-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
