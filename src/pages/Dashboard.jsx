import React from "react";
import "../css/Dashboard.css";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const { iso2 } = useParams();

return (
    <div id="dashboard-content">
        <h1>Dashboard</h1>
        <p>Country: {iso2}</p>
        

        <section id="dashboard-section">
            <h2>Dashboard Section</h2>
            <p>This is the dashboard section for the country: {iso2}</p>
        </section>

        <section id="dashboard-section-2">
            <h2>Dashboard Section 2</h2>
            <p>This is the dashboard section 2 for the country: {iso2}</p>
        </section>
    </div>
);
}

export default Dashboard;