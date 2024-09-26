import React from "react";
import { Marker } from "react-map-gl";

interface MarkerProps {
  feature: GeoJSON.Feature;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const CustomMarker: React.FC<MarkerProps> = ({
  feature,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const coordinates =
    feature.geometry.type === "Point"
      ? (feature.geometry as GeoJSON.Point).coordinates
      : [0, 0]; // Default coordinates if not a Point

  return (
    <Marker longitude={coordinates[0]} latitude={coordinates[1]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={
          feature.properties &&
          feature.properties.Title &&
          localStorage.getItem(feature.properties.Title)
            ? "#00BD9D"
            : "#D81E5B"
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <circle cx="10" cy="10" r="6" />
      </svg>
    </Marker>
  );
};
export default CustomMarker;
