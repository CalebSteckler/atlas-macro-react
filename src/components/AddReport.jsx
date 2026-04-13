import "../css/AddReport.css";
import { useState } from "react";

const AddReport = ({ closeAddDialog, addReportToList }) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addReportToServer = async(e) => {
        e.preventDefault();
        
        setResult("Sending...");

        // Same method as professor example: FormData(e.target)
        const formData = new FormData(e.target);
        console.log(...formData);

        const postURLLocal = "http://localhost:3001/api/reports";
        const postURLRender = "https://atlas-macro-backend.onrender.com/api/reports";

        // Simple switch: change this one line
        const useLocal = true;

        const response = await fetch(useLocal ? postURLLocal : postURLRender, {
            method: "POST",
            body: formData,
        });

        // Match professor pattern (== 200, then close + add JSON result)
        if (response.status == 200) {
            setResult("Report Added");
            closeAddDialog();
            addReportToList(await response.json());
        } else {
            setResult("Error adding report");
        }
    };

    return (
        <div className="add-report-backdrop" onClick={closeAddDialog}>
            <div className="add-report-modal" onClick={(e) => e.stopPropagation()}>
                <button className="add-report-close" type="button" onClick={closeAddDialog}>
                    &times;
                </button>
                <form onSubmit={addReportToServer}>
                <h3>Create a new report</h3>
                <p>
                    <label>Report Title:</label>
                    <input type="text" name="title" id="title" required />
                </p>

                <p>
                    <label>Report Author:</label>
                    <input type="text" name="author" id="author" required />
                </p>

                <p>
                    <label>Report Description:</label>
                    <textarea name="description" id="description" required></textarea>
                </p>

                <p>
                    <label>Report Date:</label>
                    <input type="date" name="date" id="date" required></input>
                </p>

                <section>
                    <p id="img-prev-section">
                        {prevSrc=="" ? ("") : (<img id="img-prev" src={prevSrc} alt="" />)}
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
                    <select name="category" required>
                        <option value="Economic">Economic</option>
                        <option value="Crypto">Crypto</option>
                        <option value="Markets">Markets</option>
                    </select>
                </p>


                <p>
                    <button type="submit">Submit</button>
                </p>
                <p>{result}</p>
                </form>
            </div>
        </div>
    );
};

export default AddReport;