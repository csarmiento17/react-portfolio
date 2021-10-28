import React from "react";
import mypic from "../../images/mypic.jpg";

const index = () => {
  return (
    <>
      <div className="flex-row center">
        <img className="img-thumbnail img-round" src={mypic} alt="profile" />
      </div>
      <p className="flex-row center text-center">
        I'm a Software Engineer with more than 10 years of experience. I've had
        experience in development and support of software application created in
        React and SharePoint.
      </p>
    </>
  );
};

export default index;
