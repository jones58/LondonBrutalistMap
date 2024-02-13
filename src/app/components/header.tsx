function Header() {
  return (
    <div className="w-full h-[20vh] bg-white text-black text-2xl flex flex-col justify-center sm:flex-row sm:justify-between space-x-4 py-[1vh] place-items-center">
      <a href="/">
        <h1 className="text-3xl font-bold">London Brutalist Map</h1>
      </a>
      <a href="/about">
        <h2>About</h2>
      </a>
      <a href="/game">
        <h2>Game</h2>
      </a>
      <a href="https://brutalistmap.jackkershaw.net" target="_blank">
        <h2>London Brutalist Map</h2>
      </a>
    </div>
  );
}

export default Header;
