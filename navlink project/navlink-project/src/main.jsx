import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./assets/components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
const About = lazy(() => import("./assets/components/About.jsx"));
const Contact = lazy(() => import("./assets/components/Contact.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
