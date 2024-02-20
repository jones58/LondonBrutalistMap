import Map, { Marker } from "react-map-gl";
import { FeaturesData } from "../components/geoJSONData.tsx";

export default function MapPage() {
  const features = FeaturesData.features;
  return (
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
      />
      {features.map((feature: any) => (
        <Marker
          key={feature.id}
          longitude={feature.geometry.coordinates[0]}
          latitude={feature.geometry.coordinates[1]}
        ></Marker>
      ))}
    </div>
  );
}
