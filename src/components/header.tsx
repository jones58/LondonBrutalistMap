import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full mt-4 space-y-3 ${
        isOpen ? "h-[50vh]" : "h-[15vh]"
      } bg-white text-black text-2xl flex flex-col sm:h-[10vh] justify-between  sm:flex-row space-x-4 py-[1vh] sm:place-items-center text-center sm:text-left `}
    >
      <h1 className="text-3xl font-bold mt-3">London Brutalist Map</h1>
      <h2 className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        Menu {isOpen ? "▲" : "▼"}
      </h2>
      <Link to="/" className={isOpen ? "block" : "hidden sm:block"}>
        <h2>Map</h2>
      </Link>
      <Link
        to="/about"
        className={isOpen ? "block" : "hidden sm:block"}
      >
        <h2>About/Contact</h2>
      </Link>
      <Link
        to="/building-index"
        className={isOpen ? "block" : "hidden sm:block"}
      >
        <h2>Index</h2>
      </Link>
      {/* <Link to="/game">
        <h2>Game</h2>
      </Link>
      <Link
        to="/contact"
        className={isOpen ? "block" : "hidden sm:block"}
      >
        <h2>Contact</h2>
      </Link> */}
    </nav>
  );
}

export default Header;
