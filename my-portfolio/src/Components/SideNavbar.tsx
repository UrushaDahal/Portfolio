import React from "react";
import "../Styles/SideNavbar.css";
import { Link } from "react-router-dom";

export default function SideNavbar() {
  return (
    <div>
      <nav className="sideNav">
        <ul className="sideNavItems">
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
          <Link to="/education">
            <li>Education</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/projects">
            {" "}
            <li>Projects</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
