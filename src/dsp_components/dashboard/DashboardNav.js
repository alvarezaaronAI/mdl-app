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
  Button,
} from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import "./dashboard_nav.scss";

const DashboardNav = () => {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <Navbar color="light" light>
        <Nav className="mr-auto" navbar>
          <Button onClick={handleClick}>Menu</Button>
        </Nav>
        <NavbarBrand href="/">MDL Dashboard</NavbarBrand>
      </Navbar>
      {menuState ? (
        <div className="dash_menu open">
          <ul>
            <li className="text-center">Applicants</li>
            <li className="text-center">Logout</li>
          </ul>
        </div>
      ) : (
        <div className="dash_menu close"></div>
      )}
      <div className="dashboard_gradient"></div>
    </>
  );
};

export default DashboardNav;
