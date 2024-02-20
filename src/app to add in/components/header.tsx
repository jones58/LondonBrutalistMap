function Header() {
  return (
    <div className="w-full h-[20vh] bg-white text-black text-2xl flex flex-col justify-center sm:flex-row sm:justify-between space-x-4 py-[1vh] place-items-center text-left">
      <a href="/">
        <h1 className="text-3xl font-bold">London Brutalist Map</h1>
      </a>
      <a href="/about">
        <h2>About</h2>
      </a>
      <a href="/building-index">
        <h2>Index</h2>
      </a>
      <a href="/game">
        <h2>Game</h2>
      </a>
      <a href="/contact">
        <h2>Contact</h2>
      </a>
    </div>
  );
}

export default Header;
