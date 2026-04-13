import "../css/ReportsFilterBtn.css";

const ReportsFilterBtn = ({ openAddDialog }) => {
    return (
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
                        onClick={openAddDialog}
                    >
                        Add Report
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ReportsFilterBtn;