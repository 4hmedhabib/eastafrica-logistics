import React, { Fragment } from "react";
import Banner from "../banner";
import Header from "../head";

type Props = {};

export const Layout = ({}: Props) => {
  return (
    <Fragment>
        <Header />
        <Banner />
    </Fragment>
  );
};
