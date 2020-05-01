import React, { useState, useEffect } from "react";
import Navbar from "../nav_component/DSP_Nav";
import Footer from "../footer/Footer";
import landing_page_img from "../../assets/cargo_overview_unsplash.png";
import "../dsp_styling/careers_page.scss";

import firebase from "../../firebase.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Button,
  Table,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

/* 
function GetJobListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("job-posts")
      .get()
      .then((snapshot) => {
        const job_listing = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListings(job_listing);
      });
  }, []);

  return listings;
}
*/

const GetJobListings = () => {
  let listings = [
    {
      position: "Last Mile Delivery",
      datePosted: "4/28/2020",
      description:
        "Drives company-provided van with capacity of less than 10,000 pounds to transport, load and unload packages to and from specified destinations. Interacts with customers at their home and business locations.",
    },
    {
      position: "Dispatcher",
      datePosted: "4/28/2020",
      description:
        "The Dispatcher is responsible for effectively routing daily customer appointments among field personnel, manage technician routes andworkload within designated timeframes utilizing computerized workforcemanagement applications.",
    },
  ];
  return listings;
};

const JobRowListings = (title, location, type, date) => {
  return (
    <tr>
      <th scope="row">
        <Link
          to={{ pathname: "/apply", state: { job_type: type } }}
          className="nav-link">
          <Button
            className="btn-apply-list btn-icon"
            color="default"
            href="#pablo">
            <span className="btn-inner--text">Apply</span>
          </Button>
        </Link>
      </th>
      <td>{title}</td>
      <td>{location}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>
        <div className=" d-inline-flex flex-row mt-4">
          <div className="icon container">
            <i class="gg-file-document"></i>
          </div>
          <div className="icon container">
            <i class="gg-pen"></i>
          </div>
        </div>
      </td>
    </tr>
  );
};

const CareersPage = () => {
  let jobs = GetJobListings();

  return (
    <>
      <Navbar />
      {/* <img className="headerImage" src={landing_page_img} alt="Careers " /> */}
      <div className="header bg-gradient-career pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div>
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Job Listings</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Date Posted</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tbody>
                  {jobs.map((job) => (
                    <tr>
                      <td>
                        <h4>{job.position}</h4>
                      </td>
                      <td>
                        <h5>{job.datePosted}</h5>
                      </td>
                      <td class="message_cell">
                        <p>{job.description}</p>
                      </td>
                      <td>
                        <Button>Apply</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default CareersPage;
