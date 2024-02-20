"use client";
import { FormEvent } from "react";

interface Feature {
  featureTitle: string;
}

function Form({ featureTitle }: Feature) {
  return (
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
        console.log(featureTitle);
        console.log("submitted value");
        if (guess === "") {
          alert("Please enter a guess.");
          return;
        }
        if (featureTitle.toLowerCase().includes(guess.toLowerCase())) {
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
  );
}

export default Form;
