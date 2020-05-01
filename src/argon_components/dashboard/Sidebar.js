import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container,
  Media,
  Button,
  Row,
  Col,
} from "reactstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink as NavLinkRRD,
} from "react-router-dom";

import mdl_logo from "../../assets/logo/mdl_md.png";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);

  return (
    <>
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main">
        <Container fluid>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setToggleCollapse(!toggleCollapse);
            }}>
            <span className="navbar-toggler-icon" />
          </button>
          <NavbarBrand className="pt-0">
            <Link to="/">
              <img alt="mdl_logo" className="navbar-brand-img" src={mdl_logo} />
            </Link>
          </NavbarBrand>
          <Collapse navbar isOpen={toggleCollapse}>
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col>
                  <Link to="/">
                    <h3>wow</h3>
                  </Link>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem key={0}>
                <NavLink
                  id="dashboard_link"
                  to={"/dashboard/applicants"}
                  tag={NavLinkRRD}
                  onClick={() => {
                    console.log("wow");
                  }}
                  activeClassName="active">
                  <i className="ni ni-single-02 text-yellow" />
                  Applicants
                </NavLink>
              </NavItem>
              <NavItem key={1}>
                <NavLink
                  id="dashboard_link"
                  to={"/dashboard/messages"}
                  tag={NavLinkRRD}
                  onClick={() => {
                    console.log("wow");
                  }}
                  activeClassName="active">
                  <i className="ni ni-bullet-list-67 text-red" />
                  Messages
                </NavLink>
              </NavItem>
              <NavItem key={1}>
                <NavLink
                  id="dashboard_link"
                  to={"/dashboard/job-listings"}
                  tag={NavLinkRRD}
                  onClick={() => {
                    console.log("wow");
                  }}
                  activeClassName="active">
                  <i className="ni ni-bullet-list-67 text-blue" />
                  Job Listings
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
