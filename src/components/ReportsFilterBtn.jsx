import "../css/ReportsFilterBtn.css";
import AddReport from "./AddReport";
import { useState } from "react";

const ReportsFilterBtn = () => {
    const [showAddReport, setShowAddReport] = useState(false);

    const openAddReport = () => setShowAddReport(true);
    const closeAddReport = () => setShowAddReport(false);

    return (
        <>
            <div id="reports-nav">
                <ul id="reports-nav-list">
                    <li><button type="button" className="btn-filter-reports active-button">All Reports</button></li>
                    <li><button type="button" className="btn-filter-reports">Economic</button></li>
                    <li><button type="button" className="btn-filter-reports">Crypto</button></li>
                    <li><button type="button" className="btn-filter-reports">Markets</button></li>
                    <li>
                        <button
                            type="button"
                            id="add-report-button"
                            className="btn-filter-reports"
                            onClick={openAddReport}
                        >
                            Add Report
                        </button>
                    </li>
                </ul>
            </div>
            {showAddReport && <AddReport onClose={closeAddReport} />}
        </>
    );
};

export default ReportsFilterBtn;