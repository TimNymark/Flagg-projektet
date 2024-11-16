import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import React from "react";
import "./RootLayout.css";

const RootLayout = ({isDarkMode, toggleDarkLightMode}) => {

    return(
       <div className={`root-layout ${isDarkMode ? 'dark' : 'light'}`}>
        <header>
        <Navbar isDarkMode={isDarkMode} toggleDarkLightMode={toggleDarkLightMode}/>
        </header>
        <main>
            <Outlet />
        </main>
       </div>
    )
}

export default RootLayout