import "../css/Reviews.css";
import ReviewItem from "./ReviewItem";
import headshot1 from "../images/customer-headshot.png";

const Reviews = () => {
    return (
        <div id="customer-review" className="columns">
            <ReviewItem name="David M." headshot={headshot1} review="Atlas Macro has 
            been a game changer for my international business research. The data is 
            easy to understand and the AI summary is a great way to get a quick overview
             of the country's economic conditions. I highly recommend it to anyone 
             looking to stay up to date on international business."/>
        </div>
    );
};

export default Reviews;