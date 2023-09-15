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
              <h3>이벤트의 새로운 면모</h3>
              <p>
                저희는 사용자들의 참여를 촉진하고, 그들에게 재미있고 신나는
                경험을 제공하기 위해 항상 새로운 방법을 탐색하고 있습니다. 그
                중에서도 룰렛 기능은 사용자들에게 다양한 선택지를 제공하고, 그
                중 하나를 무작위로 선택하여 이벤트를 진행하거나 경품을 추첨하는
                데 사용됩니다. 이를 통해 이벤트에 흥미롭고 다양한 요소를 도입할
                수 있으며, 사용자들의 참여를 더욱 유도할 수 있습니다.
              </p>

              <ul className="list">
                <li>
                  <h4>이벤트를 더 흥미롭게 만드는 도구</h4>
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 다양한 선택지와
                  확률을 설정하여 이벤트를 더 다양하고 흥미롭게 만듭니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 즉각적인 결과
                  표시로 사용자에게 설렘과 긴장감을 제공합니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 무작위 추첨으로
                  모든 사용자에게 공평한 기회를 제공합니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 직관적인
                  인터페이스로 누구나 쉽게 참여하고 사용할 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 커뮤니티 활동을
                  활성화하고, 사용자 참여를 촉진합니다.
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
                룰렛은 단순한 참여를 넘어, 사용자들에게 즐거움과 설레임, 그리고
                기대감을 제공합니다. 다양한 선택지와 확률 설정을 통해, 각
                이벤트와 경품 추첨이 모든 참여자에게 재미있는 경험으로 변화될
                것입니다.
              </p>
            </div>
            <div className="article-services-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                룰렛과 함께라면, 이벤트가 단순한 행사가 아닌, 모든 참여자가
                기대감을 느낄 수 있는 즐거운 시간이 될 것입니다.
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
                지금 바로 룰렛을 이용해보세요. 이를 통해 이벤트를 더 흥미롭고
                다양하게 만들고, 사용자 참여를 높일 수 있습니다. 룰렛이 여러분의
                이벤트를 신나고 재미있게 만들어 드립니다. 룰렛이 여러분과
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
