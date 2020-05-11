import React, { useEffect, useState, render } from "react";

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

const setActiveLink = (index) => {
  let elements = document.getElementsByClassName("active");

  for (let ii = 0; ii < elements.length; ii++) {
    elements[0].className = elements[0].className.replace("active", "");
  }

  let current_active_element = document.getElementsByClassName("page-item");
  current_active_element[index].classList.add("active");
};

const checkStatus = (status_obj) => {
  let result = false,
    key;

  for (key in status_obj) {
    if (status_obj[key] == true) {
      result = key;
    }
  }

  return result;
};

const styledCell = (key) => {
  //create cell with styling depending on key

  switch (key) {
    case "pending":
      return <td className="status_cell status_cell_pending">{key}</td>;
    case "hired":
      return <td className="status_cell status_cell_hired">{key}</td>;
    case "denied":
      return <td className="status_cell status_cell_denied">{key}</td>;
    default:
      break;
  }
};

const Applicants = () => {
  const [applicantList, setApplicants] = useState([]);
  const [limtedList, setLimitedList] = useState([]);
  const [paginationLinks, setPaginationLinks] = useState(null);
  const [paginateLength, setPaginateLength] = useState(10);

  useEffect(() => {
    async function fetchApplicants() {
      await firebase
        .firestore()
        .collection("applicants")
        .orderBy("timeApplied", "desc")
        .get()
        .then((snapshot) => {
          const applicant = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setApplicants(applicant);
          setLimitedList(applicant.slice(0, paginateLength));
          createPaginationLinks(applicant, paginateLength);
        })
        .catch((err) => console.log(err));
    }

    fetchApplicants();
  }, []);

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
    setLimitedList(limited_list);
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

  const updateStatus = (email, status_obj) => {
    let key;
    let obj_keys = [];

    for (let ii = 0; ii < applicantList.length; ii++) {
      if (applicantList[ii].id == email) {
        let old_status = checkStatus(applicantList[ii].status);
        applicantList[ii].status = status_obj;
        let classReference = document.getElementsByClassName("status_cell")[ii];
        classReference.innerHTML = checkStatus(status_obj);

        classReference.classList.replace(
          `status_cell_${old_status}`,
          `status_cell_${checkStatus(status_obj)}`
        );
      }
    }

    setApplicants(applicantList);
  };

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
                    <th scope="col">Action</th>
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody id="applicant_table">
                  {limtedList.length > 0 ? (
                    limtedList.map((person, key) => (
                      <tr id={key + 1}>
                        <td>
                          <h5>{person.firstName + " " + person.lastName}</h5>
                        </td>
                        <td>
                          <h5>{person.email}</h5>
                        </td>
                        <td>
                          <h5>{person.position}</h5>
                        </td>
                        <td>
                          <h5>{person.dateApplied}</h5>
                        </td>
                        {styledCell(checkStatus(person.status))}
                        <td>
                          <ApplicantModal
                            profile={person}
                            updateStatus={updateStatus}
                          />
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
