import "../css/WhatIsAtlas.css";
import WhatCard from "./WhatCard";

const WhatIsAtlas = () => {
    return (
        <div id="about-atlas" class="columns">
            <section id="about-atlas-text" class="two">
                <h1 id="about-atlas-header">What is Atlas Macro?</h1>
                <p>Atlas Macro is an interactive global intelligence platform designed to help users understand international economic conditions at a country level. 
                    By combining real-time data of interest rates, crypto policy changes, and AI-generated summaries, Atlas Macro provides a fast and intuitive way to
                     analyze global financial risk.</p>
                <ul id="about-atlas-list">
                    <li>Track sovereign bond yields and macroeconomic indicators for any country</li>
                    <li>Analyze crypto regulations and policy changes</li>
                    <li>Get AI-generated summaries of the international news</li>
                </ul>
            </section>
            <section class="one">
                <WhatCard content="200+ Countries Analyzed" />
                <WhatCard content="1,500+ Economic Indicators Tracked" />
                <WhatCard content="100,000+ AI-Generated Summaries" />
            </section>
        </div>
    );
};

export default WhatIsAtlas;