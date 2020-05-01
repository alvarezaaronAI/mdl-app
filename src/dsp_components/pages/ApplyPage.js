import React from "react";
import DSP_Nav from "../nav_component/DSP_Nav.js";
import ApplyForm from "../apply_form/ApplyForm.js";
import "../apply_form/apply_form.scss";
import HeaderImage from "../headerImg_component/HeaderImg.js";
import application_img from "../../assets/writing-green-chameleon-unsplash.png";

const ApplyPage = () => {
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
              MDL Driver Associate
            </h4>

            <h3 className="blog-post-title text-left">Job Description</h3>
            <p className="mx-5 text-left">
              Drives company-provided van with capacity of less than 10,000
              pounds to transport, load and unload packages to and from
              specified destinations. Interacts with customers at their home and
              business locations.
            </p>
            <hr />
            <h3 className="blog-post-title text-left">Location</h3>
            <p className="mx-5 text-left">City of Commerce</p>
            <p className="mx-5 text-left">5829 Smithway St, 90040</p>
            <hr />

            <h3 className="blog-post-title text-left">
              Essential Duties and Responsibilities
            </h3>
            <ul>
              <li>
                Must always represent the Company in a professional manner.
              </li>
              <li>
                Drives van from home office to designated customer locations.
              </li>
              <li>
                Uses hand held device for routing information, customer delivery
                information, to communicate with home office/dispatch, to track
                time.
              </li>
              <li>
                Loads and unloads packages into/out of van, with or without
                reasonable accommodation.
              </li>
              <li>
                Must be able to move boxes up to 70 lbs., with or without
                reasonable accommodation.
              </li>
              <li>
                Must be able to easily get in and out of the van, with or
                without reasonable accommodation.
              </li>
              <li>
                Inspects van equipment and supplies such as tires, lights,
                brakes, gas, oil and water.
              </li>
              <li>
                Maintains contact with supervisor to receive delivery
                instructions if unclear or if problems arise.
              </li>
              <li>
                Maintains logs according to state and federal regulations.
              </li>
              <li>
                Secures packages to ensure no damage is caused to customer
                shipments.
              </li>
              <li>
                Follows all safety rules and company policies and procedures.
              </li>
            </ul>
            <hr />

            <h3 className="blog-post-title text-left">
              Required Skills and Experience
            </h3>
            <ul className="">
              <li>
                Customer Service – is professional at all times with anyone at
                the customer location. Represents the company in a
                service-oriented and courteous manner at all times. Is
                respectful and represents the company brand positively.
              </li>
              <li>
                Driving and Delivery Experience – previous driving and delivery
                experience preferred.
              </li>
              <li>
                Technology Oriented – must be comfortable using mobile
                technology in an efficient and accurate way.
              </li>
              <li>
                Safety and Security – adheres to all safety and security
                procedures. Determines appropriate action beyond guidelines as
                required. Reports potentially unsafe conditions immediately.
                Uses vehicle and all provided work materials, appropriately.
              </li>
              <li>
                Attendance/Punctuality and Timeliness – Is consistently at work
                at required shift and is on time or early. Completes work in a
                timely manner and within the standards outlined by the company.
              </li>
              <li>
                Dependability – follows instructions, responds to management
                direction. Takes responsibility for own actions. Keeps
                commitments. Completes tasks on time or notifies supervisor in
                advance, if a commitment is at risk.
              </li>
              <li>
                Quality – meets productivity and service standards consistently.
              </li>
            </ul>
            <hr />

            <h3 className="blog-post-title text-left">
              Education Requirements
            </h3>

            <ul>
              <li>
                <strong>
                  High school diploma or general education degree (GED)
                  required. College degree preferred.
                </strong>
              </li>
            </ul>

            <hr />

            <h3 className="blog-post-title text-left">
              Physical Demands and Work Environment
            </h3>
            <p className="mx-5 text-left">
              The physical demands and work environment characteristics
              described here are representative of those that must be met by an
              employee to successfully perform the essential job function of
              this job. These inlude the following:
            </p>
            <ul>
              <li>
                Physical Demands: Employee is required to stand, walk, sit and
                drive a company- provided vehicle. Employee is required to reach
                and lift with both hands and both arms. Employee is required to
                crouch, stoop and bend with both legs. Employee is required to
                talk and hear without assistance. Employee must be able to lift
                and move up to 100 pounds in a single package. Good manual
                dexterity skills are required as well as good eye-hand
                coordination. Specific vision abilities required by the job
                include close vision, distance vision, color vision, peripheral
                vision, depth perception and the ability to adjust focus.
              </li>
              <li>
                Work Environment: Employee is driving a vehicle in urban,
                suburban and rural settings. Must be comfortable working alone
                and communicating with home office and supervisor through
                provided mobile device.
              </li>
            </ul>
            <hr />
            <h3 className="blog-post-title text-left">Required Licenses</h3>
            <ul>
              <li>Valid State Driver’s License is Required.</li>
            </ul>
            <hr />
            <h3 className="blog-post-title text-left">
              Work Authorization Requirements
            </h3>
            <ul>
              <li>United States Work Authorization is Required</li>
            </ul>
          </div>
        </div>
      </div>
      <ApplyForm job_title="MDL Driver Associate" />
    </>
  );
};

export default ApplyPage;
