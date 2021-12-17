import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaAngellist } from 'react-icons/fa'

const personalInfoContent = [
  { meta: "first name", metaInfo: "Christopher" },
  { meta: "last name", metaInfo: "Felix" },
  // { meta: "Age", metaInfo: "44 Years" },
  // { meta: "Nationality", metaInfo: "American and French" },
  // { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "41121 Big Bear BLVD, Big Bear Lake, Ca. 92315" },
  { meta: "phone", metaInfo: "(951) 375-6478" },
  { meta: "Email", metaInfo: "felix.christopher.e@gmail.com" },
  { meta: "langages", metaInfo: "English, French" },
  { meta: "Linkdin", metaInfo: <a href="https://www.linkedin.com/in/christopher-felix-a7a25a51"><BsLinkedin /></a>  },
  { meta: "AngelList", metaInfo: <a href="https://angel.co/u/christopher-felix-1"><FaAngellist /></a>  },
  { meta: "GitHub", metaInfo: <a href="https://github.com/thesavoyard77"><BsGithub /></a>  },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
