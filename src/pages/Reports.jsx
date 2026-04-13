import React from "react";
import "../css/Reports.css";
import HeroTitle from "../components/HeroTitle";
import ReportsFilterBtn from "../components/ReportsFilterBtn";
import ReportCard from "../components/ReportCard";
import reportIcon from "../images/report-icon.png";
import ReportsBottomNav from "../components/ReportsBottomNav";
import axios from "axios";
import { useState, useEffect } from "react";
import AddReport from "../components/AddReport";


const Reports = () => {

    const [reports, setReports] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => setShowAddDialog(true);
    const closeAddDialog = () => setShowAddDialog(false);

    const addReportToList = (report) => {
        setReports((reports) => [...reports, report]);
    };


    //after the page has loaded
    useEffect(() => {
        const loadReports = async () => {
            const localLink = "http://localhost:3001/api/reports";
            const renderLink = "https://atlas-macro-backend.onrender.com/api/reports";

            // Simple switch: set this to false to use Render
            const useLocal = true;

            const response = await axios.get(useLocal ? localLink : renderLink);
            setReports(response.data);
        };

        loadReports();

    }, []);

    return (
        <main id="reports-content">
            <HeroTitle title="Reports" />
            <ReportsFilterBtn openAddDialog={openAddDialog} />
            {showAddDialog ? (
                <AddReport
                    closeAddDialog={closeAddDialog}
                    addReportToList={addReportToList}
                />
            ) : ("")}
            <section id="reports-list">
                {reports.map((report, idx) => (
                    <ReportCard
                        key={report.id ?? report._id ?? idx}
                        img={reportIcon}
                        title={report.title}
                        author={report.author}
                        description={report.description}
                    />
                ))}
                
            </section>
            <ReportsBottomNav />
        </main>
    );
};

export default Reports;