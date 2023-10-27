import React from "react";
import "../Styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import EducationContainer from "../Components/EducationContainer";

export default function Education() {
  return (
    <div className="edContainer">
      <h1 className="educationHeading">Education</h1>
      <div className="educationContainer">
        <FontAwesomeIcon
          className="gradIcon"
          icon={faGraduationCap}
          size="2xl"
        />
        <div>
          <EducationContainer
            edTitle="High School"
            edDescription="Computer Science!"
          />
        </div>
        <div>
          <EducationContainer
            edTitle="Associates"
            edDescription="Associates in Information Technology!"
          />
        </div>
        <div>
          <EducationContainer
            edTitle="Bachelors"
            edDescription="Bachelors in Computer Science!"
          />
        </div>
      </div>
    </div>
  );
}
