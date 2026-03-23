import React from "react";
import "../css/About.css";
import HeroTitle from "../components/HeroTitle";
import WhatIsCard from "../components/WhatIsCard";
import teamPhoto from "../images/team-photo.png";

const About = () => {
  return (
    <main id="about-content">
      <HeroTitle title="About Atlas Macro" />
      <h3 id="what-is-atlas-header">What is Atlas Macro?</h3>
      <p id="what-is-atlas-text">Atlas Macro is an interactive global intelligence platform designed to help users understand international 
        economic conditions at a country level. By combining real-time data of interest rates, crypto policy
        changes, and AI-generated summaries, Atlas Macro provides a fast and intuitive way to analyze global 
        financial risk.
      </p>
      <section className="columns">
        <WhatIsCard 
        header="Our Mission"
        desc="Our mission is to provide a fast and intuitive way to analyze global financial risk."/>
        <WhatIsCard 
        header="Our Team"
        desc="Our team is a group of experts in the fields of economics, finance, and international business."/>
        <WhatIsCard 
        header="Why Choose Us"
        desc="We are a team of experts in the fields of economics, finance, and international business."/>
      </section>
      <h3 id="about-atlas-header">What We Do</h3>
      <ul id="about-atlas-list">
        <li>Track sovereign bond yields and macroeconomic indicators for any country</li>
        <li>Analyze crypto regulations and policy changes within the crypto and fintech industry</li>
        <li>Get AI-generated summaries of the international news and economic risks</li>
      </ul>
      <section id="team-section">
        <h3 id="what-is-atlas-header">Our Team</h3>
        <img id="team-photo" src={teamPhoto} alt="Team Photo"/>
      </section>
    </main>
  );
};

export default About;