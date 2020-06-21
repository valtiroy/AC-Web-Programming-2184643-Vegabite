import React from "react";

function Resume(props) {
  const {type, gerecht, ingredienten, details} = props.resumeData;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{type}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{gerecht}</h5>
        <h6 className="mi-resume-company">{ingredienten}</h6>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Resume;
