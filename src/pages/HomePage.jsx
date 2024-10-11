import CountryCard, { allCountrysLoader } from "../components/CountryCard"
import Search from "../components/Serch"

import "./Homepage.css";

const HomePage = () => {
    return (
        <div>
            <div className="container-search-dropdown">
                <Search/>
                <div>Region</div>
            </div>
            <div>
                <CountryCard />
            </div>
        </div>
     
    )
}
export default HomePage