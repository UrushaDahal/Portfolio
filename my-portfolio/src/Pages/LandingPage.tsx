import "../Styles/LandingPage.css";
import Navbar from "../Components/Navbar";
import HeroPic from "../assets/images/HeroPic.JPG";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}
