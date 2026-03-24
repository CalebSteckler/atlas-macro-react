import "../css/Navigation.css";
import logo from "../images/atlas_macro_logo.png";
import mobileBtn from "../images/mobile-nav-button.png";
import { useState } from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log("Menu toggled: ", menuOpen);
    };

    return (
        <div id="main-nav">
            <img id="logo"src={logo} alt="Atlas Macro Logo"/>
            <h1 id="nav-title">Atlas Macro</h1>
            <ul id="main-nav-list" className={menuOpen ? "columns": "invisible"}>
                <li><a href="/atlas-macro-react/">Home</a></li>
                <li><a href="/atlas-macro-react/about">About</a></li>
                <li><a href="/atlas-macro-react/reports">Reports</a></li>
                <li><a href="/atlas-macro-react/contact">Contact</a></li>
            </ul>
            <img id="mobile-nav-button" src={mobileBtn} onClick={toggleMenu} />
        </div>
    );
};

export default Navigation;