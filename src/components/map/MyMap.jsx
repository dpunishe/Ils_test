import React from "react";
import { MapContainer, ZoomControl, TileLayer } from "react-leaflet";

import "../../styles/map.scss";
import Routing from "./routing/index";

 const MyMap = () => {
  return (
    <div className="map">
      <MapContainer
        center={[59.82934196, 30.42423701]}
        zoom={8}
        zoomControl={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <Routing />
      </MapContainer>
    </div>
  );
};

export default MyMap