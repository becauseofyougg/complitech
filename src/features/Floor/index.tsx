

import { FC } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { GeoJsonObject } from "geojson";

import floor from '../../data/floor.json';

const Floor: FC = () => {
  const location: LatLngTuple = [53.91687819154794, 27.63435423374176];

  return (
    <MapContainer
      center={location}
      zoom={20}
      style={{ width: "50%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={floor as GeoJsonObject} />
    </MapContainer>
  );
};

export default Floor;
