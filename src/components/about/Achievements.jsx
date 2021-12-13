import React from "react";
import { GrLinkedin } from 'react-icons/gr'

const achievementsContent = [
  { title: "6", subTitle1: "years of management", subTitle2: "experience" },
  { title: "Dozens", subTitle1: "completed", subTitle2: "projects" },
  { title: "1000", subTitle1: "Hour", subTitle2: "Course" },
  { title: "1000", subTitle1: "Hours", subTitle2: "Practice" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
