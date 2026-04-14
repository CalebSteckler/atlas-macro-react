import "../css/ReportCard.css";
import { useState } from "react";

const ReportCard = (props) => {
    const [open, setOpen] = useState(false);

    const updateReport = (report) => {
        //setReport(report);
    }

    const showReportDetails = () => {

    }

    const deleteReport = () => {
        setOpen(false);
        props.openDeleteDialog?.(props.report);
    }

    const editReport = () => {
        setOpen(false);
        props.openEditDialog?.(props.report);
    };

    

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
                    <div className="report-card-modal" onClick={(e) => e.stopPropagation()}>
                        <button id="delete-report-button" type="button" onClick={deleteReport}>Delete Report</button>
                        <button id="edit-report-button" type="button" onClick={editReport}>Edit Report</button>
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
