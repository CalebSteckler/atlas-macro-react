import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhatIsAtlas from "../components/WhatIsAtlas";
import HowItWorks from "../components/HowItWorks";
import UseCase from "../components/UseCase";
import Reviews from "../components/Reviews";

const Home = () => {
    return (
        <main id="home-content">
            <Hero />
            <Features />
            <WhatIsAtlas />
            <HowItWorks />
            <UseCase />
            <Reviews />
        </main>
    );
};

export default Home;