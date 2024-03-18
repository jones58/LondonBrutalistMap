import VisitedCount from "../components/visitedCount.tsx";

export function Footer() {
  return (
    <div className="w-full h-[8vh] bg-white text-black text-2xl flex flex-col justify-center sm:flex-row sm:justify-between space-x-4 py-[0.5vh] place-items-center text-left fixed bottom-0">
      <VisitedCount></VisitedCount>
    </div>
  );
}

export default Footer;
