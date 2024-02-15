"use client";

import { useState } from "react";

export default async function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="text-white mb-4 block">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insert your email here"
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <label className="text-white mb-4 block">
            Message
            <textarea className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
