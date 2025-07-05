import React, { useRef } from 'react';
import ActivityCard from './ActivityCard';
import './ActivitySlider.css';
import { FaChevronLeft, FaChevronRight, FaHiking, FaBinoculars, FaRunning } from 'react-icons/fa';

import activity1 from '../assets/activity1.jpg';
import activity2 from '../assets/activity2.jpg';
import activity3 from '../assets/activity3.jpg';
import activity4 from '../assets/activity4.jpg';
import activity5 from '../assets/activity5.jpg';

const ActivitySlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const activities = [
    {
      image: activity1,
      title: 'Sightseeing',
      description: 'One of my favourite spots',
      Icon: FaBinoculars,
    },
    {
      image: activity2,
      title: 'Sightseeing',
      description: 'Swing with amazing views',
      Icon: FaBinoculars,
    },
    {
      image: activity3,
      title: 'Hike',
      description: 'Beautiful view point',
      Icon: FaHiking,
    },
    {
      image: activity4,
      title: 'Activity',
      description: 'Kayak is a must',
      Icon: FaRunning,
    },
    {
      image: activity5,
      title: 'Sightseeing',
      description: 'Walk around a beautiful fishing town',
      Icon: FaBinoculars,
    },
  ];

  return (
    <section className="activities-section">

      <div className="activities-flex-container">
        <div className="activities-left-text">
      
          <h2 className="activities-main-heading">161 things to do</h2>
          <p className="activities-subheading">Get a curated list of all the best things <br /> to do with exact location, detailed info <br /> and inspiring content</p>

          <p className="preview-link">Preview</p>
        </div>
      

      <div className="slider-wrapper">
        <button className="scroll-arrow left" onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>

        <div className="activities-slider" ref={scrollRef}>
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              image={activity.image}
              title={activity.title}
              description={activity.description}
              Icon={activity.Icon}
            />
    
          ))}
        </div>

        <button className="scroll-arrow right" onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>
      </div>
      </div>
    </section>
  );
};

export default ActivitySlider;