import "../css/FeatureItem.css";

const FeatureItem = (props) => {
    return (
        <section className="one feature-card">
            <div className="feature-header">
                <img className="feature-icon" src={props.src}/>
                <h2>{props.title}</h2>
            </div>
            <p>{props.desc}</p>
        </section>
    );
};

export default FeatureItem;