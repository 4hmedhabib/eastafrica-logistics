import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    image: "/images/services/services-1.jpeg",
    title: "Freight Forwarding",
    description:
      "We offer professional customs clearing and forwarding services at the Seaport and Airports through highly professional, qualified and experienced staff. The smooth...",
  },
  {
    image: "/images/services/services-2.jpeg",
    title: "Ocean FCL (Import / Export)",
    description:
      "Given our existing large clientele and facilities, this department is well on its way to reach unprecedented heights. Through E-mail, Telephone, Fax and Internet, our...",
  },
  {
    image: "/images/services/services-3.jpeg",
    title: "Air Freight Service",
    description:
      "When it is about cargo- always go to the cargo people. By coming to East Africa Cargo, you would have taken one of the steps of ensuring your cargo arrives safely ...",
  },
  {
    image: "https://templates.hibootstrap.com/ezio/default/assets/img/about-img.jpg",
    title: "Project Cargo",
    description:
      "Qoraal Tusaal ah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum minima eligendi neque labore asperiores ...",
  },
];

const ServiceTwo = ({ textAlign, cardStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`card-box ${cardStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <Link to="#service">
                    <img src={`${val.image}`} alt="card Images" />
                  </Link>
                </div>
                <div className="content">
                  <h3 className="title mb--20">
                    <strong>
                      <Link
                        to="#service"
                        dangerouslySetInnerHTML={{ __html: val.title }}
                      ></Link>
                    </strong>
                  </h3>
                  <p
                    className="description b1 color-gray mb--0"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  ></p>
                  <Link
                    className="btn-default btn-small btn-border"
                    to="#service"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceTwo;
