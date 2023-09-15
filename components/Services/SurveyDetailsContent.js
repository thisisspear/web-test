import React from "react";

const SurveyDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <img
                src="/images/services-details/services-details-1.jpg"
                alt="image"
              />
            </div>
            <div className="article-services-content">
              <h3>효과적인 피드백의 수단</h3>
              <p>
                설문조사는 고객의 의견, 직원의 만족도, 제품의 사용성 등 다양한
                정보를 신속하고 정확하게 얻는 데 있어 뛰어난 도구입니다. 이는
                의사 결정 과정에서 중요한 역할을 하며, 객관적인 데이터를
                바탕으로 더 효과적인 전략을 세우는 데 도움을 줍니다.
              </p>

              <ul className="list">
                <li>
                  <h4>효과적인 피드백을 위한 중심 도구</h4>
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 다양한 종류의 질문
                  형태를 통해 사용자의 의견을 자세히 들을 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 사용자의 응답을
                  실시간으로 모니터링하며, 응답률과 결과를 즉시 확인할 수
                  있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 설문의 유연한
                  설계로 다양한 환경과 요구 사항에 쉽게 적용할 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 사용자가 익명으로
                  참여할 수 있어, 솔직하고 객관적인 의견 수집이 가능합니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 데이터 분석 도구를
                  통해 응답을 통계적으로 분석하고, 효과적인 인사이트를 얻을 수
                  있습니다.
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-7 col-sm-6">
                <div className="article-services-middle-image">
                  <img
                    src="/images/services-details/services-details-2.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="article-services-middle-image">
                  <img
                    src="/images/services-details/services-details-3.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="article-services-content">
              <p>
                설문조사를 통해 다양한 주제에 대한 심층적인 피드백을 얻을 수
                있습니다. 정보를 수집하는 것 뿐만 아니라, 이를 바탕으로 사업
                전략을 개선하고, 고객 만족도를 향상시키는 데 크게 기여합니다.
              </p>
            </div>
            <div className="article-services-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                설문조사와 함께라면, 피드백의 경계를 넘어 깊은 이해와 효과적인
                전략을 세울 수 있습니다.
              </p>

              <div className="quote-shape">
                <img
                  src="/images/services-details/circle-shape.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="article-services-content">
              <p>
                지금 바로 설문조사를 활용해보세요. 이를 통해 사용자의 목소리를
                듣고, 그것을 사업의 성장으로 이어질 수 있습니다. 설문조사가
                여러분의 의사결정 과정을 돕습니다. 설문조사가 여러분과
                함께합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="services-details-shape">
          <img src="/images/services-details/line-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default SurveyDetailsContent;
