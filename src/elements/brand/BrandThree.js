import React from "react";

const BrandList = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Telesom_logo.png",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/2411px-UN_emblem_blue.svg.png",
  },
  {
    image: "https://tiigsi.com/assets/img/brand/logo.png",
  },
  {
    image: "https://ominco.com/wp-content/uploads/2018/06/nura-317x202.png",
  },
  {
    image:
      "https://primeinfoserv.com/wp-content/uploads/2018/06/dahabshiil-logo-480x480.png",
  },
  {
    image:
      "https://cdn.shortpixel.ai/spai/w_158+q_lossy+ret_img+to_webp/https://somtelmain.smgtsystems.com/wp-content/uploads/2020/12/redefine-Somtel-Logo.png",
  },
];

const BrandThree = ({ brandStyle }) => {
  return (
    <ul className={`brand-list ${brandStyle}`}>
      {BrandList.map((data, index) => (
        <li key={index}>
          <a href="#">
            <img src={`${data.image}`} alt="Brand Image" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BrandThree;
