import "../css/AddReport.css";
import { useState } from "react";

const AddReport = ({ onClose }) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        e.preventDefault();
        setPrevSrc(URL.createObjectURL(e.target.files[0]))
    };

    const addReportToServer = (e) => {
        e.preventDefault();
        console.log("Report added to server");
        
        setResult("Sending to server...");
        const formData = new FormData(e.currentTarget);
        console.log(...formData);

        setResult("Report sent to server");
        onClose();
    };

    return (
        <div className="add-report-backdrop" onClick={onClose}>
            <div className="add-report-modal" onClick={(e) => e.stopPropagation()}>
                <button className="add-report-close" type="button" onClick={onClose}>
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
                    <input type="text" name="description" id="description" required></input>
                </p>

                <p>
                    <label>Report Date:</label>
                    <input type="date" name="date" id="date" required></input>
                </p>

                <section>
                    <p id="img-prev-section">
                        {prevSrc && <img src={prevSrc} alt="Report Image" />}
                    </p>
                    <p>
                        <label>Report Image:</label>
                        <input type="file" name="image" id="image" accept="image/*" ></input>
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
                    <span>{result}</span>
                </p>
                </form>
            </div>
        </div>
    );
};

export default AddReport;