import React from "react";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeThreeFaq from "../HomeThree/HomeThreeFaq/HomeThreeFaq";
import HomeThreeFooter from "../HomeThree/HomeThreeFooter/HomeThreeFooter";
import HomeThreeHeroSection from "../HomeThree/HomeThreeHeroSection/HomeThreeHeroSection";
import HomeThreeProjects from "../HomeThree/HomeThreeProjects/HomeThreeProjects";
import HomeThreeSecondServices from "../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices";
import HomeThreeServices from "../HomeThree/HomeThreeServices/HomeThreeServices";
import HomeTwoTestimonial from "../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial";
import StyleHeaderSix from "./StyleHeaderSix/StyleHeaderSix";
import HomeHeroSlider from '../Home/HomeHeroArea/HomeHeroSlider'
import HomeFeatures from "../Home/HomeFeatures/HomeFeatures";

const HeaderStyleSix = () => {
  return (
    <>
      <PageHelmet pageTitle="Header Style Six" />

      <StyleHeaderSix />
      <HomeHeroSlider />
      <HomeFeatures />

    </>
  );
};

export default HeaderStyleSix;
