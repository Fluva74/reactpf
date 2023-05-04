import React from "react";
import { Link } from "react-router-dom";

import "./description.css";

function Description() {
  return (
    <div className="descriptionContainer">
      <div className="descriptionText">
        <h2 className="descriptionTitle">
          Accomplished Front-End Developer Specializing in Art and Design
        </h2>
        <Link to="/about" className="whoLink">
          WHO AM I
        </Link>
      </div>
      <hr id="blogLine" />
    </div>
  );
}

export default Description;
