import "../css/HowItWorks.css";
import HowStep from "./HowStep";

const HowItWorks = () => {
    return (
        <div id="how-it-works">
            <h1 id="how-it-works-header">How It Works</h1>
            <div class="columns">
                <HowStep title="Step 1: Select a Country" 
                description="Select a country from the dropdown menu to view the 
                country's economic data." />
                <HowStep title="Step 2: View the Country's Economic Data" 
                description="View the country's economic data in the table below." />
                <HowStep title="Step 3: Analyze the Country's Economic Data" 
                description="Analyze the country's economic data in the chart below." />
            </div>
        </div>
    );
};

export default HowItWorks;