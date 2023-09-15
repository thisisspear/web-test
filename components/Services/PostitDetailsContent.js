import React from "react";

const PostitDetailsContent = () => {
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
              <h3>협업의 새로운 기준</h3>
              <p>
                우리는 생각을 조직화하고 공유하는 방법을 새롭게 탐구하고
                있습니다. 그중에서도 공유 포스트잇은 여러분의 아이디어를
                간편하게 기록하고, 그것들을 공유함으로써 팀 전체의 생산성을
                향상시키는 효과적인 도구입니다. 이는 비즈니스 미팅, 프로젝트
                계획, 브레인스토밍 세션에서 유용하게 사용될 수 있으며,
                아이디어를 공유하고 그것을 발전시키는데 중요한 역할을 합니다.
              </p>

              <ul className="list">
                <li>
                  <h4>협업을 위한 강력한 도구</h4>
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 다양한 색상과
                  크기의 포스트잇을 이용하여 아이디어를 효과적으로 표현할 수
                  있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 간편한 드래그 &
                  드롭 기능으로 포스트잇을 쉽게 움직일 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 공유 기능을 통해
                  다른 팀원들과 아이디어를 쉽게 공유할 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 텍스트, 그림,
                  이미지 등 다양한 방식으로 정보를 기록할 수 있습니다.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> 포스트잇을
                  그룹화하거나 정렬하여 생각을 조직화하고 명확하게 전달할 수
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
                공유 포스트잇은 개별적인 생각을 팀 전체의 아이디어로 발전시킬 수
                있는 플랫폼을 제공합니다. 단순히 정보를 공유하는 것을 넘어,
                팀원들과의 실시간 상호작용을 통해 새로운 아이디어를 발굴하고,
                그것을 바탕으로 한 혁신을 도모할 수 있습니다.
              </p>
            </div>
            <div className="article-services-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                공유 포스트잇과 함께라면, 협업의 경계를 넘어 새로운 가능성을
                발견하게 될 것입니다.
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
                지금 바로 공유 포스트잇을 이용해보세요. 이를 통해 아이디어를
                조직화하고, 그것을 공유함으로써 팀 전체의 생산성을 높일 수
                있습니다. 공유 포스트잇은 여러분의 생각을 팀 전체로 확장하고,
                그것을 혁신적인 결과로 이어질 수 있도록 도와줄 것입니다. 공유
                포스트잇이 여러분과 함께합니다.
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

export default PostitDetailsContent;
