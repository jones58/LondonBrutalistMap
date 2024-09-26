import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VisitedCount: React.FC = () => {
  const [buildingsCount, setCount] = useState(0);

  useEffect(() => {
    const calculateVisitedNumber = () => {
      const visitedNumber = Object.keys(localStorage).filter(
        (key) => !/mapbox/.test(key)
      ).length;
      setCount(visitedNumber);
    };
    calculateVisitedNumber();
    const interval = setInterval(calculateVisitedNumber, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/building-index">
      <h1>{`Visited: ${buildingsCount}/104`}</h1>
    </Link>
  );
};

export default VisitedCount;
