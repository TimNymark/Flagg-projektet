import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CountryCard.css";

const SkeletonLoader = ({ isDarkMode }) => {
  return (
    <div className="country-cards" >
      {[...Array(12)].map((_, i) => (
        <div key={i} className="countryCardWrapper">
          <div className={`country-card skeleton-card ${isDarkMode ? "dark" : "light"}`}>
            <div className={`skeleton-flag ${isDarkMode ? "dark" : "light"}`}></div>
            <div className={`card-information ${isDarkMode ? "dark" : "light"}`}>
              <div className={`skeleton-title ${isDarkMode ? "dark" : "light"}`}></div>
              <div className="skeleton-info-wrap">
                <p className="country-information">Population: </p>
                <div  id="population-text" className={`skeleton-country-text ${isDarkMode ? "dark" : "light"}`}></div>
              </div>
              <div className="skeleton-info-wrap">
                <p className="country-information">Region: </p>
                <div className={`skeleton-country-text ${isDarkMode ? "dark" : "light"}`}></div>
              </div>
              <div className="skeleton-info-wrap">
                <p className="country-information">Capital: </p>
                <div className={`skeleton-country-text ${isDarkMode ? "dark" : "light"}`}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CountryCard = ({ countries, isDarkMode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading state for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000ms = 3 seconds

    // Clean up timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader isDarkMode={isDarkMode} />;

  const sortedCountries = countries.sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0; // Names are equal
  });

  return (
    <div className="country-cards">
      {sortedCountries.map((country) => {
        return (
          <div className="countryCardWrapper" key={country.cca3}>
            <Link
              className={`country-card ${isDarkMode ? "dark" : "light"}`}
              to={`/country/${country.cca3}`}
            >
              <img src={country.flags.svg} alt="flag" />
              <div className="card-information">
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-information">
                  Population: {country.population}
                </p>
                <p className="country-information">Region: {country.region}</p>
                <p className="country-information">
                  Capital: {country.capital}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const allCountrysLoader = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
};

export default CountryCard;
