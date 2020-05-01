import React from "react";

// reactstrap components
import { Card, CardHeader, Container, Row, Table } from "reactstrap";
import "../dashboard_styling/messages_table.scss";

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
  ];

  return messages;
};

const Messages = () => {
  let messages = DummyMessages();

  return (
    <>
      {/*  Header */}
      {/* <div className="header bg-gradient-AdminNav pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div> */}
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
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody></tbody>
                <tbody>
                  {messages.map((message) => (
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

export default Messages;
