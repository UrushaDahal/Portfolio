import React from "react";
import "../Styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  return (
    <div className="edContainer">
      <h1 className="educationHeading">Education</h1>
      <FontAwesomeIcon className="gradIcon" icon={faGraduationCap} size="2xl" />
      <div className="educationContainer">
        <div>
          <h2>Associates</h2>
          <section>
            <img></img>
          </section>
        </div>
        <div>
          <h2>Bachelors</h2>
          <section className="bachelors">
            <img></img>
          </section>
        </div>
        <div>
          <h2>Certifications</h2>
          <section>
            <img></img>
          </section>
        </div>
      </div>
    </div>
  );
}
