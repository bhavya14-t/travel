import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import MapSection from "../components/MapSection";
import ActivitySlider from "../components/ActivitySlider";
import ItinerarySection from "../components/itinerarySection";
import NorwayGuide from "../components/NorwayGuide";
import MoreRecs from "../components/MoreRecs";
import FaqSection from "../components/FaqSection";

const HomePage = () => {
    return(
        <>
            <Header />
            <HeroSection />
            <Features />
            <MapSection />
            <ActivitySlider />
            <ItinerarySection />
            <NorwayGuide />
            <MoreRecs />
            <FaqSection />
        </>
    );
};

export default HomePage;