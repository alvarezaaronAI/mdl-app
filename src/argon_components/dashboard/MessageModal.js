import React, { useState, useEffect } from "react";
import "../dashboard_styling/applicant_modal.scss";
import firebase from "../../firebase.js";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Table,
  Card,
  CardText,
  CardBody,
} from "reactstrap";

const btn_style = {
  padding: "0.3rem 1.7rem",
};

const ApplicantModal = (props) => {
  const { name, email, sent, message } = props.content;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //Need to update firebase based on values changed upon closing the modal
  const toggleUpdate = () => {
    let updatedStatus = {
      pending: true,
      denied: false,
      hired: false,
    };

    // let applicant = firebase
    //   .firestore()
    //   .collection("applicants")
    //   .doc(String(email));

    // applicant.update({ status: updatedStatus });
    setModal(!modal);
  };

  //   const deleteDoc = () => {
  //     let applicant = firebase
  //       .firestore()
  //       .collection("applicants")
  //       .orderBy()
  //       .doc(String(email));

  //     applicant.delete();

  //     setModal(!modal);
  //   };

  return (
    <div>
      <Button color="info" onClick={toggle} style={btn_style}>
        View
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="bg-success">
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h5>Name: {name}</h5>
          <h5>Date sent: {sent}</h5>
          <h5>Message:</h5>
          <Card>
            <CardBody>
              <CardText>{message}</CardText>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button color="danger" onClick={"deleteDoc"}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ApplicantModal;
