import "../css/ReportCard.css";
import reportIcon from "../images/report-icon.png";

const ReportCard = (props) => {
    return (
        <div className="report-card">
            <img className="report-icon" src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <p>{props.description}</p>
            <button>Read Report</button>
        </div>
    );
}

export default ReportCard;