import React from "react";
import "../Styles/Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faJs,
  faCss3Alt,
  faJava,
  faPython,
  faAngular,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <div className="skillContainer">
      <div className="wing">
        <FontAwesomeIcon className="htmlIcon" icon={faHtml5} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="cssIcon" icon={faCss3Alt} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="reactIcon" icon={faReact} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="jsIcon" icon={faJs} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="javaIcon" icon={faJava} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="pythonIcon" icon={faPython} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="angularIcon" icon={faAngular} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="bootstrapIcon"
          icon={faBootstrap}
          size="2xl"
        />
      </div>
    </div>
  );
}
