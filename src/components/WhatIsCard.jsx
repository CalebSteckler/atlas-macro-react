import "../css/WhatIsCard.css";

const WhatIsCard = (props) => {
    return (
        <div className="what-card one">
            <h1>{props.header}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default WhatIsCard;