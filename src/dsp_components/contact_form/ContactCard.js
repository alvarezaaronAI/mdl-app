import React from "react";
import "./contact.scss";
import contact_background_img from "../../assets/cargo_overview_unsplash.png";
import ContactInput from "./ContactInput.js";

const ContactCard = () => {
  return (
    <section className="row contact_section mt-5">
      <img
        id="contact_img"
        src={contact_background_img}
        alt="cargo_overview_unsplash"
      />
      <div className="col-lg-6 col-md-4 ">
        <div id="contact_info_block">
          <h3 className="text-left pl-2">Got a Question?</h3>
          <p className="text-left pl-2">
            Leave us a message and we will respond promptly!
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-md-8 ">
        <ContactInput />
      </div>
    </section>
  );
};

export default ContactCard;
