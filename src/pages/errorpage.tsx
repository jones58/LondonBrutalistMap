import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold ">Page Not Found</h1>
      <Link to="/">
        <p className="hover:underline">Back to Home</p>
      </Link>
    </div>
  );
}
