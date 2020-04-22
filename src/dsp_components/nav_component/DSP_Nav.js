import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import "./navbar.scss";

const DSP_Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="px-3" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-3" to="/apply">
                Careers
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand href="/">Metro Deliveries and Logistics</NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default DSP_Nav;
