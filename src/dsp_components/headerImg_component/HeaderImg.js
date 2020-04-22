import React from "react";
import "./header_img.scss";

const HeaderImg = (props) => {
  return (
    <>
      <img
        className="headerImage"
        src={props.src}
        alt="logistics freight image"
      />

      <div className="container amazon_dsp_banner">
        <div className="row justify-content-md-center ">
          <div className="col-md-6 col-lg-6 title_container">
            <h1 id="dsp_title" className="center_dsp_banner_content ">
              Amazon Delivery Service Partner
            </h1>
          </div>
          <div className="col-md-6 col-lg-6 title_container">
            <p id="dsp_banner_text" className="center_dsp_banner_content">
              Metro Deliveries and Logistics (MDL) is an Amazon Delivery Service
              Partner based out of Commerce, California. At MDL, we're driven by
              people. We’re a team of experienced, dependable, and highly
              motivated delivery associates that will go the extra mile for the
              customer. A team that not only values the work that they do, but
              also finds pride in ensuring that each package is handled with
              care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderImg;
