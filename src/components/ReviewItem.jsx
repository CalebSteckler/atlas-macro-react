import "../css/ReviewItem.css";

const ReviewItem = (props) => {
    return (
        <section className="one">
            <img id="customer-headshot" src={props.headshot} />
            <p id="customer-review-text">{props.review}</p>
            <p id="customer-name">- {props.name}   ★★★★★</p>
        </section>
    );
};

export default ReviewItem;