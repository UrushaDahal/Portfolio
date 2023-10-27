import React from "react";
import "../Styles/Project.css";
import ProjectContainer from "../Components/ProjectContainer";
import HeroPic from "../assets/images/HeroPic.JPG";

export default function Project() {
  return (
    <div className="projectContainer">
      <ProjectContainer
        projectTitle="My First Project"
        projectImg={HeroPic}
        projectDescription=" Hi, I am a developer based out of Dallas FortWorth metroplex area.
            I am a Computer Science graduate with a Bachelor's degree, crafting
            digital experiences one code at a time. | Design enthusiast with a
            knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
            create the web of tomorrow. | Turning ideas into interactive
            realities. Welcome to my coding journey!"
      />
      <ProjectContainer
        projectTitle="My Second Project"
        projectImg={HeroPic}
        projectDescription=" Hi, I am a developer based out of Dallas FortWorth metroplex area.
           I am a Computer Science graduate with a Bachelor's degree, crafting
           digital experiences one code at a time. | Design enthusiast with a
           knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
           create the web of tomorrow. | Turning ideas into interactive
           realities. Welcome to my coding journey!"
      />
      <ProjectContainer
        projectTitle="My Third Project"
        projectImg={HeroPic}
        projectDescription=" Hi, I am a developer based out of Dallas FortWorth metroplex area.
           I am a Computer Science graduate with a Bachelor's degree, crafting
           digital experiences one code at a time. | Design enthusiast with a
           knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
           create the web of tomorrow. | Turning ideas into interactive
           realities. Welcome to my coding journey!"
      />
      <ProjectContainer
        projectTitle="My Fourth Project"
        projectImg={HeroPic}
        projectDescription=" Hi, I am a developer based out of Dallas FortWorth metroplex area.
           I am a Computer Science graduate with a Bachelor's degree, crafting
           digital experiences one code at a time. | Design enthusiast with a
           knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
           create the web of tomorrow. | Turning ideas into interactive
           realities. Welcome to my coding journey!"
      />
      <ProjectContainer
        projectTitle="My Fifth Project"
        projectImg={HeroPic}
        projectDescription=" Hi, I am a developer based out of Dallas FortWorth metroplex area.
           I am a Computer Science graduate with a Bachelor's degree, crafting
           digital experiences one code at a time. | Design enthusiast with a
           knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
           create the web of tomorrow. | Turning ideas into interactive
           realities. Welcome to my coding journey!"
      />
      <ProjectContainer
        projectTitle="My Sixth Project"
        projectImg={HeroPic}
        projectDescription=" Hi, I am a developer based out of Dallas FortWorth metroplex area.
           I am a Computer Science graduate with a Bachelor's degree, crafting
           digital experiences one code at a time. | Design enthusiast with a
           knack for pixel-perfection. | HTML, CSS, JS explorer on a mission to
           create the web of tomorrow. | Turning ideas into interactive
           realities. Welcome to my coding journey!"
      />
    </div>
  );
}
