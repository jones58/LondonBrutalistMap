import { FormEvent } from "react";
import { FeaturesData } from "../components/geoJSONData";

export default function Game() {
  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const guess: string = (formData.get("guess") || "")
      .toString()
      .trim();

    console.log("guess is:", guess);
    console.log("building is actually:", buildingName); // This will log the previous value of buildingName, not the updated one
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

  const features = FeaturesData.features;
  // Pick a random building on launch //
  const feature =
    features[Math.floor(Math.random() * features.length)];
  const buildingName = feature.properties.Title;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden w-[400px]">
        <img
          alt="A brutalist building in black and white"
          src={`./images/buildings/${feature.properties.Image}.webp`}
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
