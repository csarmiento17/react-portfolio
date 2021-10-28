import React from "react";

const index = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title flex-row center">
            Carlopher Jay Sarmiento
          </h5>
          <div className="card-text flex-row center font-sm text-center">
            sarmientocarlopher@gmail.com | +1 416 7003856 <br /> 36 Thorncliffe
            Park Dr. Apt. 606 East York, ON M4H1J8
          </div>

          <div className="font-md my-4">WORK EXPERIENCE</div>
          <div className="font-sm my-2">
            Stonewell Financial Service Inc | React Developer (Mar 2021 - Sep
            2021)
            <ul className="my-2">
              <li>
                • Developed reusable components (e.g., Applicant’s Information,
                Summary and Payment, Modal Dialog)
              </li>
              <li>
                • Integrates open-source package like reCAPTCHA in Login page
              </li>
              <li>
                • Created a Dashboard and implemented restriction of component
                depending on user’s role
              </li>
            </ul>
          </div>
          <div className="font-sm my-2">
            Litera Corp. | React / SharePoint Developer (Mar 2017 – Mar 2021)
            <ul className="my-2">
              <li>
                • Developed and maintained web applications using React, Redux,
                Redux-Saga and Material UI
              </li>
              <li>• Created Unit Testing using Jest and Enzyme</li>
              <li>
                • Performed bug fixes and enhancements on SharePoint Document
                Management System made using WPF and CSOM
              </li>
            </ul>
          </div>

          <div className="font-sm my-2">
            American International Group | SharePoint Developer ( Mar 2015 – Mar
            2017)
            <ul className="my-2">
              <li>
                • Enhanced and support existing SharePoint applications using
                HTML, CSS and JavaScript to extend SharePoint functionalities
                (e.g., Forms, Cascading dropdown list)
              </li>
              <li>
                • Performs other jobs or responsibilities as may be designated
                by the Manager or Team Leader (e.g., Training of junior team
                members, interview candidates and consulted by other projects
                for development approach on the specified requirements).
              </li>
            </ul>
          </div>
          <div className="font-sm my-2">
            Coats | SharePoint Developer ( Aug 2013 – Mar 2015)
            <ul className="my-2">
              <li>
                • Enhanced and support existing SharePoint applications using
                HTML, CSS and JavaScript to extend SharePoint functionalities
                (e.g., Forms, Cascading dropdown list)
              </li>
              <li>
                • Performs other jobs or responsibilities as may be designated
                by the Manager or Team Leader (e.g., Training of junior team
                members, interview candidates and consulted by other projects
                for development approach on the specified requirements).
              </li>
            </ul>
          </div>

          <div className="font-sm my-2">
            KForce Global Solutions Inc. | SharePoint Developer (Jul 2012 – Aug
            2013)
            <ul className="my-2">
              <li>
                • Developed and maintained custom SharePoint sites built in
                HTML, CSS and Javascript
              </li>
              <li>• Developed Workflow using SharePoint Designer 2010/2013.</li>
              <li>
                • Reports/discusses status to the Team Leader and raise issues,
                if any.
              </li>
            </ul>
          </div>
          <div className="font-sm my-2">
            Accenture Inc. | SharePoint Developer (Mar 2010 – Jul 2012 )
            <ul className="my-2">
              <li>• Migrated Lotus Notes data to MOSS 2007 using Quest Tool</li>
              <li>
                • Modified SharePoint 2010 masterpage using HTML, CSS and JQuery
              </li>
              <li>
                • Created Detailed Design that will be used as an approach on
                how to migrate a Lotus Notes into SharePoint
              </li>
              <li>
                • Support SharePoint 2010 built using server-side code and
                managed deployment to production
              </li>
              <li>
                • Managed SharePoint Services in Central Administration like
                SharePoint Search and Search scope, Taxonomy, User Profile
                Services etc.
              </li>
            </ul>
          </div>
          <div className="font-md my-4">EDUCATION</div>
          <div>
            <p className="font-sm my-2">
              Full Stack Coding Bootcamp <br />
              University of Toronto School of Continuing Studies
              <br />
              Jun 2021 – Nov 2021
            </p>
          </div>
          <div>
            <p className="font-sm my-4">
              Bachelor of Science in Computer Science <br />
              STI College, Philippines
              <br />
              Jun 2004- May 2008
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
