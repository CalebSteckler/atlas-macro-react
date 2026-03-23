import React from "react";
import "../css/Footer.css";
import logo from "../images/atlas_macro_logo.png";

const Footer = () => {
  return (
    <footer>
      <div id="main-footer" class="columns">
            <img id="footer-logo"src={logo} alt="Atlas Macro Logo"/>
            <h1 id="footer-title">Atlas Macro</h1>
            <ul class="columns">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/reports">Reports</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;

