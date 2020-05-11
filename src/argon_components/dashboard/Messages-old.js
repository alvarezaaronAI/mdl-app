import React, { useEffect, useState } from "react";

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
import "../dashboard_styling/messages_table.scss";
import MessageModal from "./MessageModal";
import ThreeDotsWaveAnimation from "../../common/loading_animation/ThreeDotsWave";

const DummyMessages = () => {
  let messages = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 1,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 2,
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 3,
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 4,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 5,
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 6,
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 7,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 8,
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 9,
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 10,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 11,
    },
    {
      firstName: "Scat",
      lastName: "Man",
      email: "scatman@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 12,
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 13,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@email.com",
      sent: "4/24/2020",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestias quisquam provident dolorum, non natus quod ut nobis repudiandae. Ipsam exercitationem non doloremque amet deleniti?",
      id: 14,
    },
  ];

  return messages;
};

const setActiveLink = (index) => {
  let elements = document.getElementsByClassName("active");

  for (let ii = 0; ii < elements.length; ii++) {
    elements[0].className = elements[0].className.replace("active", "");
  }

  let current_active_element = document.getElementsByClassName("page-item");
  current_active_element[index].classList.add("active");
};

const Messages = () => {
  const [messageList, setMessages] = useState([]);
  const [paginationLinks, setPaginationLinks] = useState([]);
  const [paginateLength, setPaginateLength] = useState(5);

  //Will be call to firebase api
  const messagePromise = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(DummyMessages());
      }, 2000);
    } catch (error) {
      reject("Error retrieving message data");
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
    setMessages(limited_list);
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

    //initialize first pagination index as active
    setPaginationLinks(pagination_links);
  };

  useEffect(() => {
    messagePromise
      .then((data) => {
        setMessages(data.slice(0, 5));
        createPaginationLinks(data, paginateLength);
      })
      .catch((error) => {
        console.log("Error retrieving applicants");
      });
  }, []);

  return (
    <>
      <Container className="mt--7 " fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Messages</h3>
              </CardHeader>
              <Table
                className="align-items-center table-flush table-striped"
                responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date sent</th>
                    <th scope="col">Message</th>
                    <th scope="col">Actionclear</th>
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody></tbody>
                <tbody>
                  {messageList.length > 0 ? (
                    messageList.map((message, key) => (
                      <tr>
                        <td>
                          <h5>{message.firstName + " " + message.lastName}</h5>
                        </td>
                        <td>
                          <h5>{message.email}</h5>
                        </td>
                        <td>
                          <h5>{message.sent}</h5>
                        </td>
                        <td class="message_cell">
                          <p>{message.message}</p>
                        </td>
                        <td>
                          <MessageModal content={message}></MessageModal>
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

export default Messages;
