import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../dashboard_styling/job_modal.scss";
import firebase from "../../firebase.js";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Col,
  Row,
} from "reactstrap";

const btn_style = {
  padding: "0.3rem 1.7rem",
};

const JobModal = (props) => {
  const {
    position,
    datePosted,
    description,
    responsibilities,
    experience,
    education,
    physicalDemands,
    requiredLicense,
    workAuthorizationRequirements,
  } = props.jobListing;

  const [modal, setModal] = useState(false);
  const [edit_position, setPosition] = useState(position);
  const [edit_description, setDescription] = useState(description);
  const [edit_duties, setDuties] = useState(responsibilities);
  const [edit_experience, setExperience] = useState(experience);
  const [edit_education, setEducation] = useState(education);
  const [edit_physicalDemands, setPhysicalDemands] = useState(physicalDemands);
  const [edit_requiredLicense, setRequiredLicense] = useState(requiredLicense);
  const [edit_workAuthorization, setWorkAuthorization] = useState(
    workAuthorizationRequirements
  );

  const populateInputFields = (inputList, name) => {
    let inputFields = [];

    if (inputList.length <= 0) {
      return null;
    }

    for (
      let current_input = 0;
      current_input < inputList.length;
      current_input++
    ) {
      inputFields.push(
        <Input
          type="text"
          name
          id={`${name}_${current_input + 1}`}
          value={inputList[current_input]}
          onChange={updateFieldChanged(current_input, inputList, name)}></Input>
      );
    }
    return inputFields;
  };

  const updateFieldChanged = (index, inputList, name) => (e) => {
    let updatedArray = [...inputList];
    updatedArray[index] = e.target.value;

    switch (name) {
      case "duty":
        setDuties(updatedArray);
        break;
      case "skill":
        setExperience(updatedArray);
        break;
      case "physical_demand":
        setPhysicalDemands(updatedArray);
        break;
    }
  };

  const addRow = (name) => {
    let increasedArray = [];
    switch (name) {
      case "duty":
        increasedArray = ["", ...edit_duties];
        setDuties(increasedArray);
        break;
      case "skill":
        increasedArray = ["", ...edit_experience];
        setExperience(increasedArray);
        break;
      case "physical_demand":
        increasedArray = ["", ...edit_physicalDemands];
        setPhysicalDemands(increasedArray);
        break;
    }
  };

  const toggle = () => setModal(!modal);

  //Need to update firebase based on values changed upon closing the modal
  const toggleUpdate = () => {
    let updated_data = {
      position: edit_position,
      description: edit_description,
      education: edit_education,
      experience: edit_experience,
      physicalDemands: edit_physicalDemands,
      requiredLicense: edit_requiredLicense,
      responsibilities: edit_duties,
      work_authorization: edit_workAuthorization,
    };

    async function updateJobPost() {
      await firebase
        .firestore()
        .collection("jobListings")
        .doc(edit_position)
        .set(updated_data, { merge: true })
        .then((completed) => {
          setModal(!modal);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    updateJobPost();
  };

  let dutiesInputs = populateInputFields(edit_duties, "duty");
  let experienceInputs = populateInputFields(edit_experience, "skill");
  let physicalDemandsInputs = populateInputFields(
    edit_physicalDemands,
    "physical_demand"
  );

  return (
    <div>
      <Button color="info" onClick={toggle} style={btn_style}>
        View
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="bg-success">
        <ModalHeader toggle={toggle}>Edit Job Post</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="job_title">Position</Label>
              <Input
                type="text"
                name="position"
                id="job_title"
                placeholder="Job Title"
                value={edit_position}
                onChange={(e) => setPosition(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label for="job_description" sm={20}>
                Description
              </Label>
              <Col sm={20}>
                <Input
                  type="textarea"
                  name="text"
                  id="job_description"
                  rows="5"
                  value={edit_description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Container>
                <Label for="job_duties">Duties</Label>
                <Button
                  className="addRow_button"
                  onClick={() => {
                    addRow("duty");
                  }}>
                  <div className="plus_sign_action">&#43;</div>
                </Button>
              </Container>

              {dutiesInputs ? dutiesInputs.slice() : null}
            </FormGroup>

            <FormGroup>
              <Container>
                <Label for="experience">Experience</Label>
                <Button
                  className="addRow_button"
                  onClick={() => {
                    addRow("skill");
                  }}>
                  <div className="plus_sign_action">&#43;</div>
                </Button>
              </Container>

              {experienceInputs ? experienceInputs.slice() : null}
            </FormGroup>

            <FormGroup>
              <Container>
                <Label for="work_environment">
                  Work Environment & Physical Demands
                </Label>
                <Button
                  className="addRow_button"
                  onClick={() => {
                    addRow("physical_demand");
                  }}>
                  <div className="plus_sign_action">&#43;</div>
                </Button>
              </Container>

              {physicalDemandsInputs ? physicalDemandsInputs.slice() : null}
            </FormGroup>

            <FormGroup>
              <Label for="required_licenses">Required Licenses</Label>
              <Input
                type="text"
                name="licenses"
                id="required_licenses"
                placeholder=""
                value={edit_requiredLicense}
                onChange={(e) => setRequiredLicense(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label for="education">Education</Label>
              <Input
                type="text"
                name="education"
                id="education"
                placeholder=""
                value={edit_education}
                onChange={(e) => setEducation(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label for="work_authorization">Work Authorization</Label>
              <Input
                type="text"
                name="work_authorization"
                id="work_authorization"
                placeholder=""
                value={edit_workAuthorization}
                onChange={(e) => setWorkAuthorization(e.target.value)}></Input>
            </FormGroup>
          </Form>
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

export default JobModal;
