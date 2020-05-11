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

const UpdateApplicantStatus = (email, obj) => {
  async function updateDocument() {
    await firebase
      .firestore()
      .collection("applicants")
      .doc(email)
      .set({ status: obj }, { merge: true })
      .catch((error) => console.log(error));
  }

  updateDocument();
};

const ApplicantModal = (props) => {
  const {
    firstName,
    lastName,
    email,
    applied,
    status,
    position,
  } = props.profile;

  const [modal, setModal] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(status.pending);
  const [deniedStatus, setDeniedStatus] = useState(status.denied);
  const [hiredStatus, setHiredStatus] = useState(status.hired);

  const toggle = () => setModal(!modal);

  //Only one option can be selected at a time.
  const updateStatus = (status) => {
    switch (status) {
      case "pending":
        setPendingStatus(!pendingStatus);
        setDeniedStatus(false);
        setHiredStatus(false);
        break;
      case "hired":
        setHiredStatus(!hiredStatus);
        setPendingStatus(false);
        setDeniedStatus(false);

        break;
      case "denied":
        setDeniedStatus(!deniedStatus);
        setPendingStatus(false);
        setHiredStatus(false);
        break;
    }
  };

  //Need to update firebase based on values changed upon closing the modal
  const toggleUpdate = () => {
    let updatedStatus = {
      pending: pendingStatus,
      denied: deniedStatus,
      hired: hiredStatus,
    };

    UpdateApplicantStatus(email, updatedStatus);
    props.updateStatus(email, updatedStatus);

    setModal(!modal);
  };

  const deleteDocument = () => {
    async function deleteApplicant() {
      await firebase
        .firestore()
        .collection("applicants")
        .doc(String(email))
        .delete()
        .catch((error) => {
          console.log(error);
        });
    }
    deleteApplicant();
  };

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
          <h5>Position: {position}</h5>
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
                      updateStatus("pending");
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
                      updateStatus("hired");
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
                      updateStatus("denied");
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
          <Button color="danger" onClick={deleteDocument}>
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

export default ApplicantModal;
