import React from "react";
import "./dsp_driver.scss";
import driver_img from "../../assets/driver_unsplash.png";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

const DSPDriverCard = () => {
  return (
    <section className="row dsp_driver_section">
      <div className="col-lg-5">
        <img className="image_format" src={driver_img} alt="driver_unsplash" />
      </div>
      <div className="col-lg-7">
        <div className="container dsp_driver_content">
          <div className="row">
            <h2 id="dsp_driver_title" className="col-12">
              Deliver for MDL today!
            </h2>
            <p id="dsp_text_block" className="col-12">
              We are passionate about serving our community and spreading joy by
              ensuring timely delivery for our customers. We strive for
              excellence by adhering to stringent safety standards, while being
              backed by the most customer-focused company on earth. If you're
              ready to make an impact, apply today!
            </p>
            <div className="col-lg-12">
              <div className="apply_button">
                <Link className="apply_button_text" to="/apply">
                  Apply
                  {/* <p className="apply_button_text">Apply Today!</p> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DSPDriverCard;
