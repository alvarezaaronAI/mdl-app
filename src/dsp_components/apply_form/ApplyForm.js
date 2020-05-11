import React, { useState, useEffect, useRef } from "react";
import firebase from "../../firebase.js";
import SuccessModal from "../modals/SucessModalApply";
import Footer from "../footer/Footer";

import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ApplyForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { position } = props.job_title;

  const ref = useRef();

  const getCountId = async () => {
    let id = "dude";
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Some fields were left blank");
      return;
    } else {
      let db = firebase.firestore();

      let counterRef = db.collection("stats").doc("count_id");
      let newApplicantRef = db.collection("applicants");

      let current_date = getDate();
      let current_time = getTime();

      //Updates applicant count in the database while also applying latest count to new applicant's id.
      db.runTransaction((transaction) => {
        transaction.get(counterRef).then((user_count) => {
          //updating count for the id to be applied to a new applicant
          let new_applicant_id = user_count.data().count + 1;

          counterRef.update({ count: new_applicant_id });

          newApplicantRef
            .doc(email)
            .set({
              firstName,
              lastName,
              email,
              dateApplied: current_date,
              position: props.job_title,
              status: { pending: true, hired: false, denied: false },
              user_id: new_applicant_id,
              timeApplied: current_time,
            })
            .then(() => {
              setFirstName("");
              setLastName("");
              setEmail("");
            })
            .catch((err) => {
              console.log("Application failed to send");
            });
        });
      });
    }
  };

  return (
    <>
      <Container>
        <Form id="apply-form" onSubmit={onSubmit}>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="firstName"
                  placeholder=""
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="applicant_email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="applicant_email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={onSubmit}>Submit Application</Button>
          <SuccessModal
            ref={ref}
            title="Application Submitted"
            body="Your application is now in the process of being reviewed!"
          />
        </Form>
      </Container>
      <Footer></Footer>
    </>
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

const removeNonNumericCharacters = (string) => {
  return string.replace(/\D/g, "");
};

export default ApplyForm;
