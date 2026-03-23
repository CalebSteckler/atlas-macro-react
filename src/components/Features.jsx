import "../css/Features.css";
import FeatureItem from "./FeatureItem";
import interestLogo from "../images/interest-logo.png";
import cryptoLogo from "../images/crypto-logo.png";
import aiLogo from "../images/AI-logo.png";

const Features = () => {
    return (
        <div id="features-showcase" className="columns">
            <FeatureItem title="Interest Rates" 
            src={interestLogo} 
            desc="Track 10-year bond yields, inflation rates, and other key economic 
            indicators around the globe." />
            <FeatureItem title="Crypto Regulations" 
            src={cryptoLogo} 
            desc="Learn about each country's regulatory stance on cryptocurrencies, 
            digital assets, and fintech innovations." />
            <FeatureItem title="AI Summary"
            src={aiLogo}
            desc="AI Generated analysis offering quick summaries of the international 
            news, economic risks and financial status of any country on our platform."/>
        </div>
    );
};

export default Features;