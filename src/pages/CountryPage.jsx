import { useLoaderData, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CountryPage.css";
import backArrow from "../assets/arrow-left.svg";
import backArrowDark from "../assets/arrow-left-dark.svg";

const SkeletonLoader = ({isDarkMode}) => {
  return (
    <div className="country-card-wrapper">
      <div className="back-button-wrapper">
        <Link
          to="/"
          className={`back-button $ ${isDarkMode ? "dark" : "light"}`}
        >
          <span className="back-arrow-wrapper">
            <img
              src={backArrow}
              alt="arrow-left"
              className={`back-arrow ${isDarkMode ? "dark" : "light"}`}
            />
            <img
              src={backArrowDark}
              alt="arrow-left-dark"
              className={`back-arrow-dark ${isDarkMode ? "dark" : "light"}`}
            />
          </span>
          <p>Back</p>
        </Link>
      </div>
      <div className="country-card-divider">
        <div className="country-content-wrapper">
          <div className={`skeleton-flag-country ${isDarkMode ? "dark" : "light"}`}></div>
        </div>
        <div className="country-content-wrapper">
          <div className="country-information-container">
            <div>
              <div className={`skeleton-country-title ${isDarkMode ? "dark" : "light"}`}></div>
            </div>
            <div className="country-information-divider">
              <div className="country-information-box">
                <div className="country-skeleton-information-wrapper">
                  <p>Population: </p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Region: </p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Capital: </p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Native name:</p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
              </div>
              <div className="country-information-box">
                <div className="country-skeleton-information-wrapper">
                  <p>Top Level Domain:</p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Currencies:</p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Language:</p>
                  <div className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}></div>
                </div>
              </div>
            </div>
            <div className="links-to-countries">
              <p className="tiltle-border">Border Countries:</p>
              <div className={`skeleton-chip ${isDarkMode ? "dark" : "light"}`}></div>
              <div className={`skeleton-chip ${isDarkMode ? "dark" : "light"}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountryPage = ({ isDarkMode }) => {
  const country = useLoaderData()[0];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading state for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000ms = 3 seconds

    // Clean up timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader isDarkMode={isDarkMode}/>;

  console.log(country);
  return (
    <div className="country-card-wrapper">
      <div className="back-button-wrapper">
        <Link
          to="/"
          className={`back-button $ ${isDarkMode ? "dark" : "light"}`}
        >
          <span className="back-arrow-wrapper">
            <img
              src={backArrow}
              alt="arrow-left"
              className={`back-arrow ${isDarkMode ? "dark" : "light"}`}
            />
            <img
              src={backArrowDark}
              alt="arrow-left-dark"
              className={`back-arrow-dark ${isDarkMode ? "dark" : "light"}`}
            />
          </span>
          <p>Back</p>
        </Link>
      </div>
      <div className="country-card-divider">
        <div className="country-content-wrapper">
          <img className="flag-image" src={country.flags.svg} alt="flag" />
        </div>
        <div className="country-content-wrapper">
          <div className="country-information-container">
            <div>
              <h1>{country.name.common}</h1>
            </div>
            <div className="country-information-divider">
              <div className="country-information-box">
                <p className="country-information-text">Population: {country.population}</p>
                <p className="country-information-text">Region: {country.region}</p>
                <p className="country-information-text">Capital: {country.capital}</p>
                <p className="country-information-text">
                  Native name:{" "}
                  {country.name.nativeName ? (
                    Object.keys(country.name.nativeName).map((nativeCode) => (
                      <span key={nativeCode}>
                        {country.name.nativeName[nativeCode].common}
                      </span>
                    ))
                  ) : (
                    <span>Not available</span>
                  )}
                </p>
              </div>
              <div className="country-information-box">
                <p className="country-information-text">Top Level Domain: {country.tld} </p>
                <p className="country-information-text">
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
                <p className="country-information-text">
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
              <p className="title-border">Border Countries:</p>
              <div className="chips-container">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border) => (
                  <NavLink
                    className={`chips ${isDarkMode ? "dark" : "light"}`}
                    to={`/country/${border}`}
                    key={border}
                  >
                    {border}
                  </NavLink>
                ))
              ) : (
                <p>This country has no border Border Countries</p>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const countryDetailsLoader = async ({ params }) => {
  const { code } = params;
  let res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  return res.json();
};

export default CountryPage;
