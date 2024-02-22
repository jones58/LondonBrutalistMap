import { useEffect, useState } from "react";

const VisitedCount: React.FC = () => {
  const [buildingsCount, setCount] = useState(0);

  useEffect(() => {
    const calculateVisitedNumber = () => {
      const visitedNumber = Object.keys(localStorage).filter(
        (key) => !/mapbox/.test(key)
      ).length;
      setCount(visitedNumber);
      console.log(visitedNumber);
    };
    calculateVisitedNumber();
    const interval = setInterval(calculateVisitedNumber, 100);
    return () => clearInterval(interval);
  }, []);

  return <h1>{`Visited: ${buildingsCount}/104`}</h1>;
};

export default VisitedCount;
