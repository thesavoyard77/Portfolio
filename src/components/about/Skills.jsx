import React from "react";
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoPython, IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { SiSequelize } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { GrDocker } from 'react-icons/gr'



const skillsContent = [
  { skillClass: "p80", skillPercent: <AiFillHtml5 />, skillName: "HTML" },
  { skillClass: "p75", skillPercent: <IoLogoJavascript/>, skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: <IoLogoCss3 />, skillName: "CSS" },
  { skillClass: "p66", skillPercent: <IoLogoPython />, skillName: "Python" },
  { skillClass: "p55", skillPercent: <IoLogoNodejs />, skillName: "NodeJS" },
  { skillClass: "p62", skillPercent: <SiSequelize />, skillName: "Express/Sequelize" },
  { skillClass: "p65", skillPercent: <GrDocker />, skillName: "Docker" },
  { skillClass: "p68", skillPercent: <FaReact />, skillName: "REACT/Redux" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span className= "icons">{val.skillPercent}</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
