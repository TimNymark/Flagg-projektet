import { useLoaderData, Link, NavLink, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CountryPage.css";
import backArrow from "../assets/arrow-left.svg";
import backArrowDark from "../assets/arrow-left-dark.svg";

const SkeletonLoader = ({ isDarkMode }) => {
  return (
    <div className="country-card-wrapper">
      <div className="back-button-wrapper">
        <Link
          to="/"
          className={`back-button $ ${isDarkMode ? "dark" : "light"}`}
        >
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
          <p>BACK</p>
        </Link>
      </div>
      <div className="country-card-divider">
        <div className="country-content-wrapper">
          <div
            className={`skeleton-flag-country ${isDarkMode ? "dark" : "light"}`}
          ></div>
        </div>
        <div className="country-content-wrapper">
          <div className="country-information-container">
            <div>
              <div
                className={`skeleton-country-title ${
                  isDarkMode ? "dark" : "light"
                }`}
              ></div>
            </div>
            <div className="country-information-divider">
              <div className="country-information-box">
                <div className="country-skeleton-information-wrapper">
                  <p>Population: </p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Region: </p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Capital: </p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Native name:</p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
              </div>
              <div className="country-information-box">
                <div className="country-skeleton-information-wrapper">
                  <p>Top Level Domain:</p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Currencies:</p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Language:</p>
                  <div
                    className={`skeleton-text ${isDarkMode ? "dark" : "light"}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="links-to-countries">
              <p className="tiltle-border">Border Countries:</p>
              <div
                className={`skeleton-chip ${isDarkMode ? "dark" : "light"}`}
              ></div>
              <div
                className={`skeleton-chip ${isDarkMode ? "dark" : "light"}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountryPage = ({ isDarkMode }) => {
  const country = useLoaderData()[0];
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <SkeletonLoader isDarkMode={isDarkMode} />;
  }

  return (
    <div className="country-card-wrapper">
      <div className="back-button-wrapper">
        <Link
          to="/"
          className={`back-button $ ${isDarkMode ? "dark" : "light"}`}
        >
        
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
          <p>BACK</p>
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
                <p className="country-information-text">
                  Population: <span className="country-information-text-result">{country.population}</span>
                </p>
                <p className="country-information-text">
                  Region: <span className="country-information-text-result">{country.region}</span>
                </p>
                <p className="country-information-text">
                  Capital: <span className="country-information-text-result">{country.capital}</span>
                </p>
                <p className="country-information-text">
                  Native name:{" "}
                  {country.name.nativeName ? (
                    <span className="country-information-text-result">
                      {Object.values(country.name.nativeName)[0].common}
                    </span>
                  ) : (
                    <span className="country-information-text-result">Not available</span>
                  )}
                </p>
              </div>
              <div className="country-information-box">
                <p className="country-information-text">
                  Top Level Domain: <span className="country-information-text-result">{country.tld}</span>
                </p>
                <p className="country-information-text">
                  Currencies:{" "}
                  {country.currencies ? (
                    <span className="country-information-text-result">{Object.values(country.currencies)[0].name}</span>
                  ) : (
                    <span>Not available</span>
                  )}
                </p>
                <p className="country-information-text">
                  Language:{" "}
                  {country.languages ? (
                    <span className="country-information-text-result">{Object.values(country.languages)[0]}</span>
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
