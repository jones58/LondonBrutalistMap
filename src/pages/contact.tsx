import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Success!");
        form.reset();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="overflow-x-hidden flex justify-center">
      <form
        className="max-w-md w-full bg-black p-7 pb-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h1 className="text-2xl font-bold text-white pb-2">
          Have a suggestion? Feel free to reach out here.
        </h1>
        <label className="text-white mb-4 block">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
          />
        </label>
        <label className="text-white mb-4 block">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
          />
        </label>
        <label className="text-white mb-4 block">
          Message
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-7"
          ></textarea>
        </label>
        <button
          type="submit"
          className="text-center text-2xl w-full bg-white font-bold text-left text-black p-10 rounded-md hover:bg-gray-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
