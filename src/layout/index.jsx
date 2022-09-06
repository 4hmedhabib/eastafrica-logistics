import React, { Fragment } from "react";
import FooterTwo from "../common/footer/FooterTwo";
import HeaderOne from "../common/header/HeaderOne";

const Layout = (props) => {
  return (
    <Fragment>
      <HeaderOne
        btnStyle="btn-small btn-icon round"
        HeaderSTyle="header-transparent"
      />
      <main className="page-wrapper">{props.children}</main>;
      <FooterTwo />
    </Fragment>
  );
};

export default Layout;
