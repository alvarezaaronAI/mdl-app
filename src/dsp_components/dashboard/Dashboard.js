import React, { useState, useEffect, useContext } from "react";
import DashNav from "./DashboardNav";
import ApplicantsTable from "./ApplicantsTable";
import { AuthContext } from "../../FirebaseAuth";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const firebaseUser = useContext(AuthContext);

  const [authenticated, setAuthentication] = useState(false);

  useEffect(() => {
    if (firebaseUser.currentUser !== null) {
      setAuthentication(true);
    }
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        <DashNav />
        <ApplicantsTable />
      </>
    );
  }
};

export default Dashboard;
