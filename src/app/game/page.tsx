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
    <div>{features.length}</div>
    /*
          <li key={feature.id} className="w-full sm:w-[400px] sm:p-4">
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
    */
  );
}
