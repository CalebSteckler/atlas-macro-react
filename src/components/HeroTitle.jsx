import "../css/HeroTitle.css";
import heroImage from "../images/hero-image.png";

const HeroTitle = (props) => {
    return (
        <div id="hero-title">
            <img src={heroImage} id="hero-title-image" alt={props.title} />
            <h1 id="hero-title-text">{props.title}</h1>
        </div>
    );
};

export default HeroTitle;