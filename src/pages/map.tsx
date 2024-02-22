import Map, { Marker } from "react-map-gl";
import { FeaturesData } from "../components/geoJSONData.tsx";

export default function MapPage() {
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
          {FeaturesData.features.map((feature: any) => (
            <Marker
              key={feature.id}
              longitude={feature.geometry.coordinates[0]}
              latitude={feature.geometry.coordinates[1]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="red"
              >
                <circle cx="10" cy="10" r="6" />
              </svg>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
