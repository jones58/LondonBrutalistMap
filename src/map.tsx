"use client";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapPage({ features }: any) {
  return (
    <div className="w-full">
      <ReactMapGL
      // Mapbox configuration...
      >
        {features.map((feature: any) => (
          <Marker
            key={feature.id}
            longitude={feature.geometry.coordinates[0]}
            latitude={feature.geometry.coordinates[1]}
          >
            {/* Marker content */}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}
