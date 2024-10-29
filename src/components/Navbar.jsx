import "./Navbar.css"
import logo from "../assets/techover-logo.png"
import moon from "../assets/moon.svg"

const Navbar = () => {
    return <div className= "navbar-container">
       <div className="navbar">
       <h2>The Flag App</h2>
        <img src={logo} alt="logo" />
        <button className="dark-mode-button">
            <span><img src={moon} alt="dark-moon" /></span>
            Dark mode</button>
       </div>
    </div>
}

export default Navbar