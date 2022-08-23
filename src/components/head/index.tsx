import React from "react";

type Props = {};

const TopHeader = () => {
  return (
    <div className="top-header top-header-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-10">
            <ul className="header-left-content">
              <li>
                <i className="bx bx-home"></i>
                Hargeisa, Somaliland
              </li>
              <li>
                <i className="bx bx-phone-call"></i>
                <a href="tel:+1-(123)-456-7890">+252 (63) 400 0000</a>
              </li>
              <li>
                <i className="bx bx-envelope"></i>
                <a href="mailto:hello@ezio.com">info@eastafrica.com</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-2">
            <div className="header-right-content">
              <ul className="flag-area">
                <li className="flag-item-top">
                  <a href="#" className="flag-bar">
                    <img src="assets/img/flag/usa.png" alt="Image" />
                    <span>USA</span>
                  </a>

                  <ul className="flag-item-bottom">
                    <li className="flag-item">
                      <a href="#" className="flag-link">
                        <img src="assets/img/flag/canada.png" alt="Image" />
                        Canada
                      </a>
                    </li>
                    <li className="flag-item">
                      <a href="#" className="flag-link">
                        <img src="assets/img/flag/australia.png" alt="Image" />
                        Australia
                      </a>
                    </li>
                    <li className="flag-item">
                      <a href="#" className="flag-link">
                        <img src="assets/img/flag/germany.png" alt="Image" />
                        Germany
                      </a>
                    </li>
                    <li className="flag-item">
                      <a href="#" className="flag-link">
                        <img src="assets/img/flag/argentina.png" alt="Image" />
                        Argentina
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header({}: Props) {
  return (
    <header className="header-area">
      {/* <TopHeader /> */}

      <div className="navbar-area">
        <div className="mobile-nav">
          <div className="container">
            <div className="mobile-menu">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/assets/img/east-africa-logo.jpg"
                    alt="logo"
                    className="logo w-25"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img
                  src="/assets/img/east-africa-logo.jpg"
                  alt="logo"
                  className="logo w-25"
                />
              </a>

              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      Home
                      <i className="bx bx-chevron-down"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          Home One
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          Home Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link active">
                          Home Three
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="bx bx-chevron-down"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about-us.html" className="nav-link">
                          About Us
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Pricing
                          <i className="bx bx-chevron-right"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              href="pricing-style-one.html"
                              className="nav-link"
                            >
                              Pricing Style One
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pricing-style-two.html"
                              className="nav-link"
                            >
                              Pricing Style Two
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="testimonials.html" className="nav-link">
                          Testimonials
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Shop
                          <i className="bx bx-chevron-right"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="products.html" className="nav-link">
                              Products
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="cart.html" className="nav-link">
                              Cart
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="checkout.html" className="nav-link">
                              Checkout
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="product-details.html" className="nav-link">
                              Product Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          Team
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          User
                          <i className="bx bx-chevron-right"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="my-account.html" className="nav-link">
                              My Account
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="log-in.html" className="nav-link">
                              Log In
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="register.html" className="nav-link">
                              Register
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="recover-password.html"
                              className="nav-link"
                            >
                              Recover Password
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="global-location.html" className="nav-link">
                          Global Location
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-conditions.html" className="nav-link">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="404.html" className="nav-link">
                          404 Error Page
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                      <i className="bx bx-chevron-down"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services-style-one.html" className="nav-link">
                          Services Style One
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="services-style-two.html" className="nav-link">
                          Services Style Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="services-style-three.html"
                          className="nav-link"
                        >
                          Services Style Three
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="services-details.html" className="nav-link">
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog
                      <i className="bx bx-chevron-down"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-column-one.html" className="nav-link">
                          Blog Column One
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-column-two.html" className="nav-link">
                          Blog Column Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-column-three.html" className="nav-link">
                          Blog Column Three
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-left-sidebar.html" className="nav-link">
                          Blog Left Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="company.html" className="nav-link">
                      Company
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact-us.html" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="others-option">
                  <div className="get-quote">
                    <a href="pricing-style-two.html" className="default-btn">
                      <span>Get A Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="option-inner">
                <div className="others-option justify-content-center d-flex align-items-center">
                  <div className="get-quote">
                    <a href="pricing-style-two.html" className="default-btn">
                      <span>Get A Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
