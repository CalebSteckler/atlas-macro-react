import "../css/UseCard.css";

const UseCard = (props) => {
    return (
        <section class="one research-tile">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </section>
    );
}

export default UseCard;