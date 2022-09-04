import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceOne from "./ServiceOne";
import ServiceTwo from "./ServiceTwo";
import ServiceThree from "./ServiceThree";
import ServiceFour from "./ServiceFour";
import ServiceFive from "./ServiceFive";
import Separator from "../separator/Separator";

const Service = () => {
  return (
    <>
      <SEO title="Service || Doob - React Business  Template" />
      <Layout>
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
      </Layout>
    </>
  );
};

export default Service;
