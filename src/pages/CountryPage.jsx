import { useLoaderData, Link, NavLink } from "react-router-dom";
import "./CountryPage.css";
import backArrow from "../assets/arrow-left.svg";

const CountryPage = () => {
  const country = useLoaderData()[0];

  return (
    <div className="country-card-wrapper">
      <div>
        <Link to="/" className="back-button">
          <span>
            <img src={backArrow} alt="arrow-left" className="back-arrow" />
          </span>
          Back
        </Link>
      </div>
      <div className="country-card-divider">
        <div>
          <img className="flag-image" src={country.flags.svg} alt="flag" />
        </div>
        <div>
          <div className="country-information-container">
            <div>
              <h1>{country.name.common}</h1>
            </div>
            <div className="country-information-divider">
              <div className="country-information-box">
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                <p>Native name:</p>
              </div>
              <div className="country-information-box">
                <p>Top Level Domain: {country.tld} </p>
                <p>
                  Currencies:{" "}
                  {country.currencies ? (
                    Object.keys(country.currencies).map((currencyCode) => (
                      <span key={currencyCode}>
                        {country.currencies[currencyCode].name}
                      </span>
                    ))
                  ) : (
                    <span>Not available</span>
                  )}
                </p>
                <p>
                  Language:{" "}
                  {country.languages ? (
                    Object.keys(country.languages).map((languesCode) => (
                      <span key={languesCode}>
                        {country.languages[languesCode]}
                      </span>
                    ))
                  ) : (
                    <span>Not available</span>
                  )}
                </p>
              </div>
            </div>
            <div className="links-to-countries">
              <p className="tiltle-border">Border Countries:</p>
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border) => (
                  <NavLink
                    className="chips"
                    to={`/country/${border}`}
                    key={border}
                  >
                    {border}
                  </NavLink>
                ))
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const countryDetailsLoader = async ({ params }) => {
  const { nameOrCode } = params;

  // Determine if nameOrCode is a country name or alpha code (assuming it's passed into the route)
  let res;
  if (nameOrCode.length === 3) {
    // If the param is 3 letters, assume it's a country code and use the /alpha endpoint
    res = await fetch(`https://restcountries.com/v3.1/alpha/${nameOrCode}`);
  } else {
    // Otherwise, assume it's a country name and use the /name endpoint
    res = await fetch(`https://restcountries.com/v3.1/name/${nameOrCode}`);
  }

  return res.json();
};

export default CountryPage;
