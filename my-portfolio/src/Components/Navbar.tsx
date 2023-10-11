import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <ul>
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
