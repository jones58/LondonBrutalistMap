"use client";
import Map from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapboxMap() {
  return (
    <div className="w-full">
    <Map
      mapboxAccessToken= "pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzAyeDVlMXlxZzJqbzVvcnBjbDZ3OCJ9.cuGt6LfugBHuqw9rJKQ2DA"
      initialViewState={{
        longitude: -0.1276,
        latitude: 51.5074,
        zoom: 9
      }}

      style={{width: "100%", height: "70vh"}}

      mapStyle="mapbox://styles/jones581/clp8fym2g01u901qmbpzq0dde"
    />
    </div>


  );
}
