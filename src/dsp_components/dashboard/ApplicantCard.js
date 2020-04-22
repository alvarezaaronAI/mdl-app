import React from "react";

const ApplicantCard = (props) => {
  const { firstName, lastName, email } = props;

  return (
    <div className="row applicant_card">
      <div className="col-6 mt-4">
        <div className="col-12">
          <h3 className="applicant_name text-left">
            {firstName + " " + lastName}
          </h3>
        </div>
        <div className="col-12">
          <h3 className="applicant_email text-left">{email}</h3>
        </div>
      </div>
      <div className="col-6 mt-5">
        <div className="col-12">
          <h3 class="applicant_email pending">Status: Pending</h3>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
