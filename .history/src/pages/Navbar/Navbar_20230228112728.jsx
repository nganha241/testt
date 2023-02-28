import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-content">
        <li>Home</li>
        <li>Services</li>
        <li>News</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
