import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import firebase from "../../firebase.js";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../FirebaseAuth";
import mdl_logo from "../../assets/logo/mdl_sm.png";
import "../dashboard_styling/admin_nav.scss";

// reactstrap components
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
  NavItem,
  Container,
  Media,
  Button,
} from "reactstrap";

const AdminNavbar = () => {
  const [redirect, setRedirect] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out!");
        setRedirect(true);
      })
      .catch((error) => {
        console.log("error occurred", error);
      });
  };

  return (
    <>
      {redirect ? <Redirect to="/" /> : null}
      <Navbar className="admin_nav" expand="md">
        {/* <NavbarToggler onClick={toggle} expand /> */}
        <Collapse isOpen={isOpen}>
          <Nav navbar>
            <Container>
              <NavItem>
                <Button onClick={logout}>Logout</Button>
              </NavItem>
            </Container>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
