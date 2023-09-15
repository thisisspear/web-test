import React from "react";

const QuizDetailsContent = () => {
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
              <h3>지식과 즐거움의 결합</h3>
              <p>
                우리는 새로운 형태의 학습과 엔터테인먼트 방식을 탐구하고
                있습니다. 그 결과, 서바이벌 퀴즈쇼라는 새로운 방식을
                도입하였습니다. 이는 지식을 테스트하고 공유하는 동시에,
                참가자들에게 긴장감 넘치는 경쟁의 재미를 선사합니다. 단체 행사,
                팀 빌딩, 교육 세션 등 다양한 환경에서 활용 가능하며, 참가자들의
                지식과 기지를 검증하는 데 중요한 역할을 합니다.
              </p>

              <ul className="list">
                <li>
                  <h4>참가자의 패배를 즐기는 도전의 장</h4>
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 다양한 주제와
                  난이도의 질문을 통해 참가자들의 지식을 다양한 방면에서
                  검증합니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 실시간 점수판은
                  참가자들에게 현재 자신의 위치를 알려줍니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 잘못된 답변을
                  선택하면 탈락하는 서바이벌 방식으로 긴장감을 높입니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 다양한 보너스
                  라운드를 통해 추가 점수를 얻을 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 최종 승리자에게는
                  특별한 보상이 주어집니다.
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
                서바이벌 퀴즈쇼는 지식을 검증하고 공유하는 동시에, 참가자들에게
                긴장감 넘치는 경쟁의 재미를 선사합니다. 단순히 지식을 테스트하는
                것을 넘어, 참가자들과의 실시간 상호작용을 통해 새로운 경험을
                제공하고, 그것을 바탕으로 한 경쟁을 도모할 수 있습니다.
              </p>
            </div>
            <div className="article-services-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                서바이벌 퀴즈쇼와 함께라면, 지식의 경계를 넘어 새로운
                엔터테인먼트를 발견하게 될 것입니다.
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
                지금 바로 서바이벌 퀴즈쇼에 참여해보세요. 이를 통해 지식을
                테스트하고, 그것을 공유함으로써 자신의 지식을 확장하고, 경쟁의
                재미를 즐길 수 있습니다. 서바이벌 퀴즈쇼는 여러분의 지식과
                승리의 욕구를 새로운 레벨로 끌어올릴 것입니다. 서바이벌 퀴즈쇼가
                여러분과 함께합니다.
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

export default QuizDetailsContent;
