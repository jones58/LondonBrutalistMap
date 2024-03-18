import { FeaturesData } from "../components/geoJSONData.tsx";

export default function Index() {
  const features = FeaturesData.features;
  return (
    <section className="overflow-x-hidden pb-10 mb-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <li key={feature.id} className="w-full sm:w-[400px] sm:p-4">
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={feature.properties.Image}
                alt={feature.properties.Title}
                width={400}
                height={400}
                sizes="100vw"
                className="filter grayscale w-full w-[400px] h-[400px] object-cover"
              />
              <div className="p-4 w-full h-40">
                <h1 className="text-xl font-bold mb-2">
                  {feature.properties.Title}
                </h1>
                <div className="text-sm mb-2">
                  <span className="font-bold">Designed by:</span>{" "}
                  {feature.properties.Designer}
                </div>
                <div className="text-sm mb-2">
                  <span className="font-bold">Completed in:</span>{" "}
                  {feature.properties.Completed}
                </div>
                <a
                  href={feature.properties.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
