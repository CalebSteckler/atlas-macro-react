import "../css/Hero.css";
import heroImage from "../images/hero-image.png"
import SelectCountry from "./SelectCountry";

const Hero = () => {
    return (
        <div id="hero-content">
            <img src={heroImage} id="hero-image" />
            <SelectCountry/>
        </div>
    );
};

export default Hero;