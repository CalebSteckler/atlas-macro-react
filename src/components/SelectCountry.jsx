import "../css/SelectCountry.css";

const SelectCountry = () => {
    return (
        <div id="select-country">
            <button id="btn-select-country">Select Country</button>
            <input className="hidden" type="text" id="search-country" placeholder="Search for a country..." autoComplete="off" />
            <div id="suggestions" className="suggestions" role="listbox"></div>
            <div id="modalOverlay" className="modal-overlay">
                <div className="modal">
                    <button id="closeModal" className="close-button">&times;</button>
                    <div id="country-content" className="country-content"></div>
                </div>
            </div>
        </div>
    );
};

export default SelectCountry;