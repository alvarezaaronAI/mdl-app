import React from "react";
import DSP_Nav from "../nav_component/DSP_Nav.js";
import ApplyForm from "../apply_form/ApplyForm.js";
import "../apply_form/apply_form.scss";
import HeaderImage from "../headerImg_component/HeaderImg.js";
import application_img from "../../assets/writing-green-chameleon-unsplash.png";

const ApplyPage = (props) => {
  const {
    position,
    datePosted,
    description,
    responsibilities,
    experience,
    education,
    physicalDemands,
    requiredLicense,
    workAuthorizationRequirements,
  } = props.location.state.job;

  const getUnorderedList = (ul_list) => {
    if (ul_list == null || ul_list.length <= 0) {
      return null;
    }

    let list_items = [];

    for (let li_index = 0; li_index < ul_list.length; li_index++) {
      list_items.push(<li>{ul_list[li_index]}</li>);
    }

    return list_items;
  };

  return (
    <>
      <DSP_Nav />
      <img
        className="headerImage mb-5"
        src={application_img}
        alt="application_form"
      />
      <div className="container">
        <div className="col-md-12 blog-main">
          <div className="blog-post">
            <h3 className="blog-post-title text-left">About our Company</h3>
            <p id="values-overview" className="mx-5 mb-4 mt-3 text-left">
              Thank you for your interest in applying for a job with Metro
              Deliveries & Logistics LLC (the “Company”). Because of our
              commitment to offering the highest possible service and
              satisfaction to our customers, we are only interested in hiring
              the best people for our jobs. We want to have a complete
              understanding of your qualifications, motivations and interests,
              so that we can make careful and deliberate hiring decisions that
              will benefit both the Company and our employees. Please answer the
              following questions honestly, completely and thoughtfully. This
              application must be completed in full, even if you are attaching a
              resume. Incomplete applications will not be considered. The
              Company is an Equal Opportunity Employer and does not discriminate
              on the basis of race, color, religion, gender, sexual orientation,
              gender identity, pregnancy, military status, national origin,
              ancestry, age, veteran status, disability, genetic information or
              any other legally-protected classification.
            </p>
            <hr />

            <h3 className="blog-post-title text-left">Job Title</h3>
            <h4 id="job-title" className="mx-5 my-3 text-left">
              {position}
            </h4>

            <h3 className="blog-post-title text-left">Job Description</h3>
            <p className="mx-5 text-left">{description}</p>
            <hr />
            <h3 className="blog-post-title text-left">Location</h3>
            <p className="mx-5 text-left">City of Commerce</p>
            <p className="mx-5 text-left">5829 Smithway St, 90040</p>
            <hr />

            <h3 className="blog-post-title text-left">
              Essential Duties and Responsibilities
            </h3>
            <ul>{getUnorderedList(responsibilities)}</ul>
            <hr />

            <h3 className="blog-post-title text-left">
              Required Skills and Experience
            </h3>
            <ul className="">{getUnorderedList(experience)}</ul>
            <hr />

            <h3 className="blog-post-title text-left">
              Education Requirements
            </h3>

            {education && education.length > 0 ? (
              <>
                <ul>
                  <strong>{getUnorderedList(education)}</strong>
                </ul>

                <hr />
              </>
            ) : null}

            {physicalDemands && physicalDemands.length > 0 ? (
              <>
                <h3 className="blog-post-title text-left">
                  Physical Demands and Work Environment
                </h3>
                <p className="mx-5 text-left">
                  The physical demands and work environment characteristics
                  described here are representative of those that must be met by
                  an employee to successfully perform the essential job function
                  of this job. These inlude the following:
                </p>
                <ul>{getUnorderedList(physicalDemands)}</ul>
                <hr />
              </>
            ) : null}

            {requiredLicense && requiredLicense.length > 0 ? (
              <>
                <h3 className="blog-post-title text-left">Required Licenses</h3>
                <ul>{getUnorderedList(requiredLicense)}</ul>
                <hr />
              </>
            ) : null}

            {workAuthorizationRequirements &&
            workAuthorizationRequirements.length > 0 ? (
              <>
                <h3 className="blog-post-title text-left">
                  Work Authorization Requirements
                </h3>
                <ul>{getUnorderedList(workAuthorizationRequirements)}</ul>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <ApplyForm job_title={position} />
    </>
  );
};

export default ApplyPage;
