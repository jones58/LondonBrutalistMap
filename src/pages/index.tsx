import { FeaturesData } from "../components/geoJSONData.tsx";
import VisitedCheckbox from "../components/visitedCheckbox.tsx";
import UnvisitedCheckbox from "../components/unvisitedCheckbox.tsx";
import { useState } from "react";

export default function Index() {
  const features = FeaturesData.features;
  const [visitedStates, setVisitedStates] = useState(
    new Array(features.length).fill(false)
  );

  const handleVisitedToggle = (index: number) => {
    const updatedVisitedStates = [...visitedStates];
    updatedVisitedStates[index] = !visitedStates[index];
    setVisitedStates(updatedVisitedStates);
  };

  return (
    <section className="overflow-x-hidden pb-10 mb-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <li key={feature.id} className="w-full sm:w-[400px] sm:p-4">
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
              className="flex flex-col justify-between left-[270px] relative w-20 h-20 bottom-[250px]  bg-white rounded-lg"
              onClick={() => handleVisitedToggle(index)}
            >
              {visitedStates[index] && (
                <VisitedCheckbox className="pt-3" />
              )}
              {!visitedStates[index] && (
                <UnvisitedCheckbox className="pt-3" />
              )}
              <p className="text-center">Visited?</p>
            </div>
            )
          </li>
        ))}
      </ul>
    </section>
  );
}
