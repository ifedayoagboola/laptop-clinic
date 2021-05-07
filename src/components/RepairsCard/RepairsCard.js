import React from "react";
import "./RepairsCard.scss";
import { Link } from "react-router-dom";
import { bgRepairs } from "../../assets/4.jpg";

const RepairsCard = () => {
  return (
    <div className="item2">
      <Link to="/repairs">
        <h1>Repairs</h1>
      </Link>
    </div>
  );
};

export default RepairsCard;
