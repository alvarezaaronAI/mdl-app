import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import "./applicant_table.scss";
import ApplicantCard from "./ApplicantCard";
import firebase from "../../firebase";

function GetApplicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("applicants")
      .get()
      .then((snapshot) => {
        const applicant = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplicants(applicant);
      });
  }, []);

  return applicants;
}

// const EditApplicantDetail = (applicant_email) => {
//   const [show_detail, setViewStatus] = useState(false);

// };

const ApplicantsTable = () => {
  let applicants = GetApplicants();

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {applicants.map((person) => (
          <tr>
            <td>{person.firstName + " " + person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.position}</td>
            <td>Pending</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApplicantsTable;
