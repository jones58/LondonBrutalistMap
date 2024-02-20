import { promises as fs } from "fs";
import { FormEvent } from "react";

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

  const buildingName: string = feature.properties.Title;

  return (
    <div className="w-full sm:w-[400px] sm:p-4">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <img
          alt="A brutalist building in black and white"
          src={feature.properties.Image}
          width={400}
          height={400}
          sizes="100vw"
          className="filter grayscale w-full w-[400px] h-[400px] object-cover"
        />
        <div className="p-4 w-full h-40">
          <h1 className="text-xl font-bold mb-2">
            What building is this?
          </h1>
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const guess: string = (formData.get("guess") || "")
                .toString()
                .trim();
              console.log("guess is:");
              console.log(guess);
              console.log("building is actually:");
              console.log(buildingName);
              console.log("submitted value");
              if (guess === "") {
                alert("Please enter a guess.");
                return;
              }
              if (
                buildingName
                  .toLowerCase()
                  .includes(guess.toLowerCase())
              ) {
                alert("correct");
                window.location.reload();
              } else {
                alert("incorrect");
              }
            }}
            className="flex flex-col space-y-2"
          >
            <input type="text" name="guess" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
