import React from "react";
import "./la_jumbo.scss";
import la_map from "../../assets/la_map.jpg";

const LAJumbo = () => {
  return (
    <section className="row la_jumbo mb-5">
      <div className="col-lg-4">
        <img
          id="la_map"
          className="image_format"
          src={la_map}
          alt="Map of Los Angeles"
        />
      </div>
      <div id="la_jumbo_textfield" className="col-lg-8 ">
        <h4>
          Partnered with Amazon to Deliver throughout the Los Angeles Area
        </h4>
        <p className="mt-4">
          As an associate for MDL, you will be delivering in various areas
          within or around the city of Commerce in Los Angeles.
        </p>
      </div>
    </section>
  );
};

export default LAJumbo;
