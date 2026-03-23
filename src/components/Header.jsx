import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header id="header">
      <Navigation />
    </header>
  );
};

export default Header;

