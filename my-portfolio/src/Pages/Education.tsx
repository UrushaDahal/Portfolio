import React from "react";
import "../Styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import EducationContainer from "../Components/EducationContainer";
import Educations from "../assets/images/Education.svg";

export default function Education() {
  return (
    <div className="edContainer">
      <h1 className="educationHeading">Education</h1>
      <img className="educationPic" src={Educations} />
      <div className="educationContainer">
        <FontAwesomeIcon
          className="gradIcon"
          icon={faGraduationCap}
          size="2xl"
        />
        <div className="edTitle">
          <EducationContainer
            edTitle="High School"
            edSchool="Name of School: Golden Gate International College"
            edLocation="Location: Batisputali, Kathmandu, Nepal"
            edYear="Year of Graduation: 2012"
            edDescription="Relevant Coursework: Introduction to Software Applications (e.g., MS Word, MS Excel), programming language (e.g., C++) and Database Fundamentals(e.g., MySQL) "
          />
        </div>
        <div>
          <EducationContainer
            edTitle="Associate's Degree "
            edSchool="Name of  School: Great Bay Community College"
            edLocation="Location: Portsmouth, New Hampshire, USA"
            edYear="Year of Graduation: 2020"
            edDescription="Relevant Coursework: Introduction to Software Development, Intermediate level programming language (e.g., Python, Java, JavaScript) and Database(e.g., MySQL) "
          />
        </div>
        <div>
          <EducationContainer
            edTitle="Bachelor's Degree"
            edSchool="Name of School: Southern New Hampshire University"
            edLocation="Location: Manchester, New Hampshire, USA"
            edYear="Year of Graduation: 2023"
            edDescription="Relevant Coursework: Data Structures and Algorithms, Computer Graphics, Mobile Application Development, Cloud Computing, Big Data Analytics, Ethical Hacking and Penetration Testing, Software Testing and Quality Assurance, SDLC, Project Management for Software Development."
          />
        </div>
      </div>
    </div>
  );
}
