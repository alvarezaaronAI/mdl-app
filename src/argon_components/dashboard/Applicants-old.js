import React, { useEffect, useState } from "react";

import firebase from "../../firebase.js";
import { Redirect } from "react-router";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Table,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import ApplicantModal from "./ApplicantModal";
import "../dashboard_styling/applicant_table.scss";
import ThreeDotsWaveAnimation from "../../common/loading_animation/ThreeDotsWave";

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

const setActiveLink = (index) => {
  let elements = document.getElementsByClassName("active");

  for (let ii = 0; ii < elements.length; ii++) {
    elements[0].className = elements[0].className.replace("active", "");
  }

  let current_active_element = document.getElementsByClassName("page-item");
  current_active_element[index].classList.add("active");
};

const checkStatus = (status_obj) => {
  let result = false;

  for (key in status_obj) {
    if (status_obj[key] == true) {
      result = key;
    }
  }
  return result;
};

const Applicants = () => {
  const [applicantList, setApplicants] = useState([]);
  const [paginationLinks, setPaginationLinks] = useState([]);
  const [paginateLength, setPaginateLength] = useState(5);

  //Will be call to firebase api
  const applicantPromise = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(DummyApplicants());
      }, 2000);
    } catch (error) {
      reject("Error retrieving applicant data");
    }
  });

  const tablePagination = (
    list,
    start_index,
    paginate_index,
    paginate_length
  ) => {
    let end_index = 0;

    end_index = paginate_index * paginate_length;
    if (end_index > list.length) {
      end_index = list.length;
    }

    let limited_list = [...list.slice(start_index, end_index)];
    setApplicants(limited_list);
  };

  //Length specifies scope of each pagination
  const createPaginationLinks = (item_list, length) => {
    if (item_list == null) {
      return null;
    }
    let pagination_items = 0;
    let pagination_links = [];

    //create an extra link when items are not perfectly divisible by the specified length
    if (item_list.length % length > 0) {
      pagination_items = Math.floor(item_list.length / length + 1);
    } else {
      pagination_items = Math.floor(item_list.length / length);
    }

    for (
      let current_iteration = 0, starting_index = 0;
      current_iteration < pagination_items;
      current_iteration++, starting_index += length
    ) {
      pagination_links.push(
        <PaginationItem>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault();

              tablePagination(
                item_list,
                starting_index,
                current_iteration + 1,
                paginateLength
              );
              setActiveLink(current_iteration);
            }}>
            {current_iteration + 1}
          </PaginationLink>
        </PaginationItem>
      );
    }

    setPaginationLinks(pagination_links);
  };

  useEffect(() => {
    applicantPromise
      .then((data) => {
        setApplicants(data.slice(0, 5));
        createPaginationLinks(data, paginateLength);
      })
      .catch((error) => {
        console.log("Error retrieving applicants");
      });
  }, []);

  return (
    <>
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
                  {applicantList.length > 0 ? (
                    applicantList.map((person, key) => (
                      <tr id={key + 1}>
                        <td>
                          <h5>{person.firstName + " " + person.lastName}</h5>
                        </td>
                        <td>
                          <h5>{person.email}</h5>
                        </td>
                        <td>
                          <h5>{checkStatus(person.status)}</h5>
                        </td>
                        <td>
                          <h5>{person.applied}</h5>
                        </td>
                        <td>
                          <ApplicantModal profile={person} />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <ThreeDotsWaveAnimation />
                    </tr>
                  )}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0">
                    {paginationLinks !== null ? paginationLinks.slice() : null}
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Applicants;
