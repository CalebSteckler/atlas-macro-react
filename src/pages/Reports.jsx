import React from "react";
import "../css/Reports.css";
import HeroTitle from "../components/HeroTitle";
import ReportsFilterBtn from "../components/ReportsFilterBtn";
import ReportCard from "../components/ReportCard";
import reportIcon from "../images/report-icon.png";
import ReportsBottomNav from "../components/ReportsBottomNav";
import axios from "axios";
import { useState, useEffect } from "react";


const Reports = () => {

    const [reports, setReports] = useState([]);


    //after the page has loaded
    useEffect(() => {
        const loadReports = async () => {
            const response = await axios.get('https://atlas-macro-backend.onrender.com/api/reports');
            setReports(response.data);
        };

        loadReports();

    }, []);

    return (
        <main id="reports-content">
            <HeroTitle title="Reports" />
            <ReportsFilterBtn />
            <section id="reports-list">
                {reports.map((report, idx) => (
                    <ReportCard
                        key={report.id}
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