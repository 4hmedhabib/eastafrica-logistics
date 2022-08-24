import React from "react";

type Props = {};

export default function Banner({}: Props) {
  return (
    <section
      className="banner-area banner-area-three bg-3 jarallax"
      data-jarallax='{"speed": 0.3}'
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="banner-content">
                  <span
                    className="top-title wow fadeInDown"
                    data-wow-delay="1s"
                  >
                    Welcome to ezio
                  </span>
                  <h1 className="wow fadeInDown" data-wow-delay="1s">
                    Make Faster Delivery In A Quick Solution
                  </h1>

                  <p className="wow fadeInLeft" data-wow-delay="1s">
                    Join the millions getting bargain deals on shipping cars
                    furniture freight and more
                  </p>

                  <div className="banner-btn wow fadeInUp" data-wow-delay="1s">
                    <a href="pricing-style-one.html" className="default-btn">
                      <span>Get A Free Quote</span>
                    </a>
                    <a href="contact-us.html" className="default-btn active">
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div
                  className="quote-price-content wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="courses-title">
                    <h3>Quick Quote Price</h3>
                    <p>Let's start a price quote on transport</p>
                  </div>

                  <form className="courses-form">
                    <div className="form-group">
                      <label>Transportation Route</label>
                      <select>
                        <option value="1">90 K. M.</option>
                        <option value="2">100 K. M.</option>
                        <option value="3">200 K. M.</option>
                        <option value="4">300 K. M.</option>
                        <option value="5">400 K. M.</option>
                        <option value="6">500 K. M.</option>
                        <option value="7">600 K. M.</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Dispatch Country</label>
                      <select>
                        <option value="1">London</option>
                        <option value="2">Canada</option>
                        <option value="3">Australia</option>
                        <option value="4">Brazil</option>
                        <option value="5">Argentina</option>
                        <option value="6">Hungarian</option>
                        <option value="7">Latvian</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Shipment Country</label>
                      <select>
                        <option value="1">Australia</option>
                        <option value="2">Canada</option>
                        <option value="3">London</option>
                        <option value="4">Hungarian</option>
                        <option value="5">Argentina</option>
                        <option value="6">Brazil</option>
                        <option value="7">Latvian</option>
                      </select>
                    </div>

                    <button type="submit" className="default-btn">
                      <span>Apply</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
