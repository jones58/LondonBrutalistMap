import { promises as fs } from "fs";
import Image from "next/image";

export default async function About() {
  const file = await fs.readFile(
    process.cwd() + "/data/features.geojson",
    "utf8"
  );
  const data = JSON.parse(file);
  const features = data.features;

  return (
    <main className="overflow-x-hidden">
      <div className="space-y-5">
        <section>
          <h2 className="text-2xl font-bold">What is Brutalism?</h2>
          <p className="text-xl my-4">
            Brutalism is an architectural style that emerged in the
            1950s. It is characterized by its use of raw, unfinished
            concrete, bold geometric shapes, and an expressive design
            approach. The term "brutalism" originates from Le
            Corbusier's phrase in French: "béton brut," which means
            "raw concrete."
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Why London?</h2>
          <p className="text-xl my-4">
            London has some of the best examples of Brutalism in the
            world. After World War II, a group of idealists began to
            rebuild the city in concrete. What remain are some of the
            most striking civic and housing projects ever built.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Building Index</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature: any) => (
              <li
                key={feature.id}
                className="w-full sm:w-[400px] sm:p-4"
              >
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={feature.properties.Image}
                    alt={feature.properties.Title}
                    width={400}
                    height={400}
                    objectFit="cover"
                    sizes="100vw"
                    className="filter grayscale w-full w-[400px] h-[400px]"
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
                      View on Map
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
