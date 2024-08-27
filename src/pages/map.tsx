import Map from "react-map-gl";
import { FeaturesData } from "../components/geoJSONData.tsx";
import FeatureWrapper from "../components/FeatureWrapper.tsx";
import MapControls from "../components/mapControls.tsx";

export default function MapPage() {
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
          <MapControls />
          {features.map((feature) => (
            <FeatureWrapper key={feature.id} feature={feature} />
          ))}
        </Map>
      </div>
    </div>
  );
}
