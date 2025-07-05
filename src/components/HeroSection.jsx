import React from 'react';
import './HeroSection.css';
import heroImg from '../assets/hero.jpg';
import asaImg from '../assets/asa.jpg';

const HeroSection = () => {
    return (
        <section className="hero-container">
            <div className="hero-left">
                <img src={heroImg} alt="Hero" className="hero-image" />
            </div>
            <div className="hero-right">
                <h2 className="hero-heading">Norway Guide</h2>
                <div className="hero-guide-info"> <img src={asaImg} alt="Asa Steiners" className="guide-avatar"/>
                <span className="guide-text"> Guide by  Asa Steiners &nbsp;&nbsp;   Norway &nbsp;&nbsp; 
                <span > New </span></span>
                </div>
                <p className="hero-content">
                    Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.</p>

                    <p className="hero-content1">
                    This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.
                </p>
                <hr />
                <div className="hero-buttons">
                    <button className="hero-btn primary"> Preview </button>
                    <button className="hero-btn secondary"> Get Access </button>
                </div>
            </div>
        </section>


    );
};
export default HeroSection;
