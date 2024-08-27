import React from "react";
import FeatureCard from "./FeatureCard";

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
    <FeatureCard
      feature={feature}
      isVisited={isVisited}
      onVisitedToggle={onVisitedToggle}
      onClose={onClose}
    />
  </div>
);
export default InfoPanel;
