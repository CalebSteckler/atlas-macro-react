import "../css/AddReport.css";
import { useState } from "react";

const AddReport = ({ mode = "add", report, closeAddDialog, addReportToList, setActionMessage }) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
    const [errors, setErrors] = useState({});

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const validate = (formData) => {
        const next = {};

        const title = (formData.get("title") ?? "").toString().trim();
        const author = (formData.get("author") ?? "").toString().trim();
        const description = (formData.get("description") ?? "").toString().trim();
        const date = (formData.get("date") ?? "").toString().trim();
        const category = (formData.get("category") ?? "").toString().trim();

        if (title.length < 3) next.title = "Title must be at least 3 characters.";
        if (author.length < 3) next.author = "Author must be at least 3 characters.";
        if (description.length < 10) next.description = "Description must be at least 10 characters.";
        if (!date) next.date = "Date is required.";
        if (!["Economic", "Crypto", "Markets"].includes(category)) next.category = "Pick a valid category.";

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const addReportToServer = async (e) => {
        e.preventDefault();
        
        setResult("Sending...");

        // Same method as professor example: FormData(e.target)
        const formData = new FormData(e.target);
        console.log(...formData);

        const baseLocal = "http://localhost:3001/api/reports";
        const baseRender = "https://atlas-macro-backend.onrender.com/api/reports";

        // Simple switch: change this one line
        const useLocal = false;

        const baseUrl = useLocal ? baseLocal : baseRender;
        const url =
            mode === "edit"
                ? `${baseUrl}/${report?._id}`
                : mode === "delete"
                    ? `${baseUrl}/${report?._id}`
                    : baseUrl;
        const method = mode === "edit" ? "PUT" : mode === "delete" ? "DELETE" : "POST";

        if (mode !== "delete" && !validate(formData)) {
            setResult("Please fix the errors above.");
            return;
        }

        const response = await fetch(url, {
            method,
            body: mode === "delete" ? undefined : formData,
        });

        // Match professor pattern (== 200, then close + add JSON result)
        if (response.status == 200) {
            setResult(mode === "edit" ? "Report Updated" : mode === "delete" ? "Report Deleted" : "Report Added");
            closeAddDialog();
            const payload = await response.json();
            addReportToList(payload);
            if (setActionMessage) {
                setActionMessage(
                    mode === "edit"
                        ? "Report updated successfully."
                        : mode === "delete"
                            ? "Report deleted successfully."
                            : "Report added successfully."
                );
            }
        } else {
            setResult(
                mode === "edit"
                    ? "Error updating report"
                    : mode === "delete"
                        ? "Error deleting report"
                        : "Error adding report"
            );
        }
    };

    return (
        <div className="add-report-backdrop" onClick={closeAddDialog}>
            <div className="add-report-modal" onClick={(e) => e.stopPropagation()}>
                <button className="add-report-close" type="button" onClick={closeAddDialog}>
                    &times;
                </button>
                <form onSubmit={addReportToServer}>
                <h3>
                    {mode === "edit" ? "Edit report" : mode === "delete" ? "Delete report" : "Create a new report"}
                </h3>

                {mode === "delete" ? (
                    <>
                        <p>Are you sure you want to delete this report?</p>
                        <p><strong>{report?.title}</strong></p>
                        <p>
                            <button type="submit">Delete</button>
                        </p>
                        <p>{result}</p>
                    </>
                ) : (
                    <>
                        <p>
                            <label>Report Title:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                required
                                minLength={3}
                                defaultValue={report?.title ?? ""}
                            />
                            {errors.title ? <span className="field-error">{errors.title}</span> : ""}
                        </p>

                        <p>
                            <label>Report Author:</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                required
                                minLength={3}
                                defaultValue={report?.author ?? ""}
                            />
                            {errors.author ? <span className="field-error">{errors.author}</span> : ""}
                        </p>

                        <p>
                            <label>Report Description:</label>
                            <textarea
                                name="description"
                                id="description"
                                required
                                minLength={10}
                                defaultValue={report?.description ?? ""}
                            ></textarea>
                            {errors.description ? <span className="field-error">{errors.description}</span> : ""}
                        </p>

                        <p>
                            <label>Report Date:</label>
                            <input type="date" name="date" id="date" required defaultValue={report?.date ?? ""}></input>
                            {errors.date ? <span className="field-error">{errors.date}</span> : ""}
                        </p>

                        <section>
                            <p id="img-prev-section">
                                {prevSrc == "" ? ("") : (<img id="img-prev" src={prevSrc} alt="" />)}
                            </p>
                            <p>
                                <label>Report Image:</label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    accept="image/*"
                                    onChange={uploadImage}
                                ></input>
                            </p>
                        </section>

                        <p>
                            <label>Report Category:</label>
                            <select name="category" required defaultValue={report?.category ?? "Economic"}>
                                <option value="Economic">Economic</option>
                                <option value="Crypto">Crypto</option>
                                <option value="Markets">Markets</option>
                            </select>
                            {errors.category ? <span className="field-error">{errors.category}</span> : ""}
                        </p>

                        <p>
                            <button type="submit">{mode === "edit" ? "Save" : "Submit"}</button>
                        </p>
                        <p>{result}</p>
                    </>
                )}
                </form>
            </div>
        </div>
    );
};

export default AddReport;