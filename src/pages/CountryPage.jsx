import { useLoaderData, Link } from "react-router-dom";

const CountryPage = () => {
  const country = useLoaderData()[0];
  console.log(country);

  return (
    <div>
     <div>
     <Link to="/">Back</Link>
     </div>
      <img src={country.flags.svg} alt="flag" />
      <div className="country-information-container">
        <h1>{country.name.common}</h1>
        <div>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
          <p>Native name: </p>
        </div>
        <div>
          <p>Top Level Domain: {country.tld} </p>
          <p>Currencies: {country.currencies} </p>
          <p>Language: {country.language}</p>
        </div>
      </div>
    </div>
  );
}

export const countryDetailsLoader = async ({ params }) => {
  const { name } = params;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  return res.json();
}

export default CountryPage;
