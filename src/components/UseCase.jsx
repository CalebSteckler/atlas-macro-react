import "../css/UseCase.css";
import UseCard from "./UseCard";

const UseCase = () => {
    return (
        <div id="research" class="columns">
            <UseCard title="Academic Research" desc="Gather data for the economics, 
            finance, and international business fields." />
            <UseCard title="Investment Research" desc="Assess markets and socerign bond
             yields, inflation data, and crypto regulations." />
            <UseCard title="International Business" desc="Understand international
             economic conditions, affecting business in foreign markets." />
        </div>
    );
};

export default UseCase;