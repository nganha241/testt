import React, { useState } from "react";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isShow, setShow] = useState(false);
  return (
    <div className="nav">
      <ul className="{inav-content}">
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
      {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button> */}
      {/* <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button> */}
    </div>
  );
};

export default Navbar;
