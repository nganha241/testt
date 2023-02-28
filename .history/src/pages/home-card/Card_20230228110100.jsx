import React from "react";
import cssic from "./css-icon.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-title">Lorem ipsum dolor sit amet</div>
      <div className="card-content">
        <div className="">
          <img src={cssic} alt="" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;