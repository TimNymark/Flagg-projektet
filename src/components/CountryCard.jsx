import {Link, useLoaderData } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = () => {
  const countryCard = useLoaderData();
  console.log({ countryCard });

  const sortedCountries = countryCard.sort((a, b) => {
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
          <Link className= "country-card" to={country.name.common} key={country.name.common}>
            <img src={country.flags.svg} alt="flag" />
            <div className="card-information">
              <h3>{country.name.common}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
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
