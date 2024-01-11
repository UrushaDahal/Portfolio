import React from "react";
import "../Styles/Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
  const [htmlSkillVisible, setHtmlSkillVisible] = useState(false);
  const [cssSkillVisible, setCssSkillVisible] = useState(false);
  const [jsSkillVisible, setJsSkillVisible] = useState(false);
  const [angularSkillVisible, setAngularSkillVisible] = useState(false);
  const [javaSkillVisible, setJavaSkillVisible] = useState(false);
  const [pythonSkillVisible, setPythonSkillVisible] = useState(false);
  const [bootstrapSkillVisible, setBootstrapSkillVisible] = useState(false);
  const [reactSkillVisible, setReactSkillVisible] = useState(false);

  const handleHtmlSkill = function showHtml() {
    if (htmlSkillVisible == false) {
      setHtmlSkillVisible(true);
    } else if (htmlSkillVisible == true) {
      setHtmlSkillVisible(false);
    }
  };

  const handleJsSkill = function showHtml() {
    if (jsSkillVisible == false) {
      setJsSkillVisible(true);
    } else if (jsSkillVisible == true) {
      setJsSkillVisible(false);
    }
  };

  const handleCssSkill = function showHtml() {
    if (cssSkillVisible == false) {
      setCssSkillVisible(true);
    } else if (cssSkillVisible == true) {
      setCssSkillVisible(false);
    }
  };

  const handleAngularSkill = function showHtml() {
    if (angularSkillVisible == false) {
      setAngularSkillVisible(true);
    } else if (angularSkillVisible == true) {
      setAngularSkillVisible(false);
    }
  };

  const handleJavaSkill = function showHtml() {
    if (javaSkillVisible == false) {
      setJavaSkillVisible(true);
    } else if (javaSkillVisible == true) {
      setJavaSkillVisible(false);
    }
  };

  const handlePythonSkill = function showHtml() {
    if (pythonSkillVisible == false) {
      setPythonSkillVisible(true);
    } else if (pythonSkillVisible == true) {
      setPythonSkillVisible(false);
    }
  };

  const handleBootstrapSkill = function showHtml() {
    if (bootstrapSkillVisible == false) {
      setBootstrapSkillVisible(true);
    } else if (bootstrapSkillVisible == true) {
      setBootstrapSkillVisible(false);
    }
  };

  const handleReactSkill = function showHtml() {
    if (reactSkillVisible == false) {
      setReactSkillVisible(true);
    } else if (reactSkillVisible == true) {
      setReactSkillVisible(false);
    }
  };

  return (
    <div className="skillContainer">
      <div className="wing">
        <FontAwesomeIcon
          className="htmlIcon"
          onClick={handleHtmlSkill}
          icon={faHtml5}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="cssIcon"
          onClick={handleCssSkill}
          icon={faCss3Alt}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="reactIcon"
          onClick={handleReactSkill}
          icon={faReact}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="jsIcon"
          onClick={handleJsSkill}
          icon={faJs}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="javaIcon"
          onClick={handleJavaSkill}
          icon={faJava}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="pythonIcon"
          onClick={handlePythonSkill}
          icon={faPython}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="angularIcon"
          onClick={handleAngularSkill}
          icon={faAngular}
          size="2xl"
        />
      </div>
      <div className="wing">
        <FontAwesomeIcon
          className="bootstrapIcon"
          onClick={handleBootstrapSkill}
          icon={faBootstrap}
          size="2xl"
        />
      </div>
      {htmlSkillVisible ? (
        <div className="htmlSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {cssSkillVisible ? (
        <div className="cssSkill">
          <h1 className="skillsHeading">CSS</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {jsSkillVisible ? (
        <div className="jsSkill">
          <h1 className="skillsHeading">JavaScript</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {pythonSkillVisible ? (
        <div className="pythonSkill">
          <h1 className="skillsHeading">Python</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {bootstrapSkillVisible ? (
        <div className="bootstrapSkill">
          <h1 className="skillsHeading">Bootstrap</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {angularSkillVisible ? (
        <div className="angularSkill">
          <h1 className="skillsHeading">Angular</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {javaSkillVisible ? (
        <div className="javaSkill">
          <h1 className="skillsHeading">Java</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
      {reactSkillVisible ? (
        <div className="reactSkill">
          <h1 className="skillsHeading">React</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
