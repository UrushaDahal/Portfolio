import "../Styles/LandingPage.css";
import HeroPic from "../assets/images/HeroPic.JPG";
import Butterfly from "../assets/images/Butterfly.svg";
import Developer from "../assets/images/Developer (2).svg";

export default function LandingPage() {
  return (
    <>
      <div className="landingMain">
        <div className="intro">
          <h3 className="name">Urusha Dahal</h3>
          <img className="butterfly" src={Butterfly} />
          <h1 className="mainHeading">Software Developer</h1>
          <p>
            "Hi, I am a developer based out of Dallas FortWorth metroplex area.
            I am a Computer Science graduate with a Bachelor's degree, crafting
            digital experiences one code at a time. | Design enthusiast with a
            knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
            create the web of tomorrow. | Turning ideas into interactive
            realities. Welcome to my coding journey!"
          </p>
          <img className="developer" src={Developer} />
        </div>
        <div className="hero">
          <img className="heropic" src={HeroPic} alt=""></img>
        </div>
      </div>
    </>
  );
}
