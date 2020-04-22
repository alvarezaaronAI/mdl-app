import React, { useState, useEffect, useRef } from "react";
import firebase from "../../firebase.js";
import SuccessModal from "../modals/SucessModalApply";

const ApplyForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const ref = useRef();

  function onSubmit(e) {
    e.preventDefault();
    let current_date = getDate();
    ref.current.toggle();

    firebase
      .firestore()
      .collection("applicants")
      .doc(email)
      .set({
        firstName,
        lastName,
        email,
        dateApply: current_date,
        position: props.job_title,
        status: "pending",
      })
      .then(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
      })
      .catch(() => {
        console.log("whoops");
      });
  }

  return (
    <div id="apply-form" className="container my-5">
      <form onSubmit={onSubmit} id="apply-submit">
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label for="apply-firstName"></label>
            <input
              type="text"
              className="form-control"
              id="apply-firstName"
              placeholder="First name*"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">Please enter a first name.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="apply-lastName"></label>
            <input
              type="text"
              className="form-control"
              id="apply-lastName"
              placeholder="Last name*"
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">Please enter a last name.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="apply-email"></label>
            <input
              type="email"
              className="form-control"
              id="apply-email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

          <div className="col-md-12 text-left">
            <input
              id="submit_button"
              className="btn btn-primary "
              type="submit"
              value="submit"
            />
          </div>
        </div>

        {/* <h4>
          Upload Cv <p className="text-muted">(optional)</p>
        </h4>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="resume-file" />
          <label className="custom-file-label" for="customFile">
            Choose file
          </label>
        </div> */}
      </form>
      <SuccessModal
        ref={ref}
        title="Application Submitted"
        body="Your application is now in the process of being reviewed!"
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

const removeNonNumericCharacters = (string) => {
  return string.replace(/\D/g, "");
};

export default ApplyForm;
