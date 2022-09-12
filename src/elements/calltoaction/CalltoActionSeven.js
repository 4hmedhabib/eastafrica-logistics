import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const callToActionData = {
  title: "Ready to start creating a standard website?",
  subtitle:
    "East Africa Cargo Services and Logistics is a company you can trust. ",
  btnText: "Get Start",
};

const CalltoActionSeven = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-7">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-8 col-md-8">
            <div className="inner">
              <div className="content text-left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Link to={"/"} className="">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        alt="East Africa Logo"
                        style={{
                          objectFit: "contain",
                          width: "80px",
                          padding: 0,
                          margin: 0,
                        }}
                      />
                    </Link>
                  </div>
                  <div className="p-0 m-0">
                    <span>
                      <h1 className="h4 p-0 m-0 text-dark">East Africa</h1>
                      <p className="p-0 m-0">Logistics & Cargo</p>
                    </span>
                  </div>
                </div>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p className="subtitle">{callToActionData.subtitle}</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <div className="call-to-btn text-left mt_sm--20 text-md-right">
                <Link
                  className="btn-default btn-icon"
                  target="_blank"
                  href="/contact"
                >
                  {callToActionData.btnText}{" "}
                  <i className="icon">
                    <FiArrowRight />
                  </i>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionSeven;
