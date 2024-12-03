import "./Map.css";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types"; // PropTypes introduces some type safety checks at the end of the file
import { MapContainer, TileLayer, Marker} from "react-leaflet"; // leaflet components
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


// these things have such silly syntax
const Map = ({ text }) => {
  const position = [27.583988015730117, 85.60144380206646];
  const handleMarkerClick = () => {
    window.location.href = "https://google.com";  // Example navigation link
  };

  return (
    <>
      <b>
        <p className="text">{text}</p>
      </b>
      <MapContainer
        center={position}
        zoom={6}
        style={{ height: "80vh", width: "60vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      <center>
        <Marker position={position} eventHandlers={{ click: handleMarkerClick }} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
      </Marker>
      </center>
      </MapContainer>
    </>
  );
};

// Validating that 'text' is a required parameter for map and should be a string type
Map.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Map;
