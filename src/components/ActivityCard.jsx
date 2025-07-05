import React from "react";
import './ActivitySlider.css';
import { Icon } from "leaflet";

const ActivityCard =({image, title, description,Icon,  }) => {
    

  return(
    <div className="activity-card">
        <img src={image} alt={title}
        className="activity-image" />
        <div className="activity-info">
        
            <h4 className="activity-title">
                <Icon className="activity-icon" />{title}
            </h4>
            <p className="activity-description"> {description}</p>
        </div>
    </div>
  );
};

export default ActivityCard;