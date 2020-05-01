import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "../dashboard_styling/applicant_modal.scss";
import firebase from "../../firebase.js";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

const btn_style = {
  padding: "0.3rem 1.7rem",
};

const ModalExample = (props) => {
  const { firstName, lastName, email, applied, status } = props.profile;

  const [modal, setModal] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(status.pending);
  const [deniedStatus, setDeniedStatus] = useState(status.denied);
  const [hiredStatus, setHiredStatus] = useState(status.hired);

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
        <ModalHeader toggle={toggle}>{`${firstName} ${lastName}`}</ModalHeader>
        <ModalBody>
          <h5>Email: {email}</h5>
          <h5>Applied: {applied}</h5>
          <h5>Applicant Status:</h5>
          <Table>
            <tbody>
              <tr>
                <th>Pending</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pending_check"
                    checked={pendingStatus}
                    onChange={() => {
                      console.log("checked");
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="pending_check"></label>
                </div>
              </tr>
              <tr>
                <th>Hired</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="hired_check"
                    checked={hiredStatus}
                    onChange={() => {
                      console.log("checked");
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="hired_check"></label>
                </div>
              </tr>
              <tr>
                <th>Denied</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="denied_check"
                    checked={deniedStatus}
                    onChange={() => {
                      console.log("checked");
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="denied_check"></label>
                </div>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button color="danger" onClick={"deleteDoc"}>
            Delete
          </Button>

          <Button color="primary" onClick={toggleUpdate}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
