import React from "react";
import "../Styles/Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Skill from "../assets/images/Skill.svg";
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
      <div className="skillHeading">
        <h1>My Skill Sets</h1>
      </div>
      <img className="skill" src={Skill} />
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
            Proficient in creating structured and semantic markup for web pages,
            ensuring accessibility and SEO optimization.
          </p>
        </div>
      ) : (
        ""
      )}
      {cssSkillVisible ? (
        <div className="cssSkill">
          <h1 className="skillsHeading">CSS</h1>
          <p className="skillsBody">
            Skilled in styling web pages with CSS, including layout design,
            typography, and responsive techniques to create visually appealing
            and user-friendly interfaces.
          </p>
        </div>
      ) : (
        ""
      )}
      {jsSkillVisible ? (
        <div className="jsSkill">
          <h1 className="skillsHeading">JavaScript</h1>
          <p className="skillsBody">
            Proficient in JavaScript programming language, including DOM
            manipulation, event handling, and asynchronous programming for
            interactive web applications.
          </p>
        </div>
      ) : (
        ""
      )}
      {pythonSkillVisible ? (
        <div className="pythonSkill">
          <h1 className="skillsHeading">Python</h1>
          <p className="skillsBody">
            Skilled in Python programming language, including data manipulation,
            scripting, and web development using frameworks like Django or
            Flask.
          </p>
        </div>
      ) : (
        ""
      )}
      {bootstrapSkillVisible ? (
        <div className="bootstrapSkill">
          <h1 className="skillsHeading">Bootstrap</h1>
          <p className="skillsBody">
            Proficient in utilizing Bootstrap framework for front-end
            development, including responsive grid systems, pre-styled
            components, and CSS utilities for rapid prototyping and design
            consistency.
          </p>
        </div>
      ) : (
        ""
      )}
      {angularSkillVisible ? (
        <div className="angularSkill">
          <h1 className="skillsHeading">Angular</h1>
          <p className="skillsBody">
            Experienced in building single-page applications (SPAs) with Angular
            framework, including component-based architecture, data binding, and
            dependency injection.
          </p>
        </div>
      ) : (
        ""
      )}
      {javaSkillVisible ? (
        <div className="javaSkill">
          <h1 className="skillsHeading">Java</h1>
          <p className="skillsBody">
            Experienced in Java programming language, including object-oriented
            principles, data structures, and application development for backend
            systems.
          </p>
        </div>
      ) : (
        ""
      )}
      {reactSkillVisible ? (
        <div className="reactSkill">
          <h1 className="skillsHeading">React</h1>
          <p className="skillsBody">
            Proficient in building dynamic and responsive user interfaces using
            React.js library, including state management, component-based
            architecture, and integration with backend services.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
