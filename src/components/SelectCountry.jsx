import "../css/SelectCountry.css";
import React from "react";
import { useState } from "react";
import { COUNTRIES } from "../js/countries";
import { useNavigate} from "react-router-dom";


const SelectCountry = () => {

    const [showInput, setShowInput] = useState(false);
    const [query, setQuery] = useState("");

    const selectCountryClick = () => {
        setShowInput(true);
    };

    const navigate = useNavigate();

    

    const matches = COUNTRIES
        .filter((country) =>
            country.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8);

    return (
        <div id="select-country">
            <button
                id="btn-select-country"
                onClick={selectCountryClick}
                className={showInput ? "hidden" : ""}
            >
                Select Country
            </button>

            <input
                className={showInput ? "" : "hidden"}
                type="text"
                id="search-country"
                placeholder="Search for a country..."
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div
                id="suggestions"
                className={`suggestions ${showInput && query ? "open" : ""}`}
                role="listbox"
            >
                {showInput &&
                    query &&
                    matches.map((country) => (
                        <div
                            key={country.iso2}
                            className="suggestion"
                            onClick={() => {
                                setQuery(country.name);
                                navigate(`/dashboard/${country.name}`);
                            }}>
                            <img
                                src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                                alt={`${country.name} flag`}
                                loading="lazy"
                            />
                            <span className="name">{country.name}</span>
                        </div>
                    ))}
            </div>

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