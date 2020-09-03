import React from "react";
import "./style.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <h2 className="nav-title">Håvard Hjelmeseth</h2>
      <a className="nav-item">Prosjekter</a>
      <a href="cv.pdf" className="nav-item">
        CV
      </a>
      <a className="nav-item">Kontakt meg</a>
    </div>
  );
}
