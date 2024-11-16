import React from "react";
import "./Navbar.css";
import logo from "../assets/techover-logo.png";
import logoDark from "../assets/techover-logo-dark.png";
import moon from "../assets/moon.svg";
import borderedMoon from "../assets/moon-bordered.svg";

const Navbar = ({ isDarkMode, toggleDarkLightMode }) => {
  return (
    <div className={`navbar-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="navbar">
        <h2 className="navbar-banner">The Flag App</h2>
        <img src={logo} alt="logo" className={`logo ${isDarkMode ? "dark" : "light"}`}/>
        <img src={logoDark} alt="logo-dark" className={`dark-logo ${isDarkMode ? "dark" : "light"}`}/>
        <button className="dark-mode-button" onClick={toggleDarkLightMode}>
          <span>
            <img
              src={moon}
              alt="dark-moon"
              className={`dark-moon ${isDarkMode ? "dark" : "light"} `}
            />
          </span>
          <span>
            <img
              src={borderedMoon}
              alt="light-moon"
              className={`light-moon ${isDarkMode ? "dark" : "light"}`}
            />
          </span>
          {isDarkMode ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
