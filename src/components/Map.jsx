import React from 'react';
import "../css/Map.css";

const Map = () => {
    return (
        <div id="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6518.604453828866!2d-80.85251762473739!3d35.22384587273835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a1fbc0346863%3A0x5413374a390f60e2!2sBank%20of%20America%20Tower!5e0!3m2!1sen!2sus!4v1774361892419!5m2!1sen!2sus" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="map-iframe"></iframe>
        </div>
    );
};

export default Map;