import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Map from "./pages/map.tsx";
import Game from "./pages/game.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import Index from "./pages/index.tsx";
import Header from "./components/header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Map />
      </Layout>
    ),
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/game",
    element: (
      <Layout>
        <Game />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/building-index",
    element: (
      <Layout>
        <Index />
      </Layout>
    ),
  },
]);

function Layout({
  children: children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
