import React from "react";
import "./main_content.scss";
import LAJumbo from "../la_jumbotron/LAJumbo.js";
import DSP_Section from "../dsp_card/DSPDriverCard.js";
import ContactCard from "../contact_form/ContactCard.js";

const MainContent = () => {
  return (
    <div className="container custom_container">
      <LAJumbo />
      <DSP_Section />
      <ContactCard />
    </div>
  );
};

export default MainContent;
