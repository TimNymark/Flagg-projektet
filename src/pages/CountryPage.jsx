import { useLoaderData, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CountryPage.css";
import backArrow from "../assets/arrow-left.svg";

const SkeletonLoader = () => {
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
          <div className="skeleton-flag-country"></div>
        </div>
        <div>
          <div className="country-information-container">
            <div>
              <div className="skeleton-country-title"></div>
            </div>
            <div className="country-information-divider">
              <div className="country-information-box">
                <div className="country-skeleton-information-wrapper">
                  <p>Population: </p>
                  <div className="skeleton-text"></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Region: </p>
                  <div className="skeleton-text"></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Capital: </p>
                  <div className="skeleton-text"></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Native name:</p>
                  <div className="skeleton-text"></div>
                </div>
              </div>
              <div className="country-information-box">
                <div className="country-skeleton-information-wrapper">
                  <p>Top Level Domain:</p>
                  <div className="skeleton-text"></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Currencies:</p>
                  <div className="skeleton-text"></div>
                </div>
                <div className="country-skeleton-information-wrapper">
                  <p>Language:</p>
                  <div className="skeleton-text"></div>
                </div>
              </div>
            </div>
            <div className="links-to-countries">
              <p className="tiltle-border">Border Countries:</p>
              <div className="skeleton-chip"></div>
              <div className="skeleton-chip"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountryPage = () => {
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

  if (loading) return <SkeletonLoader />;

  console.log(country);
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
                <p>
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
              <p className="title-border">Border Countries:</p>
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
                <p>This country has no border Border Countries</p>
              )}
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
