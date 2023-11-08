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
        <FontAwesomeIcon className="reactIcon" icon={faReact} size="2xl" />
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
        <FontAwesomeIcon className="javaIcon" icon={faJava} size="2xl" />
      </div>
      <div className="wing">
        <FontAwesomeIcon className="pythonIcon" icon={faPython} size="2xl" />
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
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {cssSkillVisible ? (
        <div className="cssSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {jsSkillVisible ? (
        <div className="jsSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {pythonSkillVisible ? (
        <div className="pythonSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {bootstrapSkillVisible ? (
        <div className="bootstrapSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {angularSkillVisible ? (
        <div className="angularSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {javaSkillVisible ? (
        <div className="javaSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
      {reactSkillVisible ? (
        <div className="reactSkill">
          <h1 className="skillsHeading">HTML</h1>
          <p className="skillsBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat interdum varius sit amet mattis vulputate enim nulla.
            Nulla facilisi etiam dignissim diam quis enim lobortis. Tristique
            nulla aliquet enim tortor at. Scelerisque eleifend donec pretium
            vulputate. Platea dictumst quisque sagittis purus.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
