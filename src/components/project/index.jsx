import React from "react";
import "./style.css";

export default function Project({
  title,
  description,
  image,
  technologies,
  demo,
  code,
}) {
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
          {demo ? (
            <a href={demo} className="project-btn">
              Demo
            </a>
          ) : (
            <button disabled className="project-btn project-btn-disabled">
              Demo
            </button>
          )}
          {code ? (
            <a href={code} className="project-btn">
              Vis kildekode
            </a>
          ) : (
            <button disabled className="project-btn project-btn-disabled">
              Vis Kildekode
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
