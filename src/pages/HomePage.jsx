import { useLoaderData, Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import Region from "../components/Region";
import { useState, useEffect } from "react";
import "./Homepage.css";
import backArrow from '../assets/arrow-left.svg';
import backArrowDark from "../assets/arrow-left-dark.svg";

const HomePage = ({isDarkMode}) => {
  const allCountries = useLoaderData(); 
  const [filteredCountries, setFilteredCountries] = useState(allCountries); 
  const [region, setRegion] = useState("All"); 
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    
    let results = allCountries;

    
    if (region !== "All") {
      results = results.filter((country) => country.region === region);
    }

    
    if (searchTerm) {
      results = results.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCountries(results); 
  }, [region, searchTerm, allCountries]);

  const handleResetFilters = () => {
    setRegion("All");
    setSearchTerm("");
  };

  return (
    <div className="homepage-wrapper">
      {filteredCountries.length === 0 ? (
        <div className="no-results">
          <button onClick={handleResetFilters} className={`back-button ${isDarkMode ? "dark" : "light"}`}>
            <img src={backArrow} alt="ArrowLogo" className={`back-arrow ${isDarkMode ? "dark" : "light"}`}/>
            <img src={backArrowDark} alt="ArrowLogoDark" className={`back-arrow-dark ${isDarkMode ? "dark" : "light"}`}/>
            <p>BACK</p>
          </button>
          <p>Could not find that country!</p>
        </div>
      ) : (
        <>
          <div className="container-search-dropdown">
            <Search setSearchTerm={setSearchTerm} isDarkMode={isDarkMode} />
            <Region setRegion={setRegion} isDarkMode={isDarkMode} />
          </div>
          <CountryCard countries={filteredCountries} isDarkMode={isDarkMode}/>
        </>
      )}
    </div>
  );
};

export default HomePage;
