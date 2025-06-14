import React, { useState } from "react";  
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";  
import "leaflet/dist/leaflet.css";  
import { Icon } from "leaflet";  

 
const markerIcon = new Icon({  
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",  
  iconSize: [25, 41],  
  iconAnchor: [12, 41],  
  popupAnchor: [1, -34],  
  shadowSize: [41, 41],  
});  

const Maps = ({ classNameStyles }) => {  
  const [position, setPosition] = useState([35.6892, 51.389]); 

 
  const mapClick = (event) => {  
    const { lat, lng } = event.latlng; 
    setPosition([lat, lng]);
    console.log('Clicked position:', { lat, lng }); 
  };  

  return (  
    <MapContainer  
      closePopupOnClick={mapClick}
      center={position}  
      zoom={10}  
      className={`${classNameStyles} rounded-[50%] drop-shadow-[0_1px_1px_#00000040]`}  
    >  
      <TileLayer  
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
      />  
      <Marker position={position} icon={markerIcon} autoPanOnFocus={mapClick}>  
        <Popup>نقطه انتخاب‌شده</Popup>  
      </Marker>  
    </MapContainer>  
  );  
};  

export default Maps;  