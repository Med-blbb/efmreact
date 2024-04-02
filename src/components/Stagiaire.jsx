import React from "react";
import { Link } from "react-router-dom";
import "./Stagiaire.css";

const Stagiaire = ({ nom, image }) => {
  return (
    <div className="stg">
      <Link to={`/${nom}`}>
        <img src={image} alt="" />
      </Link>

      <h2>{nom}</h2>
    </div>
  );
};
export default Stagiaire;
