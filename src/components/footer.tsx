import VisitedCount from "../components/visitedCount.tsx";

export function Footer() {
  return (
    <div
      className="fixed bottom-0 w-full py-5 text-2xl font-bold flex flex-col sm:flex-row items-end justify-center sm:justify-between text-center sm:text-left space-x-4 sm:pr-20 whitebg
  "
    >
      <VisitedCount></VisitedCount>
      <a
        href="https://github.com/jones58/brutalist-map-2"
        target="_blank"
        className="font-bold hover:underline"
      >
        View on Github
      </a>
    </div>
  );
}

export default Footer;
