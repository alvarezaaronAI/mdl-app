import React, { useEffect, useState } from "react";

import firebase from "../../firebase.js";
import { Redirect } from "react-router";

// reactstrap components
import { Card, CardHeader, Container, Row, Table, Button } from "reactstrap";
import ApplicantModal from "./ApplicantModal";
import "../dashboard_styling/applicant_table.scss";

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

const DummyApplicants = () => {
  let applicants = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      applied: "4/24/2020",
      id: 1,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      applied: "4/24/2020",
      id: 2,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      applied: "4/24/2020",
      id: 3,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      applied: "4/24/2020",
      id: 4,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      applied: "4/24/2020",
      id: 5,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      applied: "4/24/2020",
      id: 6,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      applied: "4/24/2020",
      id: 7,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      applied: "4/24/2020",
      id: 8,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      applied: "4/24/2020",
      id: 9,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      applied: "4/24/2020",
      id: 10,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      applied: "4/24/2020",
      id: 11,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      applied: "4/24/2020",
      id: 12,
      status: {
        pending: true,
        denied: false,
        hired: false,
      },
    },
  ];

  return applicants;
};

const Applicants = () => {
  const applicants = DummyApplicants();

  return (
    <>
      {/*  Header */}
      {/* <div className="header bg-gradient-AdminNav pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div> */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Applicants</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Position</th>
                    <th scope="col">Date Applied</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody id="applicant_table">
                  {applicants.map((person, key) => (
                    <tr id={key + 1}>
                      <td>
                        <h5>{person.firstName + " " + person.lastName}</h5>
                      </td>
                      <td>
                        <h5>{person.email}</h5>
                      </td>
                      <td>
                        <h5>Last Mile Delivery</h5>
                      </td>
                      <td>
                        <h5>{person.applied}</h5>
                      </td>
                      <td>
                        <ApplicantModal profile={person} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Applicants;
