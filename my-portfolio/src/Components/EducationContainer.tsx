import React from "react";

interface props {
  edDescription: string;
  edTitle: string;
  edSchool: string;
  edLocation: string;
  edYear: string;
}

export default function EducationContainer(props: any) {
  return (
    <div>
      <div className="educationContainer">
        <h2 className="edTitle">{props.edTitle}</h2>
        <p className="edSchool">{props.edSchool}</p>
        <p className="edLocation">{props.edLocation}</p>
        <p className="edYear">{props.edYear}</p>
        <p className="edParagraph">{props.edDescription}</p>
      </div>
    </div>
  );
}
