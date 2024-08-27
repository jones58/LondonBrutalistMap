import React from "react";
import VisitedCheckbox from "./visitedCheckbox";
import UnvisitedCheckbox from "./unvisitedCheckbox";
import CloseButton from "./closeButton";

interface FeatureCardProps {
  feature: GeoJSON.Feature;
  isVisited: boolean;
  onVisitedToggle: () => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  isVisited,
  onVisitedToggle,
  onClose,
  isOpen = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 sm:rounded-lg overflow-hidden">
      <img
        src={`./images/buildings/${feature.properties?.Image}.webp`}
        alt={feature.properties?.Title}
        width={400}
        height={400}
        sizes="100vw"
        className="filter grayscale w-full w-[400px] h-[400px] object-cover"
      />
      <div className="p-4 w-full h-40">
        <h1 className="text-xl font-bold mb-2">
          {feature.properties?.Title}
        </h1>
        <div className="text-sm mb-2">
          <span className="">Designed by:</span>{" "}
          {feature.properties?.Designer}
        </div>
        <div className="text-sm mb-2">
          <span className=" text-red">Completed in:</span>{" "}
          {feature.properties?.Completed}
        </div>
        <a
          href={feature.properties?.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm  hover:underline"
        >
          Get Directions
        </a>
      </div>

      <div className="absolute bottom-2 right-2 flex space-x-4">
        <div
          className="w-20 h-20 bg-white rounded-lg flex flex-col items-center justify-center"
          onClick={onVisitedToggle}
        >
          {isVisited ? (
            <VisitedCheckbox className="p-3" />
          ) : (
            <UnvisitedCheckbox className="p-3" />
          )}
          <p className="text-center">Visited?</p>
        </div>
      </div>
      {onClose && (
        <div
          className="absolute top-2 left-2 w-20 h-20 bg-white rounded-lg flex flex-col items-center justify-center"
          onClick={onClose}
        >
          <CloseButton className="p-3" />
          <p className="text-center">Back</p>
        </div>
      )}
    </div>
  );
};
export default FeatureCard;
