import "../css/ReportsFilterBtn.css";


const ReportsFilterBtn = (props) => {
    return (
        <div id="reports-nav">
            <ul id="reports-nav-list">
                <li><button className="btn-filter-reports active-button">All Reports</button></li>
                <li><button className="btn-filter-reports">Economic</button></li>
                <li><button className="btn-filter-reports">Crypto</button></li>
                <li><button className="btn-filter-reports">Markets</button></li>
            </ul>
        </div>
    );
};

export default ReportsFilterBtn;