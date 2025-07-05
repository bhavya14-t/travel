import React from "react";
import './MapSection.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const sampleLocations = [
    {
        name: "Norway",
        lat: 60.472,
        lng: 8.4689,
        description: "Explore all of Norway from here",
    },
    {
        name: "Bergen",
        lat: 60.39,
        lng: 5.32,
        description: "Colorful houses and fjords await in Bergen.",
    },
    {
        name: "Oslo",
        lat: 59.91,
        lng: 10.75,
        description: "The vibrant capital of Norway.",
    },
];

const MapSection = () => {
    return (
        <>
            <section className="map-section">
                <h2 className="map-title"> Interactive Map </h2>
                <p className="map-subtitle">Get an Interactive, playful and visually appealing map that helps you navigate the noise.</p>

                <div className="map-container"> <MapContainer 
                center={[60.472, 8.4689]}
                zoom={5} scrollWheelZoom={true} style={{ height: '400px', width:'100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
                
                {sampleLocations.map((place, index) => (
                    <Marker key ={index} 
                    position={[place.lat, place.lng]}>
                        <Popup>
                            <strong>{place.name}
                            </strong><br />
                            {place.description}
                        </Popup>
                    </Marker>
                ))}
                </MapContainer>
                </div>
            </section>
        </>
    );
};

export default MapSection;
