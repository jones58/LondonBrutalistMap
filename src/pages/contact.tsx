import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
    alert("Thank you for your message!");
  };

  return (
    <main>
      <div className="overflow-x-hidden flex justify-center">
        <form
          className="max-w-md w-full bg-black p-10 rounded-lg shadow-lg space-y-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-white">
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
    </main>
  );
}
