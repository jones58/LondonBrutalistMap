import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-[20vh] bg-white text-black text-2xl flex flex-col justify-center sm:flex-row sm:justify-between space-x-4 py-[1vh] place-items-center text-left">
      <Link to="/">
        <h1 className="text-3xl font-bold">London Brutalist Map</h1>
      </Link>
      <Link to="/about">
        <h2>About</h2>
      </Link>
      <Link to="/building-index">
        <h2>Index</h2>
      </Link>
      <Link to="/game">
        <h2>Game</h2>
      </Link>
      <Link to="/contact">
        <h2>Contact</h2>
      </Link>
    </div>
  );
}

export default Header;
