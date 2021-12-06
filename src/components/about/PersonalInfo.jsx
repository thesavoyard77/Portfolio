import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Christopher" },
  { meta: "last name", metaInfo: "Felix" },
  { meta: "Age", metaInfo: "44 Years" },
  { meta: "Nationality", metaInfo: "American and French" },
  // { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "41121 Big Bear BLVD, Big Bear Lake, Ca. 92315" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "felix.christopher.e@gmail.com" },
  { meta: "Github", metaInfo: " thesavoyard77" },
  { meta: "langages", metaInfo: "French, English" },
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
