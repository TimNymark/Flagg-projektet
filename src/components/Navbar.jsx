import "./Navbar.css"
import logo from "../assets/techover-logo.png"
import moon from "../assets/moon.svg"

const Navbar = () => {
    return <div className= "navbar-container">
       <div className="navbar">
       <h2>Country App</h2>
        <img src={logo} alt="logo" />
        <button>
            <span><img src={moon} alt="dark-moon" /></span>
            Dark mode</button>
       </div>
    </div>
}

export default Navbar