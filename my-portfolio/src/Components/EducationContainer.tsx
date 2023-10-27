import React from "react";

interface props {
  edDescription: string;
  edTitle: string;
}

export default function EducationContainer(props: any) {
  return (
    <div>
      <div className="educationContainer">
        <h2>{props.edTitle}</h2>
        <hr></hr>
        <p>{props.edDescription}</p>
      </div>
    </div>
  );
}
