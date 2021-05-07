import React from "react";
import "./SalesCard.scss";
import { bgSales } from "../../assets/4.jpg";
import { Link } from "react-router-dom";

const SalesCard = () => {
  return (
    <>
      <div className="item1">
        <Link to="/sales">
          <h1>Sales</h1>
        </Link>
      </div>
    </>
  );
};

export default SalesCard;
