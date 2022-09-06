import React from "react";
import SEO from "../../common/SEO";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceTwo from "./ServiceTwo";
import Separator from "../separator/Separator";

const Service = () => {
  return (
    <>
      <SEO title="Service || Doob - React Business  Template" />

        <BreadcrumbOne
          title="We Are Trusted For Our Services."
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Service"
        />
        <div className="main-content">
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
        </div>
    </>
  );
};

export default Service;
