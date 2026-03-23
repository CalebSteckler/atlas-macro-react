import "../css/WhatCard.css";

const WhatCard = (props) => {
    return (
        <div className="what-card">
            <h1>{props.content}</h1>
        </div>
    );
};

export default WhatCard;