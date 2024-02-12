import React from "react";

interface props {
  projectDescription: string;
  projectTitle: string;
  projectImg?: String;
}

export default function ProjectContainer(props: any) {
  return (
    <div className="projectContainer">
      <div>
        <h2 className="projectTitle">{props.projectTitle}</h2>
        <img alt="projectImg" className="projectImg" src={props.projectImg} />
        <p className="projectDescription">{props.projectDescription}</p>
      </div>
    </div>
  );
}
