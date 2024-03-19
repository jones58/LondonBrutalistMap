export default function Contact() {
  return (
    <div className="overflow-x-hidden flex justify-center">
      <form
        className="max-w-md w-full bg-black p-7 pb-8 rounded-lg shadow-lg"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h1 className="text-2xl font-bold text-white pb-2">
          Have a suggestion? Feel free to reach out here.
        </h1>
        <label className="text-white mb-4 block">
          Name
          <input
            required
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
          />
        </label>
        <label className="text-white mb-4 block">
          Email
          <input
            required
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
          />
        </label>
        <label className="text-white mb-4 block">
          Message
          <textarea
            required
            id="message"
            name="message"
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
