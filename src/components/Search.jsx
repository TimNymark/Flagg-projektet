import { useState, useEffect } from "react";
import "./Search.css";

const Search = ({ setResults, countries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); 
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      // If search term is empty, show all countries
      setResults(countries);
    } else {
      // Filter the countries based on the search term
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
      );
      setResults(filteredCountries);
    }
  }, [searchTerm, countries, setResults]);


  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search for a country"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
