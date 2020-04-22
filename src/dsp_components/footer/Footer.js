import React from "react";
import "./Footer-Dark.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-dark mt-5">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <Link to="/careers">Last Mile Delivery</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/">Company</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h2 id="t-c-e">Metro Deliveries & Logistics DSP</h2>
            </div>
          </div>
          <p className="copyright">Metro Deliveries & Logistics LLC © 2020</p>
        </div>
      </footer>
    </div>
  );
}
