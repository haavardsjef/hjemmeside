import React from "react";
import "./style.css";
import pc from "./../../assets/pc.svg";
import github from "./../../assets/github.svg";
import linkedin from "./../../assets/linkedin.svg";
import facebook from "./../../assets/facebook.svg";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <img src={pc} className="contact-img" />
      <h1 className="contact-title">KONTAKT MEG</h1>
      <a href="mailto:havhje@gmail.com" className="contact-email">
        havhje@gmail.com
      </a>
      <div className="contact-socials">
        <a
          href="https://github.com/haavardsjef"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/h%C3%A5vard-hjelmeseth-7a979a12a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} />
        </a>
        <a
          href="https://www.facebook.com/havard.hjelmeseth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} />
        </a>
      </div>
    </div>
  );
}
