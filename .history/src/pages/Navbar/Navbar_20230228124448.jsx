import React, { useState } from "react";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isShow, setShow] = useState(false);
  const [isIcon, setShowIcon] = useState(false);
  const [isClose, setClose] = useState(false);
  const showNavbar = () => {
    setShow(true);
    setShowIcon(true);
  };

  const close = () => {
    setShow(false);
    setShowIcon(false);
  };
  return (
    <div className="nav">
      <button
        className={isIcon ? "nav-btn-close" : "nav-btn-hidden"}
        onClick={close}
      >
        <FaTimes />
      </button>
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
    </div>
  );
};

export default Navbar;
