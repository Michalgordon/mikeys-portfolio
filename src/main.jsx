import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import {
  Hero,
  AboutMe,
  MyExperience,
  MyProjects,
  ContactMe,
  ErrorPage,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Hero />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/experience",
        element: <MyExperience />,
      },
      {
        path: "/projects",
        element: <MyProjects />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
