import "../css/Item.css";
import itemPic from "../images/item.jpg";

const Item = (props) => {
    return (
        <section className="item">
            <h1>{props.title}</h1>
            <img src={itemPic} />
            <p>{props.price}</p>
        </section>
    );
};

export default Item;