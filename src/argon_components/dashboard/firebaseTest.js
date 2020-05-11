import React, { useState, useEffect } from "react";
import firebase from "../../firebase.js";

const FirebaseTest = () => {
  const [databaseData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await firebase
        .firestore()
        .collection("jobListings")
        .get()
        .then((res) => {
          const jobPost = res.docs.map((job) => ({
            id: job.id,
            ...job.data(),
          }));
          setData(jobPost);
        })
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  return (
    <>
      {databaseData !== null ? (
        <p>
          {databaseData.map((job) => {
            return job.position;
          })}
        </p>
      ) : (
        <h1>working</h1>
      )}
    </>
  );
};

export default FirebaseTest;
