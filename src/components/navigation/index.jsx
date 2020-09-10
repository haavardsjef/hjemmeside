import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <h2 className="nav-title">Håvard Hjelmeseth</h2>
      <input type="checkbox" id="nav-checkbox" name="nav-checkbox" />
      <label className="nav-toggle" for="nav-checkbox">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <div className="nav-buttons">
        <Link to="/" className="nav-item">
          Prosjekter
        </Link>
        <a
          href="cv.pdf"
          className="nav-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <Link to="/contact" className="nav-item">
          Kontakt meg
        </Link>
      </div>
    </div>
  );
}
