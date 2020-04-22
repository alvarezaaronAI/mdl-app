import React from "react";
import DSP_Nav from "../nav_component/DSP_Nav";
import HeaderSection from "../headerImg_component/HeaderImg";
import Footer from "../footer/Footer";
import MainContent from "../main_content/MainContent";
import mainImage from "../../assets/logistics_1.jpg";
// import "../../App.css";

const LandingPage = () => {
  return (
    <div className="App">
      <DSP_Nav />
      <HeaderSection src={mainImage} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
