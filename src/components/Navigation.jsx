import "../css/Navigation.css";
import logo from "../images/atlas_macro_logo.png";
import mobileBtn from "../images/mobile-nav-button.png";

const Navigation = () => {
    return (
        <div id="main-nav">
            <img id="logo"src={logo} alt="Atlas Macro Logo"/>
            <h1 id="nav-title">Atlas Macro</h1>
            <ul id="main-nav-list" className="columns"> {/* add class invisible to enable mobile menu*/}
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/reports">Reports</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <img id="mobile-nav-button" src={mobileBtn} alt="Mobile Menu"/>
        </div>
    );
};

export default Navigation;