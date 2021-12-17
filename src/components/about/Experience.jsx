import React from "react";

const experienceContent = [
  {
    year: "2020 - Present",
    position: " Hotel Resient Manager",
    compnayName: "Black Forest Lodge Big Bear",
    details: `  In charge of guests, staff and any issues that arise on the property from 5 pm to 7 am, manage 3rd party booking and
     verify that all tasks are completed in each department. 
    Improved booking rate and star rating steadily throughout the time I worked here, improved operations in a large boutique hotel
    `,
  },
  {
    year: "2017 - 2020",
    position: "Founder / General Manager",
    compnayName: "DISAF Crypto ATM network Amsterdam, NL",
    details: `Managed employees and contractors along with providing technical support for clients and client services   
    Negotiated contract to place ATMs, built customer base and handled all licensing issues`,
  },
  {
    year: "2016 - 2020",
    position: "Freelance Engish Teacher",
    compnayName: "Ecole Des Mines Saint Etienne && Linguarama Amsterdam",
    details: `Taught English class of 1 to 20 people in the Engineering university in preperation for TOEIC exams. Taught professionals at the 
    Schiphol Group headquarters at the Amsterdm Airport.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
