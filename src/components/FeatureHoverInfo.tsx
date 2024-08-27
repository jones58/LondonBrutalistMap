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
    className="bg-white p-5 text-2xl text-black absolute right-10 top-10 rounded-lg shadow-lg shadow-black HoverInfo z-1 w-[400px]"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    🔍 {title}
  </div>
);

export default HoverInfo;
