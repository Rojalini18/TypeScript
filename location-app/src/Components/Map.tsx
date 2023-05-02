import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Context } from "../Context/Context";
import {GeoLocData} from "../LocationData/GeoLocData";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export const Map = () => {
  const { location } = useContext(Context);
  const locationData = GeoLocData();

  if (!locationData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <MapContainer center={[locationData.latt, locationData.long]} zoom={6}>
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=p6esQ9yP81OuN2wIqfAo" />
        {!location?.[0] && (
          <Marker position={[locationData.latt, locationData.long]}>
            <Popup>Your current Location</Popup>
          </Marker>
        )}
        {location.map((locationData, index) => {
          return (
            <Marker
              key={index}
              position={[locationData.latitude, locationData.longitude]}
            >
              <Popup>You are at{locationData.location_name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
