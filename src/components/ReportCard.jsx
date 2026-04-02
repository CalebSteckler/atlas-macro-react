import "../css/ReportCard.css";
import { useState } from "react";

const ReportCard = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="report-card" onClick={() => setOpen(true)}>
                <img className="report-icon" src={props.img}/>
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <p>{props.description}</p>
                <button type="button">Read Report</button>
            </div>

            {open && (
                <div
                    className="report-card-modal-backdrop"
                    onClick={() => setOpen(false)}
                >
                    <div className="report-card-modal">
                        <h2>{props.title}</h2>
                        <p>{props.author}</p>
                        <p>{props.description}</p>
                        <button type="button" onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReportCard;
