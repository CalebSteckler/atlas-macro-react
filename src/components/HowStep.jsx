import "../css/HowStep.css";

const HowStep = (props) => {
    return (
        <section class="one">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </section>
    );
};

export default HowStep;