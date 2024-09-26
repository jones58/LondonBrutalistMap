import VisitedCount from "../components/visitedCount.tsx";

export function Footer() {
  return (
    <div className="w-full text-2xl flex flex-col justify-center sm:justify-right space-x-4 py-5 text-center sm:text-left fixed bottom-0 z-50">
      <VisitedCount></VisitedCount>
    </div>
  );
}

export default Footer;
