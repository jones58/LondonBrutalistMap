import { promises as fs } from "fs";
import Image from "next/image";
import Form from "../components/form";

export default async function About() {
  const file = await fs.readFile(
    process.cwd() + "/data/features.geojson",
    "utf8"
  );
  const data = JSON.parse(file);
  const features = data.features;

  // Pick a random building on launch //
  const feature =
    features[Math.floor(Math.random() * features.length)];

  const featureTitle = feature.properties.Title;

  return (
    <div className="w-full sm:w-[400px] sm:p-4">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <Image
          alt="A brutalist building in black and white"
          src={feature.properties.Image}
          width={400}
          height={400}
          objectFit="cover"
          sizes="100vw"
          className="filter grayscale w-full w-[400px] h-[400px]"
        />
        <div className="p-4 w-full h-40">
          <h1 className="text-xl font-bold mb-2">
            What building is this?
          </h1>
          <Form featureTitle={featureTitle.featureTitle} />
        </div>
      </div>
    </div>
  );
}
