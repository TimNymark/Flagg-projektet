import {Link, useLoaderData } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({countries}) => {


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
            <Link className= "country-card" to={`/country/${country.cca3}`} key={country.cca3}>
            <img src={country.flags.svg} alt="flag" />
            <div className="card-information">
              <h3 className="country-name">{country.name.common}</h3>
              <p className="country-information">Population: {country.population}</p>
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
