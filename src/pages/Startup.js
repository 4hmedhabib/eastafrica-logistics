import React from "react";
import Slider from "react-slick";
import SEO from "../common/SEO";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutFour from "../elements/about/AboutFour";
import ServiceTwo from "../elements/service/ServiceTwo";
import SlipFour from "../elements/split/SlipFour";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import BlogProp from "../components/blog/itemProp/BlogProp";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const BannerData = [
  {
    image: "/images/slides/banner-bg-1.jpeg",
    title: "Get The Best <br /> Transport And Logistics Support.",
    description:
      "East Africa Cargo Services and Logistics has embraced our mission to provide outstanding </br> transportation and logistics services for cargo of any size, moving to any </br> location, while exceeding customer expectations </br> in quality, service and price.",
  },
  {
    image: "/images/slides/banner-bg-2.jpeg",
    title: "Get The Best <br /> Transport And Logistics Support.",
    description:
      "East Africa Cargo Services and Logistics has embraced our mission to provide outstanding </br> transportation and logistics services for cargo of any size, moving to any </br> location, while exceeding customer expectations </br> in quality, service and price.",
  },
];

const Startup = () => {
  return (
    <>
      <SEO title="Home" />

      {/* Start Slider Area  */}
      <Slider
        className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow"
        {...BannerActivation}
      >
        {BannerData.map((data, index) => (
          <div key={index} className="single-slide">
            <div
              className="height-750 bg-overlay bg_image"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${data.image})`,
              }}
            >
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-lg-12">
                    <div className="inner text-center">
                      <h1
                        className="title"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                      ></h1>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      ></p>
                      <div className="call-to-btn text-left mt_sm--20 text-md-center pointer-event">
                        <Link
                          className="btn-default btn-icon"
                          target="_blank"
                          href="/contact"
                        >
                          Get Start Now
                          <i className="icon">
                            <FiArrowRight />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* End Slider Area  */}
      <Separator />
      <AboutFour image="/images/image6.jpeg" />
      <Separator />
      {/* Start Service Area  */}
      <div className="rn-service-area rn-section-gap ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="What we can do for you"
                title="Services provide for you."
                description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
              />
            </div>
          </div>
          <ServiceTwo cardStyle="card-style-1" textAlign="text-left" />
        </div>
      </div>
      {/* End Service Area  */}
      <Separator />
      {/* Start Elements Area  */}
      <div className="rwt-split-area mt--40">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Why"
                title="Choose Us?"
                description=""
              />
            </div>
          </div>
          <SlipFour />
        </div>
      </div>
      {/* End Elements Area  */}
      <Separator />
      {/* Start Elements Area  */}
      <div className="rwt-testimonial-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--10">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Client Feedback"
                title="Testimonial."
              />
            </div>
          </div>
          <TestimonialOne
            column="col-lg-4 col-md-6 col-12 mt--30"
            teamStyle="card-style-default testimonial-style-one"
          />
        </div>
      </div>
      {/* End Elements Area  */}
      <Separator />
      <BreadcrumbOne
        title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
        rootUrl="/"
        parentUrl="Home"
        currentUrl="Blog List"
      />
      <div className="main-content">
        {/* Start Blog Area  */}
        <div className="rn-blog-area rn-section-gap">
          <div className="container">
            <div className="row mt_dec--30">
              <BlogProp
                column="col-lg-4 col-md-6 col-12 mt--30"
                StyleVarProp="box-card-style-default"
              />
            </div>
          </div>
        </div>
        {/* End Blog Area  */}
      </div>
    </>
  );
};

export default Startup;
