import "./FeatureHoverInfo.scss";

interface HoverInfoProps {
  title: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HoverInfo: React.FC<HoverInfoProps> = ({
  title,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="hover-info absolute sm:right-10 sm:top-10"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="hover-info__title">
      <span className="hover-info__icon">🔍</span>
      {title}
    </span>
  </div>
);

export default HoverInfo;
