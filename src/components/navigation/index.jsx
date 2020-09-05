import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <h2 className="nav-title">Håvard Hjelmeseth</h2>
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
