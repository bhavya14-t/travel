import React from 'react';
import './NorwayGuide.css';
import heroImg from "../assets/hero.jpg";
import { FaGlobe, FaInstagram, FaMusic } from 'react-icons/fa';

const NorwayGuide = () => {
  return (
    <section className="norway-guide-section">
      <hr />
      <div className="norway-container">
        <div className="guide-card">
          <img src={heroImg} alt="Norway Guide" className="guide-image" />
          <p className="guide-subtext">161 things to do | 1 itinerary | 0 travel tips</p>
          <h3 className="guide-title">Norway Guide</h3>
          <p className="guide-country">Norway</p>
        </div>
         
         <div className="guide-right-text">
            <h2 className="guide-right-heading">
                Guide by Asa Steiners
            </h2>
            <p className="guide-right-subheading">
            Joined in April 2022</p>

            <div className="guide-Icons">
                <FaGlobe 
                className="guide-Icon"/>
                
                <FaInstagram
                className="guide-Icon" />
                
                <FaMusic
                className="guide-Icon" />
            </div>
            
            <p className="content"> Ása Steinars is an adventure photographer and videographer from Iceland. Growing up in the north, surrounded by extreme landscapes and forever changing weather has given her a tight bond to nature and its forces. This you can clearly see in her photography. She works as a full time content creator, helping people to travel Iceland like she does. She has a total following of almost 2 million across her social media platforms.</p>

            <div className="guide-buttons">
                <button className="guide-btn">
                    Message
                </button>
                <button className="guide-btn">
                    Storefront
                </button>
            </div>
         </div>
      </div>
      <hr />
    </section>
  );
};

export default NorwayGuide;