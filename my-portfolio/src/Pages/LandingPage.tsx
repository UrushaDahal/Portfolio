import "../Styles/LandingPage.css";
import HeroPic from "../assets/images/HeroPic.JPG";
import Butterfly from "../assets/images/Butterfly.svg";
import Developer from "../assets/images/Developer (2).svg";

export default function LandingPage() {
  return (
    <>
      <div className="landingMain">
        <div className="hero">
          <img className="developer" src={Developer} />
        </div>
        <div className="intro">
          <h3 className="name">Urusha Dahal</h3>
          <img className="heropic" src={HeroPic} alt=""></img>
          <img className="butterfly" src={Butterfly} />
          <h1 className="mainHeading">Software Developer</h1>
          <p>
            Welcome to my professional portfolio! I'm Urusha Dahal, a passionate
            and versatile Software Developer. With extensive experience in
            full-stack development, I specialize in crafting innovative and
            efficient software solutions that drive business growth and enhance
            user experiences. My expertise spans across a wide range of
            programming languages, frameworks, and tools, allowing me to tackle
            complex challenges and deliver high-quality solutions tailored to
            meet client needs. I am dedicated to leveraging my skills and
            experience to contribute to impactful projects and drive
            technological innovation. Explore my portfolio to learn more about
            my work and how I can help bring your ideas to life!
          </p>
        </div>
      </div>
    </>
  );
}
