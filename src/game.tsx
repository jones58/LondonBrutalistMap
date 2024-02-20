import { useEffect, useState } from "react";
import fs from "fs/promises";
import { FormEvent } from "react";

export default function About() {
  const [buildingName, setBuildingName] = useState<string>("");
  const [feature, setFeature] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const file = await fs.readFile(
          process.cwd() + "/data/features.geojson",
          "utf8"
        );
        const data = JSON.parse(file);
        const features = data.features;
        const randomFeature =
          features[Math.floor(Math.random() * features.length)];
        setFeature(randomFeature);
        setBuildingName(randomFeature.properties.Title);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const guess: string = (formData.get("guess") || "")
      .toString()
      .trim();
    console.log("guess is:", guess);
    console.log("building is actually:", buildingName);
    console.log("submitted value:", guess);
    if (guess === "") {
      alert("Please enter a guess.");
      return;
    }
    if (buildingName.toLowerCase().includes(guess.toLowerCase())) {
      alert("Correct!");
      window.location.reload();
    } else {
      alert("Incorrect.");
    }
  };

  return (
    <div className="w-full sm:w-[400px] sm:p-4">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        {feature && (
          <img
            alt="A brutalist building in black and white"
            src={feature.properties.Image}
            width={400}
            height={400}
            sizes="100vw"
            className="filter grayscale w-full w-[400px] h-[400px] object-cover"
          />
        )}
        <div className="p-4 w-full h-40">
          <h1 className="text-xl font-bold mb-2">
            What building is this?
          </h1>
          <form
            onSubmit={handleSubmit}
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
