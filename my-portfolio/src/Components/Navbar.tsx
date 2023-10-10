import "../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </nav>
    </div>
  );
}
