import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image, image2 }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <Link to={"/"} className="">
          <img
            src={image2}
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
      <div className="p-0 m-0 d-none d-md-block">
        <span>
          <h1 className="h4 p-0 m-0 text-dark">East Africa</h1>
          <p className="p-0 m-0">Logistics & Cargo</p>
        </span>
      </div>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
