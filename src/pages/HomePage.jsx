import { useLoaderData, Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import Region from "../components/Region";
import { useState, useEffect } from "react";
import "./Homepage.css";
import backArrow from '../assets/arrow-left.svg';

const HomePage = ({isDarkMode}) => {
  const allCountries = useLoaderData(); // Fetch all countries initially
  const [filteredCountries, setFilteredCountries] = useState(allCountries); // Holds the final filtered countries for display
  const [region, setRegion] = useState("All"); // Tracks selected region
  const [searchTerm, setSearchTerm] = useState(""); // Tracks search input

  useEffect(() => {
    // Start with all countries for filtering
    let results = allCountries;

    // Apply region filter if a specific region is selected
    if (region !== "All") {
      results = results.filter((country) => country.region === region);
    }

    // Apply search filter to the region-filtered results
    if (searchTerm) {
      results = results.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCountries(results); // Update the displayed results
  }, [region, searchTerm, allCountries]);

  const handleResetFilters = () => {
    setRegion("All");
    setSearchTerm("");
  };

  return (
    <div className="homepage-wrapper">
      {filteredCountries.length === 0 ? (
        <div className="no-results">
          <button onClick={handleResetFilters} className="back-button">
            <img src={backArrow} alt="ArrowLogo" className="back-arrow"/>BACK
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
