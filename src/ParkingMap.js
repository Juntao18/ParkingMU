import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Parking coordinate in cloud Map
const parkingLots = [
  { id: 1, name: "Car Park 1", position: [53.3824948, -6.6033351], link: "/a" },
  { id: 2, name: "Car Park 2", position: [53.3838727, -6.6032683], link: "/b" },
  { id: 3, name: "Car Park 3", position: [53.384695, -6.6043691], link: "/c" },
  { id: 4, name: "Car Park 4", position: [53.3855265, -6.6033347], link: "/d" },
  { id: 5, name: "Car Park 5", position: [53.3853493, -6.600969], link: "/e" },
];

// Leaflet: Custom Marker Icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Define map bounds
const maynoothBounds = [
  [53.3705267, -6.6138510], // Southwest corner
  [53.3985327, -6.5820341], // Northeast corner
];

function ParkingMap() {
  return (
    <div style={{ height: "100vh", width: "100vw",margin: 0 }}>
      <MapContainer
        center={[53.382404, -6.599121]}
        zoom={17}
        style={{ height: "100%", width: "100%" }}
        maxBounds={maynoothBounds} // Restrict map to bounds
        maxBoundsViscosity={1.0} // Prevent users from panning outside bounds
      >
        {/* Use OpenStreetMap as TileLayer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Show parking lot locations */}
        {parkingLots.map((lot) => (
          <Marker key={lot.id} position={lot.position}>
            <Popup>
              <b>{lot.name}</b>
              <br></br>
              <a href={lot.link} target="_blank" rel="noopener noreferrer">
                Booking
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ParkingMap;
