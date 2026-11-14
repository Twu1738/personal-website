import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Friends from "./pages/Friends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "projects", element: <Projects /> },
      { path: "blog", element: <Blog /> },
      { path: "friends", element: <Friends /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
