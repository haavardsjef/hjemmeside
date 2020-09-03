import React from "react";
import "./style.css";

export default function Project({ title, description, image, technologies }) {
  return (
    <div className="project">
      <img src={image} className="project-img" alt="" />
      <div className="project-info">
        <span className="project-title">{title}</span>
        <p className="project-description">{description}</p>

        <p className="project-description">
          <b>Teknologier brukt:</b> {technologies}
        </p>
        <div className="project-btn-group">
          <button className="project-btn">Demo</button>
          <button className="project-btn">Vis Kildekode</button>
        </div>
      </div>
    </div>
  );
}
