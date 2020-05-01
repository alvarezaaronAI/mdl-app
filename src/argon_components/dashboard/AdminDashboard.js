import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import Applicants from "./Applicants";
import Messages from "./Messages";
import JobListings from "./JobListings";
import Sidebar from "./Sidebar";

import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <AdminNavbar />
        {/*  Header */}
        <div className="header bg-gradient-AdminNav pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body"></div>
          </Container>
        </div>
        <Switch>
          <Route path="/dashboard/applicants" component={Applicants} />
          <Route path="/dashboard/messages" component={Messages} />
          <Route path="/dashboard/job-listings" component={JobListings} />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default AdminDashboard;
