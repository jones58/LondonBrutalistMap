"use client";
import { FormEvent } from "react";

function Form(featureTitle: string) {
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const guess = formData.get("guess");
        console.log("guess is:");
        console.log(guess);
        console.log("building is actually:");
        console.log(featureTitle);
        console.log("submitted value");
        if (guess === featureTitle) {
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
