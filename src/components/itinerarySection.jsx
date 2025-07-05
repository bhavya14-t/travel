import React from 'react';
import ItineraryCard from './itineraryCard';
import './ItinerarySection.css';
import { FaRoute } from 'react-icons/fa';
// import realMapImg from '../assets/realmap.jpg';

const ItinerarySection = () => {
  return (
    <section className="itinerary-section">
    <div className="itinerary-row">
      <div className="itinerary-header">
        
          <h2 className="itinerary-heading">1 Itinerary</h2>
          <p className="itinerary-subheading">Get expertly curated itineraries that <br /> help you organise all the 'things to do' in <br /> an ideal time order</p>
          <p className="itinerary-preview">Preview</p>
        </div>
      

      <div className="itinerary-cards">
        <ItineraryCard
          icon={FaRoute}
          title="Itinerary Builder"
          description="Create your own itinerary"
        />
        <ItineraryCard
        //   image={realMapImg}
          title="Lofoten Road Trip"
          description="View the sample path"
        />
        <ItineraryCard isBlank />
      </div>
      </div>
      
    </section>
  );
};

export default ItinerarySection;