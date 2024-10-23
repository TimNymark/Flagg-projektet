import { useLoaderData } from "react-router-dom";
import CountryCard, { allCountrysLoader } from "../components/CountryCard"
import Search from "../components/Search"

import "./Homepage.css";

const HomePage = ({ setResults, results }) => {
    const allCountries = useLoaderData();

    return (
        <div className= "homepage-wrapper">
            <div className="container-search-dropdown">
                <Search setResults={setResults} countries={allCountries} />
                <div>Region</div>
            </div>
            <div>
                <CountryCard countries={results}/>
            </div>
        </div>
     
    )
}
export default HomePage