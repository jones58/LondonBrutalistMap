import React, { useState, useCallback } from "react";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { FeaturesData } from "../components/geoJSONData.tsx";

export default function MapPage() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const features = FeaturesData.features;

  const handleClick = useCallback((feature) => {
    setSelectedMarker(feature.properties);
    console.log(`clicked: ${feature.properties.Title}`);
  }, []);

  const handleHover = useCallback((feature) => {
    setHoveredMarker(feature);
    alert("hovered");
  }, []);

  const handleMouseEnter = () => {
    alert("hovered");
  };

  return (
    <div>
      <div className="w-full">
        <Map
          mapboxAccessToken="pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzAyeDVlMXlxZzJqbzVvcnBjbDZ3OCJ9.cuGt6LfugBHuqw9rJKQ2DA"
          initialViewState={{
            longitude: -0.1276,
            latitude: 51.5074,
            zoom: 10,
          }}
          style={{ width: "100%", height: "70vh" }}
          mapStyle="mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde"
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          {features.map((feature) => (
            <Marker
              key={feature.id}
              longitude={feature.geometry.coordinates[0]}
              latitude={feature.geometry.coordinates[1]}
              onClick={(feature) => handleClick(feature)}
              onHover={(feature) => handleHover(feature)}
              onMouseEnter={handleMouseEnter}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#D81E5B"
              >
                <circle cx="10" cy="10" r="6" />
              </svg>
            </Marker>
          ))}
          {selectedMarker && <div>HELLOOO</div>}
          {hoveredMarker && <div>HELLOOO2</div>}
        </Map>
      </div>
    </div>
  );
}
