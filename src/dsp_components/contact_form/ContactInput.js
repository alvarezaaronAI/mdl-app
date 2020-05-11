import React, { useState, useEffect, useRef } from "react";
import SuccessModal from "../modals/SucessModalApply";
import firebase from "../../firebase";

const ContactInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef();

  function OnSubmit(e) {
    e.preventDefault();
    let current_date = getDate();
    let current_time = getTime();
    ref.current.toggle();

    if (!name || !email || !message) {
      alert("Some fields were left blank");
      return;
    } else {
      async function sendMessage() {
        await firebase
          .firestore()
          .collection("messages")
          .doc(email)
          .set({
            name,
            email,
            sent: current_date,
            timeApplied: current_time,
            message,
          })
          .then(() => {
            setName("");
            setEmail("");
            setMessage("");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      sendMessage();
    }

    // firebase
    //   .firestore()
    //   .collection("messages")
    //   .doc(email)
    //   .set({
    //     name,
    //     email,
    //     sent: current_date,
    //     message,
    //   })
    //   .then(() => {
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <div id="form-container" className="container">
      <h3 className="text-left">Contact Us</h3>
      <form onSubmit={OnSubmit} id="contact-form">
        <div className="row">
          <div className="form-group col-lg-12">
            <label for="inputName"></label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Name*"
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="form-group col-lg-12">
            <label for="inputName"></label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>

          <div className="form-group col-12">
            <label for="messageInput"></label>
            <textarea
              type="text"
              className="form-control"
              id="messageInput"
              rows="3"
              placeholder="Message*"
              required
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
          </div>
          <div className="form-group col-12 text-left">
            <input
              className="form-control"
              id="contact-submit"
              type="submit"
              className="cool-btn mt-3"
              value="SEND"
            />
          </div>
        </div>
      </form>
      <SuccessModal
        ref={ref}
        title="Message Sent!"
        body="Your message will be reviewed."
      />
    </div>
  );
};

const getDate = () => {
  const todayDate = new Date();
  //months start at 0
  let month = todayDate.getMonth() + 1;
  let day = todayDate.getUTCDate();
  let year = todayDate.getUTCFullYear();
  return `${month}/${day}/${year}`;
};

const getTime = () => {
  let now = new Date();
  return now.getTime();
};

export default ContactInput;
