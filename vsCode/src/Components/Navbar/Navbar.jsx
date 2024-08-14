import React, { useState } from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { IoSunnyOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [IsOpen, SetIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Visual Studio Code</p>
        </div>

        <div className={`option ${IsOpen ? "open" : ""}`}>
          <a to="/">Docs</a>
          <a to="/">Updates</a>
          <a to="/">Blog</a>
          <a to="/">Api</a>
          <a to="/">Extentions</a>
          <a to="/">FAQ</a>
        </div>
      </div>
      <div className={`nav-right ${IsOpen ? "open" : ""}`}>
        <IoSunnyOutline className="sunIcon" />
        <div className="search">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search Doc" />
        </div>
        <button className="download-btn"> Download</button>
      </div>

      <FaBars
        className="hide"
        onClick={() => {
          SetIsOpen(!IsOpen);
        }}
      />
    </div>
  );
};

export default Navbar;
