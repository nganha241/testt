import React from "react";
import cssic from "./css-icon.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card-title">Lorem ipsum dolor sit amet</div>
      <div className="card-content">
        <div>
          <img src={cssic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
