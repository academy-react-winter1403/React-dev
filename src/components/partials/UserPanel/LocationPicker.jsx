import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const LocationPicker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng);
    },
  });
  return (
    <>
      {position && (
      <Marker position={position}>
        <Popup>
          موقعیت انتخاب شده:
          <br />
          Lat:{position.lat.toFixed(4)}
          <br />
          Lng:{position.lng.toFixed(4)}
        </Popup>
      </Marker>
      )};
    </>
  );
};

export default function MyComponent({ onSelect }) {
  return (
    <MapContainer
      center={[36.5533, 53.0610]}
      zoom={13}
      style={{ height: "100%", width: "100%",borderRadius:"16px"}}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationPicker onLocationSelect={onSelect} />
    </MapContainer>
  );
}
