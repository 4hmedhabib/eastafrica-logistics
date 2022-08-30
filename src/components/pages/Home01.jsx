import React, { Component, useState } from "react";
import {
  Footer,
  Header,
  Slider,
  Loader,
  CarouselClient,
  TopBar,
} from "../layouts/general";
import { Featured } from "../layouts/general/featured";
import { Services } from "../layouts/general/services";
import { Project } from "../layouts/general/projects";
import { Callback } from "../layouts/general/callback";
import { Blog } from "../layouts/general/blog";

const Home = () => {
  const [headers, setHeaders] = useState([
    {
      id: 1,
      names: "Home",
    },
  ]);
  return (
    <div className="bg-body3">
      <Loader />
      <div className="boxed">
        <TopBar />
        {headers.map((data) => (
          <Header data={data} key={data.id} />
        ))}
        <Slider />
        {/* <Featured />
                    <Services />
                    <Project />
                    <Callback /> */}

        {/* <Blog />

                    <CarouselClient /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
