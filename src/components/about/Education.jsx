import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "Certificate",
    institute: "App Academy",
    details: `  A 1000 hour coding school with 3% admissions, emphasizing best practices, coding style and pair programming  2021`,
  },
  {
    year: "2016",
    degree: "English Teaching Certificate",
    institute: "Oxford House Prague",
    details: `A five week long bootcamp for ESL teachers`,
  },
  {
    year: "2012 - 2013",
    degree: "AA in Business Administration",
    institute: "Orange Coast College",
    details: `Honor student and national honors fraternity member, was unable to complete due to relocation for work`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
