import React from "react";
import CloseButton from "./closeButton";
import VisitedCheckbox from "./visitedCheckbox";
import UnvisitedCheckbox from "./unvisitedCheckbox";

interface InfoPanelProps {
  feature: GeoJSON.Feature;
  onClose: () => void;
  isVisited: boolean;
  onVisitedToggle: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  feature,
  onClose,
  isVisited,
  onVisitedToggle,
}) => (
  <div className="absolute sm:right-1 sm:top-1 tooltip w-full bg-gray-100 h-[100vh] sm:h-auto sm:rounded-lg sm:w-[400px] sm:p-2 z-10">
    {/* Content of the info panel */}
    <div className="flex flex-col items-center justify-center bg-gray-100 sm:rounded-lg overflow-hidden">
      <img
        src={`./images/buildings/${feature.properties.Image}.webp`}
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
      className="flex flex-col justify-between absolute bottom-[85vh] sm:bottom-[250px] sm:top-5 w-20 h-20 left-5 bg-white rounded-lg"
      onClick={onClose}
    >
      <CloseButton className="pt-3" />
      <p className="text-center">Back</p>
    </div>
    <div
      className="flex flex-col justify-between absolute right-5 w-20 h-20 sm:bottom-[180px] bottom-[85vh] bg-white rounded-lg"
      onClick={onVisitedToggle}
    >
      {isVisited ? (
        <VisitedCheckbox className="pt-3" />
      ) : (
        <UnvisitedCheckbox className="pt-3" />
      )}
      <p className="text-center">Visited?</p>
    </div>
  </div>
);

export default InfoPanel;
