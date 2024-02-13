/* eslint-disable react/no-unescaped-entities */
import { promises as fs } from "fs";
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
          <h2 className="text-2xl">What is Brutalism?</h2>
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
          <h2 className="text-2xl">Why London?</h2>
          <p className="text-xl">
            London has some of the best examples of Brutalism in the
            world. After World War II, a group of idealists began to
            rebuild the city in concrete. What remain are some of the
            most striking civic and housing buildings ever built.
          </p>
        </section>
        <section>
          <h2 className="text-2xl">Brutalist Buildings in London</h2>
          <ul>
            {features.map((feature: any) => (
              <li key={feature.id}>
                <h1>{feature.properties.Title}</h1>
                <p>Designed by: {feature.properties.Designer}</p>
                <p>Completed in: {feature.properties.Completed}</p>
                <a
                  href={feature.properties.Url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
