import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AutoZoom = ({ festivals }) => {
  const map = useMap();

  useEffect(() => {
    if (festivals.length > 0) {
      // Get the first festival's location
      const { lat, lng } = festivals[0].location;
      map.setView([lat, lng], 10); // Centered on the location with zoom level 10
    } else {
      // If no festivals are selected, zoom out to the default view (center of India)
      map.setView([20.5937, 78.9629], 4); // Centered on India with zoom level 4
    }
  }, [festivals, map]);

  return null;
};

const MapComponent = ({ festivals }) => {
  const defaultPosition = [20.5937, 78.9629]; // Centered on India

  return (
    <MapContainer
      center={defaultPosition}
      zoom={4}
      style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <AutoZoom festivals={festivals} />

      {festivals.map((festival) => (
        <Marker
          key={festival.name}
          position={[festival.location.lat, festival.location.lng]}>
          <Popup>
            <strong>{festival.name}</strong>
            <br />
            {festival.location.city}, {festival.location.state}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
