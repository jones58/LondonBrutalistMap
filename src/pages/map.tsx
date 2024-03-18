import { useState } from "react";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { FeaturesData } from "../components/geoJSONData.tsx";
import CloseButton from "../components/closeButton.tsx";
import VisitedCheckbox from "../components/visitedCheckbox.tsx";
import UnvisitedCheckbox from "../components/unvisitedCheckbox.tsx";

// Custom marker component with hover state because react map gl doesn't support it //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomMarker = ({ feature }: { feature: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  return (
    <div>
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
            localStorage.getItem(feature.properties.Title)
              ? "#00BD9D"
              : "#D81E5B"
          }
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => {
            setIsClicked(true);
            setIsHovered(false);
          }}
        >
          <circle cx="10" cy="10" r="6" />
        </svg>
      </Marker>

      {isHovered && (
        <div
          className="bg-white p-5 text-2xl text-black absolute right-10 top-10 rounded-lg shadow-lg shadow-black tooltip z-1 w-[400px]"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          &#128269; {feature.properties.Title}
        </div>
      )}
      {isClicked && (
        <div className="absolute right-1 top-1 tooltip w-full sm:w-[400px] sm:p-2">
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={feature.properties.Image}
              alt={feature.properties.Title}
              width={400}
              height={400}
              sizes="100vw"
              className="filter grayscale w-full w-[400px] h-[400px] object-cover"
            />
            <div className="p-4 w-full h-40">
              <h1 className="text-xl font-bold mb-2">
                {feature.properties.Title}
              </h1>
              <div className="text-sm mb-2">
                <span className="font-bold">Designed by:</span>{" "}
                {feature.properties.Designer}
              </div>
              <div className="text-sm mb-2">
                <span className="font-bold">Completed in:</span>{" "}
                {feature.properties.Completed}
              </div>
              <a
                href={feature.properties.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div
            className="flex flex-col justify-between absolute top-5 w-20 h-20 left-5 bg-white rounded-lg"
            onClick={() => setIsClicked(false)}
          >
            <CloseButton className="pt-3" />
            <p className="text-center">Back</p>
          </div>
          <div
            className="flex flex-col justify-between absolute right-5 w-20 h-20 bottom-[180px] bg-white rounded-lg"
            onClick={() => {
              if (localStorage.getItem(feature.properties.Title)) {
                localStorage.removeItem(feature.properties.Title);
                setIsVisited(false);
              } else {
                localStorage.setItem(
                  feature.properties.Title,
                  "visited"
                );
                setIsVisited(true);
              }
            }}
          >
            {isVisited && <VisitedCheckbox className="pt-3" />}
            {!isVisited && <UnvisitedCheckbox className="pt-3" />}
            <p className="text-center">Visited?</p>
          </div>
        </div>
      )}
    </div>
  );
};

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
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          {features.map((feature) => (
            <CustomMarker key={feature.id} feature={feature} />
          ))}
        </Map>
      </div>
    </div>
  );
}
