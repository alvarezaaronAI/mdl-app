import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./dsp_components/pages/LandingPage";
import ApplyPage from "./dsp_components/pages/ApplyPage";
import LoginPage from "./argon_components/auth/Login";
import Dashboard from "./dsp_components/dashboard/Dashboard";
import { FirebaseAuthProvider } from "./FirebaseAuth";

import "./assets/argon_assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/argon_assets/scss/argon-dashboard-react.scss";

function App() {
  return (
    <FirebaseAuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/apply" component={ApplyPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </FirebaseAuthProvider>
  );
}

export default App;
