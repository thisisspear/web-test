import React, { useState } from "react";
import Link from "@/utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      {/* Start Header Area */}
      <header className="main-header-area">
        <div id="navbar" className="navbar-area">
          <div className="main-navbar">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.png" alt="Site logo" />
                  </a>
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">홈</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" activeClassName="active">
                        <a className="nav-link">소개</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        기능 <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/services/services"
                            activeClassName="active"
                          >
                            <a className="nav-link">소개</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/postit"
                            activeClassName="active"
                          >
                            <a className="nav-link">공유 포스트잇</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/monitoring"
                            activeClassName="active"
                          >
                            <a className="nav-link">실시간 모니터링</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/services/quiz" activeClassName="active">
                            <a className="nav-link">서바이벌 퀴즈쇼</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/survey"
                            activeClassName="active"
                          >
                            <a className="nav-link">설문조사</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/roulette"
                            activeClassName="active"
                          >
                            <a className="nav-link">룰렛/슬롯머신</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a className="nav-link">
                          포럼 <i className="ri-arrow-down-s-line"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/forum/notice" activeClassName="active">
                            <a className="nav-link">공지사항</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/forum/faq" activeClassName="active">
                            <a className="nav-link">자주 묻는 질문</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/forum/team" activeClassName="active">
                            <a className="nav-link">팀 소개</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/forum/gallery" activeClassName="active">
                            <a className="nav-link">갤러리</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">가격</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/docs" activeClassName="active">
                        <a className="nav-link">문서</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">문의</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <i
                      className="search-btn ri-search-line"
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div>

                  <div className="option-item">
                    <div
                      className="side-menu-btn"
                      onClick={handleToggleSidebarModal}
                    >
                      <i className="ri-bar-chart-horizontal-line"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right fade ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <Link href="/">
                <a>
                  <img src="/images/black-logo.png" alt="image" />
                </a>
              </Link>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  엑스모아와 함께하여 비즈니스 성장을 이루어나가세요. 우리의
                  다양한 서비스로 고객 여러분의 비즈니스를 더욱 성장시키고
                  발전시킬 수 있습니다. 엑스모아가 도와드리겠습니다.
                </p>

                <div className="sidebar-btn">
                  <Link href="/contact">
                    <a className="default-btn">문의하기</a>
                  </Link>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:027176302">02-717-6302</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="mailto:sec@xcast.kr">sec@xcast.kr</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i> 서울특별시 영등포구
                    국회대로 786, B1층
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Navbar;
