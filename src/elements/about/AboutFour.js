import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
    popupLink: ["https://www.youtube.com/watch?v=5aILNbBYr8c"],
  },
];

const AboutFour = ({ image }) => {
  return (
    <div className="about-area about-style-4 mt--80 mb--50">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <VideoTwo imagename={`${image}`} galleryItem={item} />
              </div>
            ))}
          </div>

          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h2 className="title">
                  Modern And Trusted Logistics <br />
                  <strong>Company.</strong>
                </h2>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">24/7 Business Support</h4>
                      <p className="text">
                        Lorem ipsum dolor consectetur adipiscing do eiusmod
                        tempor incididunt labore.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">Secure Transportation</h4>
                      <p className="text">
                        Lorem ipsum dolor consectetur adipiscing do eiusmod
                        tempor incididunt labore.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">Easy And Quick Problem Analysis</h4>
                      <p className="text">
                        Lorem ipsum dolor consectetur adipiscing do eiusmod
                        tempor incididunt labore.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-btn mt--30">
                  <a className="btn-default" href="#">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
