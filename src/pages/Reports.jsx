import React from "react";
import "../css/Reports.css";
import HeroTitle from "../components/HeroTitle";
import ReportsFilterBtn from "../components/ReportsFilterBtn";
import ReportCard from "../components/ReportCard";
import reportIcon from "../images/report-icon.png";
import ReportsBottomNav from "../components/ReportsBottomNav";

const Reports = () => {
    return (
        <main id="reports-content">
            <HeroTitle title="Reports" />
            <ReportsFilterBtn />
            <section id="reports-list">
                <ReportCard 
                img={reportIcon}
                title="Report 1"
                author="John Doe"
                description="This is a description of the report."/>
                <ReportCard 
                img={reportIcon}
                title="Report 1"
                author="John Doe"
                description="This is a description of the report."/>
                <ReportCard 
                img={reportIcon}
                title="Report 1"
                author="John Doe"
                description="This is a description of the report."/>
                <ReportCard 
                img={reportIcon}
                title="Report 1"
                author="John Doe"
                description="This is a description of the report."/>
            </section>
            <ReportsBottomNav />
        </main>
    );
};

export default Reports;