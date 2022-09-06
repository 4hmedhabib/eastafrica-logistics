import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
  {
    countNum: 950,
    countTitle: "Delivered Packages.",
  },
  {
    countNum: 75,
    countTitle: "Countries",
  },
  {
    countNum: 69,
    countTitle: "Happy Clients",
  },
  {
    countNum: 500,
    countTitle: "Tons Of Goods",
  },
];
const SlipFour = () => {
  return (
    <div className="rn-splite-style bg-color-blackest">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="order-2 order-lg-1 col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">
                  We Are The Best And That's Why You Can Choose Us Easily
                </h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  East Africa Cargo Services and Logistics has embraced our
                  mission to provide outstanding transportation and logistics
                  services for cargo of any size, moving to any location, while
                  exceeding customer expectations in quality, service and price.
                </p>
              </ScrollAnimation>

              <div className="row">
                {Data.map((data, index) => (
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                    key={index}
                  >
                    <div className="count-box counter-style-4 text-left">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <div className="count-number">
                              {isVisible ? <CountUp end={data.countNum} /> : 0}
                            </div>
                          )
                        }
                      </TrackVisibility>
                      <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 order-lg-2 col-lg-12 col-xl-6 col-12">
            <div className="thumbnail">
              <img
                src="./images/services/choose-us-img-3.jpeg"
                alt="split Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlipFour;
