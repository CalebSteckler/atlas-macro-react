import "../css/ReportsBottomNav.css";

const ReportsBottomNav = () => {
    return (
        <div id="bottom-nav-container">
            <div id="bottom-nav-header">
                <h2>Browse More Reports</h2>
            </div>
            <div id="bottom-nav">
                <button className="bottom-nav-button active-button">1</button>
                <button className="bottom-nav-button">2</button>
                <button className="bottom-nav-button">3</button>
                <button className="bottom-nav-button">4</button>
                <button className="bottom-nav-button">5</button>
                <button className="bottom-nav-button">...</button>
                
            </div>
        </div>
    );
};

export default ReportsBottomNav;