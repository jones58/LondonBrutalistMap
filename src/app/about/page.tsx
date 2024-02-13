/* eslint-disable react/no-unescaped-entities */
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
    <main>
      <div className="space-y-5">
        <section>
          <h2 className="text-2xl font-bold">What is Brutalism?</h2>
          <p className="text-xl">
            Brutalism is an architectural style that emerged in the
            1950s. It is characterized by its use of raw, unfinished
            concrete, bold geometric shapes, and an expressive design
            approach. The term "brutalism" originates from Le
            Corbusier's phrase in French : "béton brut," which means
            "raw concrete."
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Why London?</h2>
          <p className="text-xl">
            London has some of the best examples of Brutalism in the
            world. After World War II, a group of idealists began to
            rebuild the city in concrete. What remain are some of the
            most striking civic and housing buildings ever built.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">
            Brutalist Buildings in London
          </h2>
          <ul className="py-8 flex flex-row flex-wrap">
            {features.map((feature: any) => (
              <li
                key={feature.id}
                className="my-5 flex justify-between w-[400px] m-4"
              >
                <div className="flex flex-col justify-between ">
                <Image
                  src={feature.properties.Image}
                  alt={feature.properties.Title}
                  width="400"
                  height="400"
                  objectFit="cover"
                  sizes="50vw"
                  className="filter grayscale w-[400px] h-[400px] max-w-[100vw]"
                />
                  <div className="w-[400px]">
                    <h1 className="text-2xl font-bold">
                      {feature.properties.Title}
                    </h1>
                    <p className="font-bold">
                      Designed by: {feature.properties.Designer}
                    </p>
                    <p>Completed in: {feature.properties.Completed}</p>
                    <a
                      href={feature.properties.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
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
