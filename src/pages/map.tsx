import { useState } from "react";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { FeaturesData } from "../components/geoJSONData.tsx";

// Custom marker component with hover state because react map gl doesn't support it //
const CustomMarker = ({
  feature,
  hoveredFeatureId,
  setHoveredFeatureId,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Marker
      longitude={feature.geometry.coordinates[0]}
      latitude={feature.geometry.coordinates[1]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={
          localStorage.getItem(feature.id) === "true"
            ? "#00BD9D"
            : "#D81E5B"
        }
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredFeatureId(feature.id);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredFeatureId(null);
        }}
        className="cursor-pointer"
      >
        <circle cx="10" cy="10" r="6" className="z-0" />
      </svg>
      {isHovered && (
        <div
          className="bg-white p-2 text-black z-1 absolute left-2 top-2 rounded-lg shadow-lg shadow-black"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {feature.properties.Title}
        </div>
      )}
    </Marker>
  );
};

export default function MapPage() {
  const [hoveredFeatureId, setHoveredFeatureId] = useState(null);
  const features = FeaturesData.features;
  return (
    <div>
      <div className="w-full h-[80vh]">
        <Map
          mapboxAccessToken="pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzAyeDVlMXlxZzJqbzVvcnBjbDZ3OCJ9.cuGt6LfugBHuqw9rJKQ2DA"
          initialViewState={{
            longitude: -0.1276,
            latitude: 51.5074,
            zoom: 10,
          }}
          style={{ width: "100%", height: "75vh" }}
          mapStyle="mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde"
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          {features.map((feature) => (
            <CustomMarker
              key={feature.id}
              feature={feature}
              hoveredFeatureId={hoveredFeatureId}
              setHoveredFeatureId={setHoveredFeatureId}
            />
          ))}
        </Map>
      </div>
    </div>
  );
}
