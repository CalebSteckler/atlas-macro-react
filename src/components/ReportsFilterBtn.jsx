import "../css/ReportsFilterBtn.css";
import AddReport from "./AddReport";
import { useState } from "react";

const ReportsFilterBtn = (props) => {
    const [showAddReport, setShowAddReport] = useState(false);

    const openAddReport = () => {
        setShowAddReport(true);
    };

    return (
        <div id="reports-nav">
            <ul id="reports-nav-list">
                <li><button className="btn-filter-reports active-button">All Reports</button></li>
                <li><button className="btn-filter-reports">Economic</button></li>
                <li><button className="btn-filter-reports">Crypto</button></li>
                <li><button className="btn-filter-reports">Markets</button></li>
                <li><button className="btn-filter-reports" onClick={openAddReport}>Add Report</button></li>
            </ul>
        </div>
    );
};

export default ReportsFilterBtn;