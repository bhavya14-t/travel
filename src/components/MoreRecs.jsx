import React from 'react';
import './MoreRecs.css';
import most1 from '../assets/most1.jpg';
import most2 from '../assets/most2.jpg';
import most3 from '../assets/most3.jpg';
import most4 from "../assets/most4.jpg";

const MoreRecs = () => {
  return (
    <section className="recs-sec">
      <h2 className="recs-title">More Recommendations for You</h2>

      <div className="recs-box">
        <div className="rec-card">
          <img src={most1} alt="Tour 1" />
          <h4>Explore Lithuania</h4>
        </div>
        <div className="rec-card">
          <img src={most2} alt="Switzerland Guide " />
          <h4>Switzerland Tour</h4>
        </div>
        <div className="rec-card">
          <img src={most3} alt="Tour 3" />
          <h4>Iceland Guide</h4>
        </div>
        <div className="rec-card">
          <img src={most4} alt="Tour 3" />
          <h4>Ultimate Guide to New Zealand</h4>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default MoreRecs;
