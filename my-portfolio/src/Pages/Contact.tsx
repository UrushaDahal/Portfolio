import React from "react";
import "../Styles/Contact.css";
import contact from "../assets/images/contact.svg";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <img className="contact" src={contact} />
        <h1 className="contactHeading">Contact Me!</h1>
        <h3>URUSHADAHAL1995@GMAIL.COM</h3>
        <button>Contact</button>
      </div>
    </div>
  );
}
