import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CountryCard.css";

const SkeletonLoader = () => {
  return (
    <div className="country-cards">
      {[...Array(12)].map((_, index) => (
        <div className="country-card skeleton-card" key={index}>
          <div className="skeleton-flag"></div>
          <div className="card-information">
            <div className="skeleton-text title"></div>
            <div className="skeleton-info-wrap">
              <p className="country-information">Population: </p>
              <div className="skeleton-text"></div>
            </div>
            <div className="skeleton-info-wrap">
              <p className="country-information">Region: </p>
              <div className="skeleton-text"></div>
            </div>
            <div className="skeleton-info-wrap">
              <p className="country-information">Capital: </p>
              <div className="skeleton-text"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CountryCard = ({ countries }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading state for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000ms = 3 seconds

    // Clean up timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

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
          <Link
            className="country-card"
            to={`/country/${country.cca3}`}
            key={country.cca3}
          >
            <img src={country.flags.svg} alt="flag" />
            <div className="card-information">
              <h3 className="country-name">{country.name.common}</h3>
              <p className="country-information">
                Population: {country.population}
              </p>
              <p className="country-information">Region: {country.region}</p>
              <p className="country-information">Capital: {country.capital}</p>
            </div>
          </Link>
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
