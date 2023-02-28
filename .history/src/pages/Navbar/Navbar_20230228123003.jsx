import React, { useState } from "react";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isShow, setShow] = useState(false);
  const showNavbar = () => {
    setShow(true);
    setShowIcon(true);
  };

  const [isIcon, setShowIcon] = useState(false);
  const showIcon = () => {
    setShowIcon(true);
  };
  return (
    <div className="nav">
      <ul className={isShow ? "nav-content-mobile" : "nav-content"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button
        className={isIcon ? "nav-btn-hidden" : "nav-btn"}
        onClick={showNavbar}
      >
        <FaBars />
      </button>
      <button
        className={isIcon ? "nav-hidden" : "nav-a"}
        onClick={setShow(false)}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Navbar;
