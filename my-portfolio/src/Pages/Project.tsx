import React from "react";
import "../Styles/Project.css";
import ProjectContainer from "../Components/ProjectContainer";
import HeroPic from "../assets/images/HeroPic.JPG";
import Project2 from "../assets/images/ProjectBM2.JPG";
import Project1 from "../assets/images/ProjectPP.JPG";

export default function Project() {
  return (
    <div className="projectsContainer">
      <ProjectContainer
        projectTitle="BabyMama: E-commerce Website"
        projectImg={Project2}
        projectDescription="During a comprehensive full-stack bootcamp, I undertook the development of BabyMama, an e-commerce website using React.js for the frontend and Java for the backend. This project served as a culmination of my training, allowing me to apply a wide range of skills in frontend and backend development to create a fully functional online shopping platform."
      />
      <ProjectContainer
        projectTitle="Professional Portfolio"
        projectImg={Project1}
        projectDescription=" As part of my journey in web development, I created my professional portfolio website to showcase my projects, skills, and experiences. This website serves as a central hub for visitors to learn more about me, explore my projects, and connect with me professionally."
      />
    </div>
  );
}
