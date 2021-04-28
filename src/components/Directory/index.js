import React from "react";
import shop from "../../assets/3.jpg";
import repair from "../../assets/4.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${repair})`,
          }}
        >
          <a href="laptopclinic.ng">Repair</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${shop})`,
          }}
        >
          <a href="laptopclinic.ng">Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
