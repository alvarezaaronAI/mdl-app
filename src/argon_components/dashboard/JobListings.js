import React from "react";
import { Card, CardHeader, Container, Row, Table, Button } from "reactstrap";
import JobModal from "./JobModal";

import "../dashboard_styling/job_listings.scss";

const DummyJobListings = () => {
  let listings = [
    {
      position: "Last Mile Delivery",
      datePosted: "4/28/2020",
      description:
        "Drives company-provided van with capacity of less than 10,000 pounds to transport, load and unload packages to and from specified destinations. Interacts with customers at their home and business locations.",
      responsibilities: [
        "Must always represent the Company in a professional manner.",
        "Drives van from home office to designated customer locations.",
        "Uses hand held device for routing information, customer delivery information, to communicate with home office/dispatch, to track time.",
        "Loads and unloads packages into/out of van, with or without reasonable accommodation.",
        "Must be able to move boxes up to 70 lbs., with or without reasonable accommodation.",
        "Must be able to easily get in and out of the van, with or without reasonable accommodation.",
        "Inspects van equipment and supplies such as tires, lights, brakes, gas, oil and water.",
        "Maintains contact with supervisor to receive delivery instructions if unclear or if problems arise.",
        "Maintains logs according to state and federal regulations.",
        "Secures packages to ensure no damage is caused to customer shipments.",
        "Follows all safety rules and company policies and procedures.",
      ],
      experience: [
        "Customer Service – is professional at all times with anyone at the customer location. Represents the company in a service-oriented and courteous manner at all times. Is respectful and represents the company brand positively.",
        "Driving and Delivery Experience – previous driving and delivery experience preferred.",
        "Technology Oriented – must be comfortable using mobile technology in an efficient and accurate way.",
        "Safety and Security – adheres to all safety and security procedures. Determines appropriate action beyond guidelines as required. Reports potentially unsafe conditions immediately. Uses vehicle and all provided work materials, appropriately.",
        "Attendance/Punctuality and Timeliness – Is consistently at work at required shift and is on time or early. Completes work in a timely manner and within the standards outlined by the company.",
        "Dependability – follows instructions, responds to management direction. Takes responsibility for own actions. Keeps commitments. Completes tasks on time or notifies supervisor in advance, if a commitment is at risk.",
        "Quality – meets productivity and service standards consistently.",
      ],
      education: [
        "High school diploma or general education degree (GED) required. College degree preferred.",
      ],
      physicalDemands: [
        "Physical Demands: Employee is required to stand, walk, sit and drive a company- provided vehicle. Employee is required to reach and lift with both hands and both arms. Employee is required to crouch, stoop and bend with both legs. Employee is required to talk and hear without assistance. Employee must be able to lift and move up to 100 pounds in a single package. Good manual dexterity skills are required as well as good eye-hand coordination. Specific vision abilities required by the job include close vision, distance vision, color vision, peripheral vision, depth perception and the ability to adjust focus.",
        "Work Environment: Employee is driving a vehicle in urban, suburban and rural settings. Must be comfortable working alone and communicating with home office and supervisor through provided mobile device.",
      ],
      requiredLicense: ["Valid State Driver’s License is Required."],
      workAuthorizationRequirements: [
        "United States Work Authorization is Required",
      ],
    },
    {
      position: "Dispatcher",
      datePosted: "4/28/2020",
      description:
        "The Dispatcher is responsible for effectively routing daily customerappointments among field personnel, manage technician routes andworkload within designated timeframes utilizing computerized workforcemanagement applications.",
      responsibilities: [
        "Provide client information to drivers through the Nextel system.",
        "Communicate with drivers in a professional manner on and off their mobile devices.",
        "Inform superiors in management about on-the-road accidents.",
        "Call a tow service and provide accurate information for pick-up of vehicles that breakdown; inform superiors in the management of vehicle problems and dispatch driver to repair shop if the problem is urgent.",
        "Provide customers with accurate and professional information on the status of their pick-up.",
        "Handle and attempt to resolve customer complaints in a professional manner.",
        "Assist the Customer Service Department, as needed, by answering phones and entering trip information.",
        "Maintain driver communication to include answering requests for assistance via telephone, intercom, or radio.",
        "Maintaining logs and reports",
      ],
      experience: [
        "The ability to perform multiple tasks while applying the appropriate priority levels to each.",
      ],
      education: [
        "High school graduate. Prefer OPOTA or equivalent training certificate for Dispatchers. Prefer associates degree.",
      ],
      physicalDemands: [],
      requiredLicense: [],
      workAuthorizationRequirements: [
        "United States Work Authorization is Required",
      ],
    },
  ];
  return listings;
};

const JobListings = () => {
  let jobs = DummyJobListings();

  return (
    <>
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Job Listings</h3>
              </CardHeader>
              <Table
                className="align-items-center table-flush table-striped"
                responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Date Posted</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody></tbody>
                <tbody>
                  {jobs.map((job) => (
                    <tr>
                      <td>
                        <h5>{job.position}</h5>
                      </td>
                      <td>
                        <h5>{job.datePosted}</h5>
                      </td>
                      <td class="message_cell">
                        <p>
                          {job.description.length > 100
                            ? (job.description =
                                job.description.slice(0, 100) + "...")
                            : job.description}
                        </p>
                      </td>
                      <td>
                        <JobModal jobListing={job}></JobModal>
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

export default JobListings;
