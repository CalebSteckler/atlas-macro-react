import React from "react";
import "../css/Reports.css";
import HeroTitle from "../components/HeroTitle";
import ReportsFilterBtn from "../components/ReportsFilterBtn";
import ReportCard from "../components/ReportCard";
import ReportsBottomNav from "../components/ReportsBottomNav";
import axios from "axios";
import { useState, useEffect } from "react";
import AddReport from "../components/AddReport";


const Reports = () => {

    const [reports, setReports] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMode, setDialogMode] = useState("add"); // "add" | "edit" | "delete"
    const [activeReport, setActiveReport] = useState(null);
    const [actionMessage, setActionMessage] = useState("");

    const openAddDialog = () => {
        setDialogMode("add");
        setActiveReport(null);
        setShowDialog(true);
    };

    const openEditDialog = (report) => {
        setDialogMode("edit");
        setActiveReport(report);
        setShowDialog(true);
    };

    const openDeleteDialog = (report) => {
        setDialogMode("delete");
        setActiveReport(report);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
        setActiveReport(null);
    };

    const addReportToList = (report) => {
        setReports((reports) => [...reports, report]);
    };

    const updateReportInList = (updated) => {
        setReports((reports) =>
            reports.map((r) => (r._id === updated._id ? updated : r))
        );
    };

    const removeReportFromList = (deleted) => {
        setReports((reports) => reports.filter((r) => r._id !== deleted._id));
    };


    //after the page has loaded
    useEffect(() => {
        const loadReports = async () => {
            const localLink = "http://localhost:3001/api/reports";
            const renderLink = "https://atlas-macro-backend.onrender.com/api/reports";

            // Simple switch: set this to false to use Render
            const useLocal = false;

            const response = await axios.get(useLocal ? localLink : renderLink);
            setReports(response.data);
        };

        loadReports();

    }, []);

    return (
        <main id="reports-content">
            <HeroTitle title="Reports" />
            <ReportsFilterBtn openAddDialog={openAddDialog} />
            {showDialog ? (
                <AddReport
                    mode={dialogMode}
                    report={activeReport}
                    closeAddDialog={closeDialog}
                    addReportToList={
                        dialogMode === "add"
                            ? addReportToList
                            : dialogMode === "edit"
                                ? updateReportInList
                                : removeReportFromList
                    }
                    setActionMessage={setActionMessage}
                />
            ) : ("")}
            <section id="reports-list">
                {reports.map((report, idx) => (
                    <ReportCard
                        key={report.id ?? report._id ?? idx}
                        report={report}
                        img={`https://atlas-macro-backend.onrender.com/${report.image}`}
                        title={report.title}
                        author={report.author}
                        description={report.description}
                        openEditDialog={openEditDialog}
                        openDeleteDialog={openDeleteDialog}
                    />
                ))}
                
            </section>
            <ReportsBottomNav />
        </main>
    );
};

export default Reports;