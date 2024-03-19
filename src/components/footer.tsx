import VisitedCount from "../components/visitedCount.tsx";

export function Footer() {
  return (
    <div className="w-full h-[8vh] sm:h-[10vh] bg-white text-black text-3xl flex flex-col justify-center sm:justify-between space-x-4 py-[1vh] text-center sm:text-left fixed bottom-0">
      <VisitedCount></VisitedCount>
    </div>
  );
}

export default Footer;
