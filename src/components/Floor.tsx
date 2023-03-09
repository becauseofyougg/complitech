import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// import floor from './../data/floor.geojson';

const icon = new L.Icon({
  iconUrl: "./marker.png",
  iconSize: new L.Point(25, 41),
  iconAnchor: [13, 41],
});

export const Floor = () => {
  const location: LatLngExpression = [47.2154556, -1.5644531];
  // const location: LatLngExpression = [53.91687819154794, 27.63435423374176]
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <h1>Company</h1>
      <button onClick={() => setShowMap(!showMap)}>
        {showMap ? "Hide" : "Show"} Map
      </button>
      {showMap && (
        <MapContainer
          center={location}
          zoom={10}
          style={{ width: "100%", height: 500 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={location} icon={icon} />
        </MapContainer>
              //   <MapContainer
              //   center={location}
              //   zoom={10}
              //   style={{ width: "100%", height: 500 }}
              // >
              //   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              //   <Marker position={location} icon={icon} />
                //  <GeoJSON data={floor} /> 
              // </MapContainer>
      )}
    </>
  );
};

export default Floor;
