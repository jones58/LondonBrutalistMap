"use client";

import { useState } from "react";

export default async function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
    alert("Thank you for your message!");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold text-center">Contact me</h1>
      <div className="overflow-x-hidden min-h-screen flex justify-center items-center">
        <form className="max-w-md w-full bg-black p-10 rounded-lg shadow-lg">
          <label className="text-white mb-4 block">
            Name
            <input
              type="text"
              id="name"
              name="name"
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
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
            />
          </label>
          <label className="text-white mb-4 block">
            Message
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-7"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-white font-bold text-left text-black p-10 rounded-md hover:bg-gray-200"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </main>
  );
}
