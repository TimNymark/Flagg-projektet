import React, { useState, useEffect, useRef } from "react";
import "./Region.css";
import arrowDark from "../assets/arrow-down-dark.svg";
import arrowLight from "../assets/arrow-down-light.svg";

const Region = ({ setRegion, isDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For showing/hiding the dropdown
  const [selectedRegion, setSelectedRegion] = useState(""); // For displaying the selected region
  const [isFocused, setIsFocused] = useState(false);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegionChange = (region) => {
    setSelectedRegion(region); // Update selected region
    setRegion(region); // Pass the selected region to parent component
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="dropdownWrapper">
      <div
        className={`region-select ${isDarkMode ? "dark" : "light"}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p className={`region-placeholder ${isDropdownOpen || selectedRegion ? "focused" : ""} ${isDarkMode ? "dark" : "light"}`}>
          Region
        </p>
        <span className={`arrow ${isDropdownOpen ? "rotate" : ""}`}>
          <img
            src={arrowLight}
            alt="light arrow"
            className={`arrow-light ${isDarkMode ? "dark" : "light"}`}
          />
          <img
            src={arrowDark}
            alt="dark-arrow"
            className={`arrow-dark ${isDarkMode ? "dark" : "light"}`}
          />
        </span>
        {selectedRegion}
      </div>

      {isDropdownOpen && (
        <ul className={`dropdown ${isDarkMode ? "dark" : "light"}`}>
          {regions.map((region) => (
            <li
              key={region}
              className="dropdown-item"
              onClick={() => {
                handleRegionChange(region);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Region;
