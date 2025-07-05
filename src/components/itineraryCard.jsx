import React from 'react';
import './ItinerarySection.css';

const ItineraryCard = ({ icon: Icon, title, description, image, isBlank }) => {
  return (
    <div className={`itinerary-card ${isBlank ? 'blank' : ''}`}>
      {image && <img src={image} alt={title} className="itinerary-image" />}
      {Icon && <Icon className="itinerary-icon" />}
      {!isBlank && (
        <>
          <h3 className="itinerary-title">{title}</h3>
          <p className="itinerary-desc">{description}</p>
        </>
      )}
      {isBlank && <p className="preview-only">Preview</p>}
    </div>
  );
};

export default ItineraryCard;
