import React from 'react';
import './Features.css';
import { FaMapMarkerAlt, FaMap, FaTelegramPlane, FaDownload } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi'; // for zigzag itinerary icon

const Features = () => {
  return (
    <>
      <hr className="features-divider" />
      <section className="features-container">
        <div className="feature-card">
          <FaMapMarkerAlt className="feature-icon" />
          <span>161 things to do</span>
        </div>
        <div className="feature-card">
          <FaMap className="feature-icon" />
          <span>Interactive Map</span>
        </div>
        <div className="feature-card">
          <GiPathDistance className="feature-icon" />
          <span>1 Itinerary</span>
        </div>
        <div className="feature-card">
          <FaTelegramPlane className="feature-icon" />
          <span>Priority in Chat</span>
        </div>
        <div className="feature-card">
          <FaDownload className="feature-icon" />
          <span>Offline Usage in App</span>
        </div>
        <div className="feature-card">
          <GiPathDistance className="feature-icon" />
          <span>Itinerary Builder Access</span>
        </div>
      </section>
      <hr className="features-divider" />
    </>
  );
};

export default Features;