"use client";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import fs from "fs";
import path from "path";

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

export async function getServerSideProps() {
  const filePath = path.resolve(
    process.cwd(),
    "data/features.geojson"
  );

  try {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    const data = JSON.parse(fileContent);

    return {
      props: {
        features: data.features,
      },
    };
  } catch (error) {
    console.error("Error reading file:", error);
    return {
      props: {
        features: [],
      },
    };
  }
}
