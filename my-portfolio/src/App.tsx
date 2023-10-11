import React from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import SideNavbar from "./Components/SideNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";

function App() {
  const [sideNavVisible, setSideNavVisible] = useState(false);
  const handleSideNav = function toggle() {
    if (sideNavVisible == false) {
      setSideNavVisible(true);
      console.log("True");
    } else if (sideNavVisible == true) {
      setSideNavVisible(false);
      console.log("True");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <FontAwesomeIcon
          className="navIcon"
          onClick={handleSideNav}
          icon={faBars}
          size="2xl"
        />
        <Navbar />
        {sideNavVisible ? <SideNavbar /> : ""}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
