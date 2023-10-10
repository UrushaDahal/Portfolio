import React from "react";
import "../Styles/SideNavbar.css";

export default function SideNavbar() {
  return (
    <div>
      <nav className="sideNav">
        <ul className="sideNavItems">
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
