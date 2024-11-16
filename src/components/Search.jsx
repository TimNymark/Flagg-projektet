
import React, { useState } from "react";
import "./Search.css";

const Search = ({ setSearchTerm, isDarkMode }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (!e.target.value) setIsFocused(false);
  };

  return (
    <label className="search-label">
      <p className={`input-placeholder ${isFocused ? "focused" : ""} ${isDarkMode ? "dark" : "light"}`}>
        Search for a country
      </p>
      <input
        className={`search-input ${isDarkMode ? "dark" : "light"}`}
        type="text"
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
};

export default Search;
