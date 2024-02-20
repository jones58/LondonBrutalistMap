import { FormEvent, useState } from "react";

export default function Game() {
  const [buildingName, setBuildingName] = useState<string>("");

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const guess: string = (formData.get("guess") || "")
      .toString()
      .trim();

    // Update buildingName state with the value from the form input
    setBuildingName(guess);

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

  return (
    <div className="w-full sm:w-[400px] sm:p-4">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
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
