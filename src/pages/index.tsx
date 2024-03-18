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

  const isVisited = (title: string) => {
    return localStorage.getItem(title);
  };

  const toggleVisited = (title: string) => {
    if (isVisited(title)) {
      localStorage.removeItem(title);
    } else {
      localStorage.setItem(title, "visited");
    }
  };

  return (
    <section className="overflow-x-hidden pb-10 mb-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => {
          const title = feature.properties.Title;
          const visited = isVisited(title);
          return (
            <li
              key={feature.id}
              className="w-full sm:w-[400px] sm:p-4"
            >
              <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={feature.properties.Image}
                  alt={title}
                  width={400}
                  height={400}
                  sizes="100vw"
                  className="filter grayscale w-full w-[400px] h-[400px] object-cover"
                />
                <div className="p-4 w-full h-40">
                  <h1 className="text-xl font-bold mb-2">{title}</h1>
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
                className="flex flex-col justify-between left-[250px] sm:left-[270px] relative w-20 h-20 bottom-[250px] bg-white rounded-lg"
                onClick={() => {
                  toggleVisited(title);
                  handleVisitedToggle(index);
                }}
              >
                {visited && <VisitedCheckbox className="pt-3" />}
                {!visited && <UnvisitedCheckbox className="pt-3" />}
                <p className="text-center">Visited?</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
