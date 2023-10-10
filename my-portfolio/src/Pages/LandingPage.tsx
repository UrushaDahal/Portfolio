import "../Styles/LandingPage.css";
import Navbar from "../Components/Navbar";
import HeroPic from "../assets/images/HeroPic.JPG";
import SideNavbar from "../Components/SideNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function LandingPage() {
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
    <>
      <FontAwesomeIcon
        className="navIcon"
        onClick={handleSideNav}
        icon={faBars}
        size="2xl"
      />
      <Navbar />
      {sideNavVisible ? <SideNavbar /> : ""}
      <div className="landingMain">
        <div className="intro">
          <h3>Urusha Dahal</h3>
          <h1>Software Developer</h1>
          <p>
            "Hi, I am a developer based out of Dallas FortWorth metroplex area.
            I am a Computer Science graduate with a Bachelor's degree, crafting
            digital experiences one code at a time. | Design enthusiast with a
            knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
            create the web of tomorrow. | Turning ideas into interactive
            realities. Welcome to my coding journey!"
          </p>
        </div>
        <div className="hero">
          <img className="heropic" src={HeroPic} alt=""></img>
        </div>
      </div>
    </>
  );
}
