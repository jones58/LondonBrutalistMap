import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header className="z-50">
      <div className="flex justify-center sm:justify-between items-center space-x-5 py-10">
        <Link
          to="/"
          className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
        >
          <h1 className="text-xl">London Brutalist Map</h1>
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Map
              </Link>
            </li>
            <li>
              <Link
                to="/building-index"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Buildings
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Map
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              About/Contact
            </Link>
            <Link
              to="/building-index"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Index
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
