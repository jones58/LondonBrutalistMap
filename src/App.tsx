import Header from "./components/header.tsx";
import MapPage from "./pages/map.tsx";
import AboutPage from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import Index from "./pages/index.tsx";
// import Game from "./pages/game.tsx";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-black px-[5vw]">
      <Header />
      <MapPage />
      <AboutPage />
      <Contact />
      <Index />
      {/*<Game /> */}
    </main>
  );
}

export default App;
