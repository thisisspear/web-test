import React from "react";
import Link from "next/link";

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area with-black-background pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PRICING</span>
            <h2>
              가장 합리적인 <b>가격</b>으로 만나보세요.
            </h2>
            <p>
              다양한 플랜이 준비되어 있습니다. 사용 목적에 맞춰 원하는 플랜을
              선택하세요. 아직 망설여 지신다면 데모 체험을 해보세요.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h3>Startup</h3>
                <div className="price">
                  $19 <span>/ 월</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy eirmod.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Sit amet consetetur set a
                    ledip.
                  </li>
                </ul>
                <div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Choose Plan</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1100"
                data-aos-once="true"
              >
                <h3>Basic</h3>
                <div className="price">
                  $49 <span>/ 월</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy eirmod.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Sit amet consetetur set a
                    ledip.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Lorems Sit ledip ipsum
                    dolor.
                  </li>
                </ul>
                <div className="pricing-btn">
                  <div className="pricing-btn">
                    <Link href="/contact">
                      <a className="default-btn">Choose Plan</a>
                    </Link>
                  </div>
                </div>
                <div className="most-popular">
                  <span>Most Popular</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h3>Advanced</h3>
                <div className="price">
                  $79 <span>/ 월</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy eirmod.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Sit amet consetetur set a
                    ledip.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Lorems Sit ledip ipsum
                    dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                </ul>
                <div className="pricing-btn">
                  <div className="pricing-btn">
                    <Link href="/contact">
                      <a className="default-btn">Choose Plan</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Image */}
        <div className="pricing-bg-shape-1">
          <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
        </div>
        <div className="pricing-shape-1">
          <img src="/images/pricing/pricing-shape-1.png" alt="image" />
        </div>
        <div className="pricing-shape-2">
          <img src="/images/pricing/pricing-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
